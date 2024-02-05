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