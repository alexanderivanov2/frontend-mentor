<template>
    <div class="columns-preview">
        <ColumnPreviewCard 
            v-for="cardData in cardsData"
            :key="cardData.carType"
            :cardData="cardData"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ColumnPreviewCard from './ColumnPreviewCard.vue';

const cardsData = ref([
    {
        carType: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        carIcon: '../../../src/assets/images/3ColumnPreview/icon-sedans.svg',
        cardClasses: 'sedan-card'
    },
    {
        carType: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        carIcon: '../../../src/assets/images/3ColumnPreview/icon-suvs.svg',
        cardClasses: 'suvs-card'
    },
    {
        carType: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        carIcon: '../../../src/assets/images/3ColumnPreview/icon-luxury.svg',
        cardClasses: 'luxury-card'
    },
])
</script>