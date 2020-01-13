<template>
    <form @submit.prevent="">
        <div class="mdl-textfield mdl-js-textfield">
            <input
                class="mdl-textfield__input"
                type="text" id="searchField"
                @input="onChange($event)"
            >
            <label class="mdl-textfield__label" for="searchField">Поиск героя</label>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Search",
        methods: {
            onChange(event) {
                this.$emit('onSearch', {search: event.target.value});
            }
        }
    }
</script>

<style scoped>

</style>