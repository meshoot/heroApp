import Axios from "axios";
import {API_URL} from "../../../api/config";

export default {
    state: {
        isLoad: false,
        heroes: {},
        currentFilter: null
    },
    getters: {
        getAllHeroes(state) {
            let heroes = state.heroes.data;
            let paginatation = state.heroes.paginatation;

            switch (state.currentFilter) {
                case 'n/a':
                    return {
                        data: heroes.filter(hero => hero.gender === 'n/a'),
                        paginatation
                    };
                case "female":
                    return {
                        data: heroes.filter(hero => hero.gender === 'female'),
                        paginatation
                    };
                case "male":
                    return {
                        data: heroes.filter(hero => hero.gender === 'male'),
                        paginatation
                    };
                default:
                    return state.heroes;
            }
        },
        getFoundHeroes: state => state.foundHeroes,
        getCurrentFilter: state => state.currentFilter,
        getLoad: state => state.isLoad
    },
    actions: {
        fetchHeroes(context, params) {
            Axios.get(`${API_URL}/people/`, {params})
                .then(response => response.data)
                .then(data => {
                    let heroes = {};
                    context.commit('updateLoad', true);
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
                    context.commit('updateLoad', false);
                })
                .catch(error => console.log(error));
        },
        setFilter(context, filter) {
            context.commit('updateFilter', filter);
        }
    },
    mutations: {
        updateFilter: (state, filter) => {
            state.currentFilter = filter;
        },
        updateHeroes: (state, heroes) => {
            state.heroes = heroes;
        },
        updateLoad: (state, value) => state.isLoad = value
    }
};

function slicePeopleId(url) {
    const regExp = /people\/(.*?)\//;

    return regExp.exec(url)[1];
}