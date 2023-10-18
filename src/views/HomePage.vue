<template>
    <div class="home-page">
        <h2 class="home-page-challange-title">Newbie Challanges</h2>
        <div class="home-page-newbie-cards-wrapper">
            <HomePageCard v-for="card in newbieCardsList" 
                :key="card.cardName"
                :title="card.cardName"
                :routeName="card.routeName"
            />
        </div>
    </div>
</template>

<script setup>
import { newbieCardsList } from '../assets/constants/homePageConstants/newbieCardsConstants' 
import HomePageCard from '../components/homePage/HomePageCard.vue'

</script>

<style lang="scss" scoped>
.home-page {
    @media (max-width: 475px) {
        .home-page-challange-title {
            text-align: center;
        }
        .home-page-newbie-cards-wrapper {
            justify-content: center;
        }
    }

    .home-page-challange-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 12px 0;
        color: white;
    }

    .home-page-newbie-cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        .home-page-card {
            min-width: 200px;
            flex: 1;
        }
    

    }
}
</style>