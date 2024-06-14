<template>
    <div class="skilled-e-learning-landing-page">
            <header class="skilled-e-learning-header">
                <img :src="logoDark" alt="dark logo of skilled">
                <button class="btn btn-dark-blue">Get Started</button>
            </header>
            <section class="header-section">
                <div class="header-section-intro">
                    <h2 class="header-section-intro-title">Maximize skill,
                        minimize budget</h2>
                    <p class="header-section-intro-description">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                    <button class="btn btn-light-gradient">Get Started</button>
                </div>
                <div class="header-section-image-wrapper">
                    <img :srcset="`${imageHero1x} 1x, ${imageHero2x} 2x`" alt="">
                </div>
            </section>
    </div>
</template>

<script setup>
import logoDark from '/assets/images/LandingPages/skilledELearningPage/logo-dark.svg'
import logoLight from '/assets/images/LandingPages/skilledELearningPage/logo-light.svg'
import imageHero1x from '/assets/images/LandingPages/skilledELearningPage/image-hero-mobile.webp'
import imageHero2x from '/assets/images/LandingPages/skilledELearningPage/image-hero-mobile@2x.png'

</script>