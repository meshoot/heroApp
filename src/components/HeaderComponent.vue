<template>
    <header class="mdl-layout__header mdl-layout__header--scroll">
        <div class="mdl-layout__header-row">
            <nav class="mdl-navigation">
                <router-link class="mdl-navigation__link" active-class="mdl-navigation__link--active" to="/" exact>Главная</router-link>
                <router-link class="mdl-navigation__link" active-class="mdl-navigation__link--active" to="/favorites" exact>Любимые герои</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss">
    .mdl-navigation {
        &__link {
            &--active {
                background: white;
                color: #3f51b5 !important;
            }
        }
    }
</style>