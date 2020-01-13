<template>
    <main class="mdl-layout__content">
        <div class="page-content">
            <h1>Главная</h1>
            <section class="mdl-grid">
                <cmp-filter
                    :filters="getAllFilters"
                    class="mdl-cell mdl-cell--3-col"
                />
                <div class="mdl-grid mdl-cell mdl-cell--9-col">
                    <cmp-search
                        @onSearch="searchHandler($event)"
                        class="mdl-cell mdl-cell--12-col"
                    />
                    <cmp-heroes
                        :heroes="filteredHeroes"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import Search from "../components/Search"
    import Heroes from "../components/Heroes"
    import Filter from "../components/FilterComponent"

    export default {
        name: 'Home',
        components: {
            'cmp-search': Search,
            'cmp-heroes': Heroes,
            'cmp-filter': Filter
        },
        mounted() {
            if (!this.allHeroes.length) {
                this.getHeroes();
            }
        },
        computed: {

            femaleHeroes () {
               return  this.heroes.filter(hero => hero.gender === 'female')
            },

            maleHeroes () {
                return  this.heroes.filter(hero => hero.gender === 'male')
            },

            naHeroes () {
                return  this.heroes.filter(hero => hero.gender === 'n/a')
            },

            filteredHeroes () {
                switch (this.currentFilter) {
                    case null: return this.heroes
                    case 'n/a': return this.naHeroes
                    case 'female': return this.femaleHeroes
                    case 'male': return this.maleHeroes
                }
            },
            ...mapGetters(["allHeroes", "allFoundHeroes", "getAllFilters", "getIsSearching", "getIsFiltering", "currentFilter"]),

            heroes() {
                return this.allHeroes;
            }
        },
        methods: {
            ...mapActions(['getHeroes', 'searchHero']),

            searchHandler(value) {
                this.searchHero(value);
            }
        }
    }
</script>

<style scoped>

</style>