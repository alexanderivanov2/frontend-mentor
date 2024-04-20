<template>
    <div id="challangeCard"
    :style="{
        backgroundImage: `url(${imgUrl})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }"
    >
        <h3 class="challange-card-title">{{ title }}</h3>
        <span class="challange-card-difficulty">{{ getDifficulty }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

interface Props {
    title: string;
    imgUrl: string;
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
</script>

<style scooped lang="scss">
    #challangeCard {
        position: relative;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 1px;

        .challange-card-title {
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

        .challange-card-difficulty {
            position: absolute;
            top: 5%;
            right: 5%;
            color: white;
            background-color: black;
            padding: 0.75rem 1.5rem;
            font-size: 1.2rem;
            font-weight: 900;
            border-radius: 100px;
        }
    }
</style>