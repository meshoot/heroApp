<template>
    <section class="mdl-grid">
        <div v-if="!getLoad">
            <ul class="heroes-list mdl-grid mdl-cell--12-col">
                <li
                    v-mdl
                    v-for="hero in heroesData"
                    :key="hero.id"
                    class="mdl-cell mdl-cell--4-col"
                >
                    <cmp-hero
                        :id="hero.id"
                        :photo="hero.photo"
                        :name="hero.name"
                        :isLike="hero.isFavorite"
                        :planet="hero.planet"
                        @onFavoriteClick="(favoriteHandler(hero))"
                    />
                </li>
            </ul>

            <template v-if="heroes.paginatation && heroes.data.length">
                <cmp-paginate
                        :page-count="Math.round(heroes.paginatation.count / 10)"
                        :prev-text="'Предыдущая'"
                        :next-text="'Следующая'"
                        :click-handler="paginationClickHandler"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                />
            </template>
        </div>

        <div
            id="p2"
            class="mdl-progress mdl-js-progress mdl-progress__indeterminate"
            v-else
            v-mdl
        />
    </section>
</template>

<style lang="scss">
    .heroes-list {
        list-style: none;
    }

    .pagination {
        display: flex;
        flex-flow: row nowrap;

        li {
            list-style: none;
            padding: 0 8px;
            &.active {
                background: #ff4081;
                a {
                    color: #ffffff;
                }
            }
        }

        .page-item {
            display: block;
            width: 24px;
            height: 24px;
            padding: 0 2px;
            text-align: center;
        }
    }
</style>

<script>
    import { mapActions, mapGetters } from "vuex"

    import Hero from "./HeroComponent"
    import Paginate from "vuejs-paginate"

    export default {
        name: "Heroes",
        props: {
            heroes: {
                type: [Array, Object],
                required: true
            }
        },
        components: {
            "cmp-hero": Hero,
            "cmp-paginate": Paginate
        },
        computed: {
            ...mapGetters(["getLoad"]),

            heroesData() {
                return Array.isArray(this.heroes) ? this.heroes : this.heroes.data;
            }
        },
        methods: {
            ...mapActions(["addToFavorite", "removeFromFavorite"]),

            favoriteHandler(hero) {
                !hero.isFavorite ? this.addToFavorite(hero) : this.removeFromFavorite(hero);
                hero.isFavorite = !hero.isFavorite;
            },

            paginationClickHandler(page) {
                this.$emit("onChangePage", {page})
            }
        }
    }
</script>