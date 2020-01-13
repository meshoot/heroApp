export default {
    state: {
        currentFilter: null,
        filters: [
            {
                name: 'gender',
                label: 'Пол',
                value:  null,
                options: [
                    {label: 'Все', value: null},
                    {label: 'Мужчины', value: 'male'},
                    {label: 'Женщины', value: 'female'},
                    {label: 'Не указан', value: 'n/a'}
                ]
            }
        ]
    },
    getters: {
        getIsSearching: state => state.isSearching,
        getIsFiltering: state => state.isFiltering,
        getAllFilters: state => state.filters,
        currentFilter: state => state.currentFilter
    },
    actions: {
        setFilterValue(context, filter) {
            context.commit('updateFilterValue', filter);
        }
    },
    mutations: {
        updateSearching: (state, value) => state.isSearching = value,
        updateFiltering: (state, value) => state.isFiltering = value,
        updateFilterValue: (state, filter) => {
            state.currentFilter = filter.value
        }
    }
};