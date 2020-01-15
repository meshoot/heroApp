<template>
    <form @submit.prevent="">
        <div class="mdl-textfield mdl-js-textfield">
            <input
                class="mdl-textfield__input"
                type="text" id="searchField"
                @input="onChangeSearch($event)"
            >
            <label class="mdl-textfield__label" for="searchField">Поиск героя</label>
        </div>
    </form>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: "Search",
        methods: {
            onChangeSearch: _.debounce(function(event) {
                this.$emit('onSearch', {search: event.target.value});
            }, 1000)
        }
    }
</script>

<style scoped>

</style>