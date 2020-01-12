export default {
    state: {
        favotireList: []
    },
    getters: {
        getFavotireList: state => state.favotireList
    },
    actions: {
        addToFavorite(context, hero) {
            context.commit('updateFavotireList', {
                type: 'add',
                hero
            });
        },
        removeFromFavorite(context, hero) {
            context.commit('updateFavotireList', {
                type: 'remove',
                hero
            });
        }
    },
    mutations: {
        updateFavotireList(state, payload) {
            switch (payload.type) {
                case 'add':
                    state.favotireList.push(payload.hero);
                    break;
                case 'remove':
                    state.favotireList = state.favotireList.filter(hero => hero.id !== payload.hero.id);
                    break;
            }
        }
    }
};

