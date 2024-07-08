<template>
    <div class="meet-landing-page">
        <div class="meet-landing-page-wrapper">
            <header class="meet-header">
                <div class="meet-header-logo-wrapper">
                    <img :src="meetLogo" alt="meet logo" class="meet-header-logo">
                </div>
                <div class="meet-header-hero-section">
                    <div :class="[isDesktop ? 'image-hero-left' : 'image-hero']">
                        <img :src="imageHeroMain" alt="image hero">
                    </div>
                    <div v-if="isDesktop" class="image-hero-right">
                        <img :src="imageHeroRight" alt="image hero right">
                    </div>
                    <div class="meet-header-hero-section-content">
                        <h1 class="meet-header-hero-section-content-title">
                            Group Chat for Everyone
                        </h1>
                        <p class="meet-header-hero-section-content-description">
                            Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
                        </p>
                        <div class="meet-header-hero-section-content-buttons-wrapper">
                            <button class="meet-btn primary">Download <span>v1.3</span></button>
                            <button class="meet-btn secondary">What is it?</button>
                        </div>
                    </div>
                </div>
            </header>
            <div class="meet-section-pointer pointer-one">
                <div class="meet-section-pointer-line"></div>
                <div class="meet-section-pointer-counter">01</div>
            </div>
            <section class="meet-usage-introduction">
                <div class="meet-usage-introduction-images-wrapper">
                    <div class="image-wrapper" 
                        v-for="(image, index) in images" :key="index">
                        <img :src="image" alt="image of people">
                    </div>
                </div>
                <div class="meet-usage-introduction-content">
                    <h5 class="meet-usage-introduction-content-subtitle">Built for modern use</h5>
                    <h2 class="meet-usage-introduction-content-title">Smarter meetings, all in one place</h2>
                    <p class="meet-usage-introduction-content-description">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
                </div>
            </section>
            <div class="meet-section-pointer pointer-two">
                <div class="meet-section-pointer-line"></div>
                <div class="meet-section-pointer-counter">02</div>
            </div>
            <footer class="meet-footer">
                <h3 class="meet-footer-title">Experience more together</h3>
                <p class="meet-footer-description">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
                <button class="meet-btn secondary">Download <span>v1.3</span></button>
            </footer>
        </div>
    </div>

</template>

<script setup>
import { computed } from 'vue'
import { useDeviceTypeHandler } from '../../../composables/useDeviceTypeHandler'
import meetLogo from '/assets/images/LandingPages/meetLandingPage/logo.svg'
import imageHero from '/assets/images/LandingPages/meetLandingPage/tablet/image-hero.png'
import imageHeroLeft from '/assets/images/LandingPages/meetLandingPage/desktop/image-hero-left.png'
import imageHeroRight from '/assets/images/LandingPages/meetLandingPage/desktop/image-hero-right.png'
import imageManTexting from '/assets/images/LandingPages/meetLandingPage/desktop/image-man-texting.jpg'
import imageMenInMeeting from '/assets/images/LandingPages/meetLandingPage/desktop/image-men-in-meeting.jpg'
import imageWomanInVideocall from '/assets/images/LandingPages/meetLandingPage/desktop/image-woman-in-videocall.jpg'
import imageWomenInVideochatting from '/assets/images/LandingPages/meetLandingPage/desktop/image-women-videochatting.jpg'

const { isDesktop } = useDeviceTypeHandler()
const imageHeroMain = computed(() => isDesktop.value ? imageHeroLeft : imageHero)
const images = [imageWomanInVideocall, imageWomenInVideochatting, imageMenInMeeting, imageManTexting]
</script>