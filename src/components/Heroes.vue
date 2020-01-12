<template>
    <section>
        <ul class="heroes-list mdl-grid">
            <li
                v-for="hero in heroes"
                :key="hero.id"
                class="mdl-cell mdl-cell--4-col"
            >
                <Hero
                    :id="hero.id"
                    :photo="hero.photo"
                    :name="hero.name"
                    @onFavoriteClick="(favoriteHandler(hero))"
                />
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
    .heroes-list {
        list-style: none;
    }
</style>

<script>
    import { mapActions } from 'vuex';

    import Hero from "./Hero"

    export default {
        name: "Heroes",
        props: {
            heroes: {
                type: [Array, Object],
                required: true
            }
        },
        components: {
            Hero
        },
        methods: {
            ...mapActions(['addToFavorite', 'removeFromFavorite']),
            favoriteHandler(hero) {
                !hero.isFavorite ? this.addToFavorite(hero) : this.removeFromFavorite(hero);
                hero.isFavorite = !hero.isFavorite;
            }
        }
    }
</script>

<style scoped>

</style>