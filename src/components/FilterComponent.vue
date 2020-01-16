<template>
    <div>
        <h3>Фильтр</h3>

        <form @submit.stop="">
            <div
                class="filter-item"
                v-for="filter in filters"
            >
                <div class="filter-item__name">{{ filter.label }}:</div>

                <div class="filter-item__values" v-for="option in filter.options">
                    <label
                        v-mdl
                        class="mdl-radio mdl-js-radio mdl-js-ripple-effect"
                        :for="option.value"
                    >
                        <input
                            type="radio"
                            class="mdl-radio__button"
                            :id="option.value"
                            :value="option.value"
                            v-model="changeFilter"
                        >
                        <span class="mdl-radio__label">{{ option.label }}</span>
                    </label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FilterComponent",
        props: {
            filters: {
                type: [Array, Object],
                required: true
            },
            currentFilter: {
                type: String
            }
        },
        computed: {
          changeFilter: {
              get() {
                  return this.currentFilter
              },
              set(filter) {
                  this.$emit('onFilterChange', filter);
              }
          }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .filter-item {
        &__name {
            margin-bottom: 18px;
            font-size: 1.2rem;
            font-weight: 700;
        }
        &__values {
            display: flex;
            flex-flow: column nowrap;

            label {
                &:not(:last-child) {
                    margin-bottom: 6px;
                }
            }
        }
    }
</style>