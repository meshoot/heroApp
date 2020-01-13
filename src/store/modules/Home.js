export default {
    state: {
        currentFilter: null
    },
    getters: {
        getCurrentFilter: state => state.currentFilter
    },
    actions: {
        setFilter(context, filter) {
            context.commit('updateFilter', filter.value);
        }
    },
    mutations: {
        updateFilter: (state, filter) => {
            state.currentFilter = filter
        }
    }
};