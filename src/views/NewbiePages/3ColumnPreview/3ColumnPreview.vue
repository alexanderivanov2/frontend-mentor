<template>
    <section class="3-column-preview-page">
        <ColumnPreviewCard 
            v-for="cardData in cardsData"
            :key="cardData.carType"
            :cardData="cardData"
        />
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ColumnPreviewCard from './ColumnPreviewCard.vue';

const cardsData = ref([
    {
        carType: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        carIcon: '/assets/images/3ColumnPreview/icon-sedans.svg'
    },
    {
        carType: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        carIcon: '/assets/images/3ColumnPreview/icon-suvs.svg'
    },
    {
        carType: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        carIcon: '/assets/images/3ColumnPreview/icon-luxury.svg'
    },
])


</script>

<style lang="scss" scoped>

</style>