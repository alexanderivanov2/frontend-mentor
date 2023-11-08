<template>
    <div class="column-preview-card">
        <img :src="cardData.carIcon" alt="car type icon">
        <h2>{{ cardData.carType }}</h2>
        <p>{{ cardData.description }}</p>
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