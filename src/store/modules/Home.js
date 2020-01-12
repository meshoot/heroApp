export default {
    state: {
        isSearching: false,
        isFiltering: true,
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
        getAllFilters: state => state.filters
    },
    actions: {
        setFilterValue(context, filter) {
            context.commit('updateFilterValue', filter);
        },
        setSearching(context, value) {
            context.commit('updateSearching', value);
        },
        setFiltering(context, value) {
            context.commit('updateFiltering', value);
        }
    },
    mutations: {
        updateSearching: (state, value) => state.isSearching = value,
        updateFiltering: (state, value) => state.isFiltering = value,
        updateFilterValue: (state, filter) => {
            state.filters.map(el => {
                if (el.name === filter.name) el.value = filter.value
            });
        }
    }
};