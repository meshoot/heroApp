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
         async fetchHeroes(context, params) {
             let heroes = {};

             await Axios.get(`${API_URL}/people/`, {params})
                .then(response => response.data)
                .then(data => {
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

                    return heroes
                })
                 .then(heroes => {
                     return heroes.data.forEach(hero => {
                         hero.planet = getHeroPlanet(hero.id);
                     });

                     function getHeroPlanet(id) {
                         return Axios.get(`${API_URL}/planets/${id}`)
                             .then(response => response.data)
                             .then(data => data.name);
                     }
                 })
                .catch(error => console.log(error));

             context.commit('updateHeroes', heroes);
        }
    },
    mutations: {
        updateHeroes: (state, heroes) => state.heroes = heroes
    }
};

function slicePeopleId(url) {
    return /people\/(.*?)\//.exec(url)[1];
}
