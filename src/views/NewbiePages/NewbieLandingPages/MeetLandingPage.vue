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
                            <button class="meet-btn download">Download <span>v1.3</span></button>
                            <button class="meet-btn info">What is it?</button>
                        </div>
                    </div>
                </div>
            </header>
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

const { isDesktop } = useDeviceTypeHandler()
const imageHeroMain = computed(() => isDesktop.value ? imageHeroLeft : imageHero)
</script>