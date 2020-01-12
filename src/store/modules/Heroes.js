import Axios from "axios"

import { API_URL } from "../../../api/config";

export default {
    state: {
        heroes: [],
        foundHeroes: []
    },
    getters: {
        allHeroes: state => state.heroes,
        allFoundHeroes: state => state.foundHeroes
    },
    actions: {
        getHeroes(context) {
            Axios.get(`${API_URL}/people/`)
                .then(response => response.data)
                .then(data => {
                    const heroes = data.results.map(hero => ({
                        id: slicePeopleId(hero.url),
                        photo: `https://starwars-visualguide.com/assets/img/characters/${slicePeopleId(hero.url)}.jpg`,
                        name: hero.name,
                        isFavorite: false
                    }));

                    context.commit('updateHeroes', heroes);
                })
                .catch(error => console.log(error));
        },
        searchHero(context, payload) {
            Axios.get(`${API_URL}/people/?search=${payload.toLowerCase()}`)
                .then(response => response.data)
                .then(data => {
                    const heroes = data.results.map(hero => ({
                        id: slicePeopleId(hero.url),
                        photo: `https://starwars-visualguide.com/assets/img/characters/${slicePeopleId(hero.url)}.jpg`,
                        name: hero.name,
                        isFavorite: false
                    }));

                    context.commit('updatefoundHeroes', heroes);
                })
        }
    },
    mutations: {
        updateHeroes(state, heroes) {
            state.heroes = heroes;
        },
        updatefoundHeroes(state, heroes) {
            state.foundHeroes = heroes;
        }
    }
};

function slicePeopleId(url) {
    return /people\/(.*?)\//.exec(url)[1];
}
