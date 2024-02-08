<template>
    <div class="column-preview-card" :class="cardData.cardClasses">
        <img :src="cardData.carIcon" alt="car type icon" class="column-preview-card-icon">
        <h2 class="column-preview-card-title">{{ cardData.carType }}</h2>
        <p class="column-preview-card-description">{{ cardData.description }}</p>
        <button class="column-preview-card-btn"><span>Learn More</span></button>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    cardData: {
        typ: Object
    }
})
const { cardData } = toRefs(props)
</script>