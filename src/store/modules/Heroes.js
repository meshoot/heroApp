import Axios from "axios"

import { API_URL } from "../../../api/config";

export default {
    state: {
        heroes: {},
    },
    getters: {
        getAllHeroes: state => state.heroes,
        getFoundHeroes: state => state.foundHeroes
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
        }
    },
    mutations: {
        updateHeroes: (state, heroes) => state.heroes = heroes
    }
};

function slicePeopleId(url) {
    return /people\/(.*?)\//.exec(url)[1];
}
