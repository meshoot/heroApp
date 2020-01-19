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

            switch (state.currentFilter) {
                case 'n/a':
                    return {
                        data: heroes.filter(hero => hero.gender === 'n/a')
                    };
                case "female":
                    return {
                        data: heroes.filter(hero => hero.gender === 'female')
                    };
                case "male":
                    return {
                        data: heroes.filter(hero => hero.gender === 'male')
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
        async fetchHeroes(context, params) {
            context.commit('updateLoad', true);

            let heroes, pagination;

            await Axios.get(`${API_URL}/people/`, params)
                .then(response => response.data)
                .then(data => {
                    heroes = data.results;
                    pagination = {
                        count: data.count,
                        next: data.next,
                        previous: data.previous
                    };
                });

            for(let hero of heroes) {
                await Axios.get(`${API_URL}/planets/${/planets\/(.*?)\//.exec(hero.homeworld)[1]}`)
                    .then(response => response.data)
                    .then(data => hero.homeworld = data.name)
            }

            heroes = heroes.map(hero => ({
                id: /people\/(.*?)\//.exec(hero.url)[1],
                photo: `https://starwars-visualguide.com/assets/img/characters/${ /people\/(.*?)\//.exec(hero.url)[1]}.jpg`,
                name: hero.name,
                planet: hero.homeworld,
                isFavorite: false,
                gender: hero.gender
            }));

            context.commit('updateHeroes', heroes);
            context.commit('updateLoad', false)
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