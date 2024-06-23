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
                <div class="premium-eq-card">
                    <h3 class="premium-eq-card-title">Premium EQ</h3>
                    <p class="premium-eq-card-description">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
                    <p class="premium-eq-card-monthly-price"><span class="price">$4</span><span class="month">/ month</span></p>
                    <div class="premium-eq-card-buttons-wrapper">
                        <button class="btn btn-ios"><img :src="iosLogo" alt="iOS/Apple Logo">iOS Download</button>
                        <button class="btn btn-android"><img :src="androidLogo" alt="Android Logo">Android Download</button>
                    </div>
                </div>
            </div>
        </section>
        <footer class="equalizer-landing-page-footer">
            <div class="equalizer-landing-page-footer-head">
                <img :src="equalizerLogo" alt="equalizer logo" class="equalizer-landing-page-footer-head-logo">
                <p class="equalizer-landing-page-footer-head-all-rights">All rights reserved © Equalizer 2021
                    Have any problems? Contact us via social media or email us at <span class="email">equalizer@example.com</span></p>
            </div>
            <div class="equalizer-landing-page-footer-social-links">
                <a href="#" class="social-link">
                    <img :src="facebookLogo" alt="facebook logo" class="social-logo facebook">                    
                </a>
                <a href="#" class="social-link">
                    <img :src="instagramLogo" alt="instagram logo" class="social-logo instagram">
                </a>
                <a href="#" class="social-link">
                    <img :src="twitterLogo" alt="twitter logo" class="social-logo twitter">
                </a>
            </div>
        </footer>
    </div>
</template>

<script setup>
import equalizerLogo from '/assets/images/LandingPages/equalizerLandingPage/logo.svg'
import illustrationApp from '/assets/images/LandingPages/equalizerLandingPage/illustration-app.png'
import iosLogo from '/assets/images/LandingPages/equalizerLandingPage/icon-apple.svg'
import androidLogo from '/assets/images/LandingPages/equalizerLandingPage/icon-android.svg'
import facebookLogo from '/assets/images/LandingPages/equalizerLandingPage/icon-facebook.svg'
import instagramLogo from '/assets/images/LandingPages/equalizerLandingPage/icon-instagram.svg'
import twitterLogo from '/assets/images/LandingPages/equalizerLandingPage/icon-twitter.svg'
</script>