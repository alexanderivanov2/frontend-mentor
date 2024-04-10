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

import sedanIcon from '/src/assets/images/3ColumnPreview/icon-sedans.svg';
import suvsIcon from '/src/assets/images/3ColumnPreview/icon-suvs.svg';
import luxuryIcon from '/src/assets/images/3ColumnPreview/icon-luxury.svg';

const cardsData = ref([
    {
        carType: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        carIcon: sedanIcon,
        cardClasses: 'sedan-card'
    },
    {
        carType: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        carIcon: suvsIcon,
        cardClasses: 'suvs-card'
    },
    {
        carType: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        carIcon: luxuryIcon,
        cardClasses: 'luxury-card'
    },
])
</script>