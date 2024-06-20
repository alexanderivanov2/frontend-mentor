<template>
    <div class="equalizer-landing-page">
        <header class="equalizer-landing-page-header">
            <img :src="equalizerLogo" alt="equalizer logo">
        </header>
        <section class="equalizer-landing-page-hero-section">
            <h2 class="equalizer-landing-page-hero-section-title">We make your music sound extraordinary.</h2>
            <p class="equalizer-landing-page-hero-section-description">A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
        </section>
        <section class="equalizer-landing-page-premium-eq">
            <div class="premium-eq-illustration-app-wrapper">
                <img :src="illustrationApp" alt="app illustration" class="premium-eq-illustration-app">
            </div>
        </section>
    </div>
</template>

<script setup>
import equalizerLogo from '/assets/images/LandingPages/equalizerLandingPage/logo.svg'
import illustrationApp from '/assets/images/LandingPages/equalizerLandingPage/illustration-app.png'
</script>