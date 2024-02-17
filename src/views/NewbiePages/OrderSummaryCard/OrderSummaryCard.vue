<template>
    <section id="orderSummaryCardPage">
        <div class="background-image">
            <img :src="isMobile ? mobileBackground : desktopBackground" alt="background-image">
        </div>
        <div class="order-summary-card">
            <div class="card-header-image-wrapper">
                <img src="../../../../public/assets/images/orderSummaryCard/illustration-hero.svg" alt="order hero illustation">
            </div>
            <div class="card-body-wrapper">
                <h1 class="card-heading">Order Summary</h1>
                <p class="card-description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </div>
            <div class="card-plan-wrapper">
                <div class="card-plan-info">
                    <img src="../../../../public/assets/images/orderSummaryCard/icon-music.svg" alt="music icon" />
                    <div class="card-plan">
                        <p class="card-plan-type">Annual Plan</p>
                        <p class="card-plan-price">$59.99/year</p>
                    </div>
                </div>
                <a href="#" class="card-plan-link">Change</a>
            </div>
            <div class="options-button-wrapper">
                <button class="payment-button">Proceed to Payment</button>
                <button class="cancel-button">Cancel Order</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import mobileBackground from '../../../../public/assets/images/orderSummaryCard/pattern-background-mobile.svg'
import desktopBackground from '../../../../public/assets/images/orderSummaryCard/pattern-background-desktop.svg'

import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

const isMobile = ref(() => false)

const handleResize = () => {
    isMobile.value = document?.documentElement?.clientWidth < 1440;
}

onBeforeMount(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>