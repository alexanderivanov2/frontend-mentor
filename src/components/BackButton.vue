<template>
    <div class="back-button-wrapper" v-if="isShow">
        <router-link :to="{ name: 'Home'}" class="back-button">&#171;</router-link>
    </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const isShow = ref(false)
watchEffect(() => {
    if (route.name !== 'Home' && !isShow.value) {
        isShow.value = true
    } else if (route.name === 'Home' && isShow.value) {
        isShow.value = false
    }
})
</script>

<style scoped lang="scss">
.back-button-wrapper {
    width: 50px;
    height: 50px;
    padding: 0.5rem 1rem 1rem;
    background-color: #4282B3;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    display: flex;

    position: absolute;
    top: calc(-25px + -1rem);
    left: 10%;
    transition: all ease-in-out 500ms;

    .back-button {
        display: inline-block;
        margin: auto;
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        color: #0D1C1C;
    }

    &:hover {
        top: 0;
    }
}
</style>