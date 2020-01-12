<template>
    <main class="mdl-layout__content">
        <div class="page-content">
            <h1>Любимые герои</h1>
            <section class="mdl-grid">
                <cmp-heroes
                    class="mld-cell mdl-cell--12-col"
                    :heroes="getFavotireList"
                />
            </section>
        </div>
    </main>
</template>

<script>
    import { mapGetters } from "vuex"

    import Heroes from "../components/Heroes";

    export default {
        name: 'FavoriteHeroes',
        components: {
            'cmp-heroes': Heroes
        },
        computed: {
            ...mapGetters(["getFavotireList"])
        }
    }
</script>

<style scoped>

</style>