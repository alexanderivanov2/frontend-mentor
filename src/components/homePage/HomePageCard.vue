<template>
    <div class="home-page-card">
        <router-link :to="{ name: routeName }" class="home-page-card-link">
            <h6 class="home-page-card-title">{{ title }}</h6>
            <div class="go-corner">
                <div class="go-arrow">
                    →
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
    import { toRefs } from 'vue'
    
    const props = defineProps({
        title: {
            type: String,
            default: '',
        },
        routeName: {
            type: String,
            default: 'Home',
        },
    })

    const { title, routeName } = toRefs(props)

</script>

<style lang="scss">
.home-page-card {
    border-radius: 5px;
    max-height: 300px;
    &-link {
        display: block;
        position: relative;
        background-color: #f2f8f9;
        max-width: 265px;
        border-radius: 5px;
        padding: 32px 24px;
        margin: 12px;
        text-decoration: none;
        z-index: 0;
        overflow: hidden;

        .home-page-card-title {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
        }

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: -16px;
            right: -16px;
            background: #00838d;
            height: 32px;
            width: 32px;
            border-radius: 10px;
            transform: scale(1);
            transform-origin: 50% 50%;
            transition: transform 0.25s ease-out;
        }

        &:hover:before {
            transform: scale(21);
        }

        .go-corner {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 32px;
            height: 32px;
            overflow: hidden;
            top: 0;
            right: 0;
            background-color: #00838d;
            border-radius: 0 4px 0 32px;
        }

        .go-arrow {
            margin-top: -4px;
            margin-right: -4px;
            color: white;
            font-family: courier, sans;
            font-size: 1.2rem;
        }
    }
}
</style>