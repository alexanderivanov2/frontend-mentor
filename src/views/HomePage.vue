<template>
    <div class="home-page">
        <div class="challenge-wrapper">
            <h2 class="home-page-challenge-title">Junior Challenges</h2>
            <ChallengeCardCarousel
                :cardsList="juniorCardsList"
            />
            <h2 class="home-page-challenge-title">Newbie Challenges</h2>
            <ChallengeCardCarousel
                :cardsList="newbieCardsList"
            />
        </div>
    </div>
</template>

<script setup>
import ChallengeCardCarousel from '../components/ChallengeCardCarousel/ChallengeCardCarousel.vue'
import { newbieCardsList, juniorCardsList } from '../assets/constants/homePageConstants/cardsConstants' 
</script>
