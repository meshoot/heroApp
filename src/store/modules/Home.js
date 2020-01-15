import Axios from "axios";
import {API_URL} from "../../../api/config";

export default {
    state: {
        heroes: {},
        currentFilter: null
    },
    getters: {
        getAllHeroes(state) {
            let heroes = state.heroes.data;
            let paginatation = state.heroes.paginatation;

            switch (state.currentFilter) {
                case 'n/a':
                    return {data: heroes.data.filter(hero => hero.gender === 'n/a'), paginatation};
                case "female":
                    return {data: heroes.data.filter(hero => hero.gender === 'female'), paginatation};
                case "male":
                    return {data: heroes.data.filter(hero => hero.gender === 'male'), paginatation};
                default:
                    return {heroes, paginatation};
            }
        },
        getFoundHeroes: state => state.foundHeroes,
        getCurrentFilter: state => state.currentFilter
    },
    actions: {
        fetchHeroes(context, params) {
            Axios.get(`${API_URL}/people/`, {params})
                .then(response => response.data)
                .then(data => {
                    let heroes = {};

                    heroes.data = data.results.map(hero => ({
                        id: slicePeopleId(hero.url),
                        photo: `https://starwars-visualguide.com/assets/img/characters/${slicePeopleId(hero.url)}.jpg`,
                        name: hero.name,
                        isFavorite: false,
                        gender: hero.gender
                    }));

                    heroes.paginatation = {
                        count: data.count,
                        next: data.next,
                        previous: data.previous
                    };

                    context.commit('updateHeroes', heroes);
                })
                .catch(error => console.log(error));
        },
        setFilter(context, filter) {
            context.commit('updateFilter', filter.value);
        }
    },
    mutations: {
        updateFilter: (state, filter) => {
            state.currentFilter = filter
        },
        updateHeroes: (state, heroes) => state.heroes = heroes
    }
};

function slicePeopleId(url) {
    const regExp = /people\/(.*?)\//;

    return regExp.exec(url)[1];
}