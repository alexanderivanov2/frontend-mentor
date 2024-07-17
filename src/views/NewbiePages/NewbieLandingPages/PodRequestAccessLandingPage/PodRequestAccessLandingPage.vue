<template>
    <div class="pod-request-access-landing-page">
        <div class="pod-request-access">
            <header class="pod-request-access-header">
                <img :src="Logo" alt="pod request logo">
            </header>
            <section class="pod-request-access-content">
                <h1 class="pod-request-access-content-heading">
                    Publish your podcasts <span>everywhere.</span>
                </h1>
                <p class="pod-request-access-content-description">Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
                <RequestAccessForm />
                <div class="pod-request-access-content-podcast-channels">
                    <img :src="Spotify" alt="">
                    <img :src="ApplePodcast" alt="">
                    <img :src="GooglePodcast" alt="">
                    <img :src="PocketPodcast" alt="">
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import RequestAccessForm from './RequestAccessForm.vue'
import Logo from '/assets/images/LandingPages/podRequestAccessLandingPage/desktop/logo.svg'
import Spotify from '/assets/images/LandingPages/podRequestAccessLandingPage/desktop/spotify.svg'
import ApplePodcast from '/assets/images/LandingPages/podRequestAccessLandingPage/desktop/apple-podcast.svg'
import GooglePodcast from '/assets/images/LandingPages/podRequestAccessLandingPage/desktop/google-podcasts.svg'
import PocketPodcast from '/assets/images/LandingPages/podRequestAccessLandingPage/desktop/pocket-casts.svg'

</script>