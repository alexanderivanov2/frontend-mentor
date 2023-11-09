<template>
    <section class="columns-preview-page">
        <div class="columns-preview">
            <ColumnPreviewCard 
                v-for="cardData in cardsData"
                :key="cardData.carType"
                :cardData="cardData"
            />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ColumnPreviewCard from './ColumnPreviewCard.vue';

const cardsData = ref([
    {
        carType: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        carIcon: '/assets/images/3ColumnPreview/icon-sedans.svg',
        cardClasses: 'sedan-card'
    },
    {
        carType: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        carIcon: '/assets/images/3ColumnPreview/icon-suvs.svg',
        cardClasses: 'suvs-card'
    },
    {
        carType: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        carIcon: '/assets/images/3ColumnPreview/icon-luxury.svg',
        cardClasses: 'luxury-card'
    },
])


</script>

<style lang="scss" scoped >
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap');
.columns-preview-page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    font-size: 15px;
    font-family: 'Lexend Deca', sans-serif;

    .columns-preview {
        width: 327px;
        margin: 88px auto;
        border-radius: 8px;
    }
}

@media screen and (min-width: 1440px) {
    $bg-color: #F2F2F2;
    .columns-preview-page {
        background-color: $bg-color;
        .columns-preview {
            display: flex;
            min-width: 920px;
            max-height: 500px;
            margin: 0;
            position: absolute;
            top: calc(50% + 20px);
            left: 50%;
            transform: translate(-50%, -50%);
        }
    } 
}
</style>