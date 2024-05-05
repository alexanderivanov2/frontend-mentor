<template>
    <router-link :to="{ name: routeName }" >
        <div id="challengeCard"
        :style="{
            background: `${linearGradient}, url(${imgUrl})`,
            height: '200px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }"
        >
            <h3 class="challenge-card-title">{{ title }}</h3>
            <span class="challenge-card-difficulty">{{ getDifficulty }}</span>
        </div>
    </router-link>

</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

interface Props {
    title: string;
    imgUrl: string;
    routeName: string;
    difficulty: number | string;
}

interface DifficultyDictionary {
    [key: string | number]: string;
}

const props = defineProps<Props>()
const { difficulty } = toRefs(props)

const difficultyDictionary: DifficultyDictionary = {
    1: 'Newbie',
    2: 'Junior',
}
const getDifficulty = computed(() => difficultyDictionary[difficulty.value] ?? 'unknown')
const linearGradient = 'linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))'
</script>

<style scooped lang="scss">
    #challengeCard {
        position: relative;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 1px;
        border-radius: 10px;

        .challenge-card-title {
            font-size: 1.6rem;
            font-weight: 900;
            color: white;
            position: absolute;
            bottom: 5%;
            left: 0;
            width: 100%;
            text-align: center;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, .95);
        }

        .challenge-card-difficulty {
            position: absolute;
            top: 5%;
            right: 5%;
            color: white;
            background-color: yellowgreen;
            padding: 0.75rem 1.5rem;
            font-size: 1.2rem;
            font-weight: 500;
            border-radius: 100px;
        }
    }
</style>