<template>
    <div class="home-page-card">
        <h6 class="home-page-card-title">{{ title }}</h6>
        <router-link :to="{ name: routeName }" class="home-page-card-link">{{ title }} &#187;</router-link>
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
        max-width: 250px;
        max-height: 250px;
        border: 3px solid #1D2C35;
        border-radius: 10px;

        .home-page-card-title {
            padding: 1rem;
            background-color: white;
            border-bottom: 5px solid #F4CB15;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            text-align: center;
            font-weight: bold;
        }

        .home-page-card-link {
            display: block;
            background-color: #05050F;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            padding: 1rem;
            text-align: center;
            text-decoration: none;
            color: white;
            font-weight: bold;

            &:hover {
                background-color: #F26419;
                color: black;
                transition: all ease-in-out 500ms;
            }
        }

    }
</style>