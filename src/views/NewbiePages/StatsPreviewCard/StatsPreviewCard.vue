<template>
    <section id="statsPreviewCardPage">
        <div id="statsPreviewCard">
            <div class="card-image-container"></div>
            <div class="card-information-container">
                <h2 class="card-information-header">Get <span class="header-acent">insights</span> that help your business grow.</h2>
                <p class="card-information-descripiton">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div class="card-information-statistics">
                    <div class="card-information-statistics-item ">
                        <p class="companies-stats"></p>
                        <p class="stats-label">Companies</p>
                    </div>
                    <div class="card-information-statistics-item">
                        <p class="templates-stats">314</p>
                        <p class="stats-label">Templates</p>
                    </div>
                    <div class="card-information-statistics-item">
                        <p class="queries-stats">12</p>
                        <p class="stats-label">Queries</p>
                    </div>
                </div>
                <p id="counter"></p>
            </div>
        </div>
    </section>
</template>


<script setup>
import { onMounted } from 'vue';

import { animateCounter } from '../../../composables/useRequestAnimationFrameAnimations.js'

onMounted(() => {
    animateCounter('.companies-stats', 0, 10, 500);
    animateCounter('.templates-stats', 0, 314, 500);
    animateCounter('.queries-stats', 0, 12, 500);
})

</script>

<style scoped lang="scss">


</style>