<template>
    <header class="mdl-layout__header mdl-layout__header--scroll">
        <div class="mdl-layout__header-row">
            <nav class="mdl-navigation">
                <router-link class="mdl-navigation__link" to="/">Главная</router-link>
                <router-link class="mdl-navigation__link" to="/favorites">Любимые герои</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style scoped>

</style>