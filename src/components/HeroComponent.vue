<template>
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div
            class="mdl-card__title mdl-card--expand"
            :style="{
                'backgroundImage': `url(${photo})`
            }"
        >
            <h2 class="mdl-card__title-text">{{ name }}</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <div>
                <b>Планета: {{ planet }}</b>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <button
                v-mdl
                class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-like"
                @click="onFavoriteClick"
            >
                <i class="material-icons">
                    {{ isLike ? 'favorite' : 'favorite_border' }}
                </i>
            </button>
        </div>
    </div>
</template>

<style lang="scss">
    .demo-card-square.mdl-card {
        width: auto;
        height: 400px;
    }

    .demo-card-square > .mdl-card__title {
        color: #fff;
        background: #46B6AC;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mdl-card {
        width: auto;
    }

    .button-like i {
        color: #f44336;
    }
</style>

<script>
    export default {
        name: "Hero",
        props: {
            id: {
              type: [Number, String]
            },
            name: {
                type: String,
                required: true
            },
            photo: {
                type: String,
                required: false
            },
            planet: {
              type: String
            },
            isLike: {
                type: Boolean
            }
        },
        computed: {
          isLiked: () => this.isLike
        },
        methods: {
            onFavoriteClick() {
                this.$emit('onFavoriteClick');
            }
        }
    }
</script>