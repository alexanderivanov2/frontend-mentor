<template>
    <header class="workit-header">
        <div class="workit-header-wrapper">
            <div class="workit-header-top">
                <img :src="workitLogoLight" alt="workit tag">
                <a href="#" class="workit-apply-link">Apply for access</a>
            </div>
            <div class="workit-header-top-body">
                <h1 class="workit-header-top-body-title">Data <span class="underline">tailred</span> to your needs.</h1>
                <button class="workit-header-top-body-btn-learn-more shine-btn-effect">Learn more</button>
            </div>
            <div class="workit-header-img-wrapper">
                <img :src="mobileImageHero" alt="image of mobile phone" class="workit-header-img">
            </div>
        </div>
    </header>
    <section class="benefits-section">

    </section>

</template>

<script setup>
import workitLogoLight from '/assets/images/LandingPages/WorkitLandingPage/logo-light.svg'
import mobileImageHero from '/assets/images/LandingPages/WorkitLandingPage/image-hero.webp'

</script>