<template>
    <main class="mdl-layout__content">
        <div class="page-content">
            <h1>Главная</h1>
            <section class="mdl-grid">
                <cmp-filter
                    :filters="filters"
                    :currentFilter="getCurrentFilter"
                    @onFilterChange="setFilter($event)"
                    class="mdl-cell mdl-cell--3-col"
                />
                <div class="mdl-grid mdl-cell mdl-cell--9-col">
                    <cmp-search
                        @onSearch="fetchHeroes($event)"
                        class="mdl-cell mdl-cell--12-col"
                    />
                    <cmp-heroes
                        :heroes="getAllHeroes"
                        @onChangePage="fetchHeroes($event)"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import Search from "../components/SearchComponent"
    import Heroes from "../components/HeroesComponent"
    import Filter from "../components/FilterComponent"

    export default {
        name: 'Home',
        data: () => ({
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
        }),
        components: {
            'cmp-search': Search,
            'cmp-heroes': Heroes,
            'cmp-filter': Filter
        },
        mounted() {
            if (!this.getAllHeroes.data) this.fetchHeroes();
        },
        computed: {
            ...mapGetters(["getAllHeroes", "getFoundHeroes", "getCurrentFilter"])
        },
        methods: {
            ...mapActions(['fetchHeroes', 'setFilter'])
        }
    }
</script>

<style scoped>

</style>