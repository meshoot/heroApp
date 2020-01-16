<template>
    <div class="mdl-layout mdl-js-layout">
        <Header/>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import '~material-design-lite/material.min.css';
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>

<script>
    import Header from './components/HeaderComponent';

    export default {
        name: 'App',
        components: {
            Header
        }
    }
</script>