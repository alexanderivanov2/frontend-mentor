<template>
    <header class="workit-header">
        <div class="workit-header-wrapper">
            <div class="workit-header-top">
                <img :src="workitLogoLight" alt="workit tag">
                <a href="#" class="workit-apply-link">Apply for access</a>
            </div>
            <div class="workit-header-top-body">
                <h1 class="workit-header-top-body-title">Data <span class="underline">tailred</span> to your needs.</h1>
                <button class="workit-header-top-body-btn-learn-more workit-btn">Learn more</button>
            </div>
            <div class="workit-header-img-wrapper">
                <img :src="mobileImageHero" alt="image of mobile phone" class="workit-header-img">
            </div>
        </div>
    </header>
    <section class="workit-benefits-section">
        <div class="workit-benefits-section-wrapper">
            <div class="benefit" v-for="({title, description}, index) in benefits" :key="index">
                <button class="benefit-order-number">{{ index + 1 }}</button>
                <h3 class="benefit-title">{{ title }}</h3>
                <p class="benefit-description">{{ description }}</p>
            </div>
        </div>
    </section>
    <section class="workit-apply-for-test-section">
        <div class="workit-apply-for-test-section-wrapper">
            <img :src="founderAvatar" alt="founder avatar" class="founder-avatar">
            <div class="founder-message">
                <h3 class="founder-message-title">Be the first to test</h3>
                <p class="founder-message-text">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
                <button class="apply-for-test-section-btn-apply workit-btn">Apply for access</button>
            </div>
        </div>
    </section>
    <footer class="workit-footer">
        <img :src="workitLogoDark" alt="workit logo dark" class="workit-logo-dark">
        <div class="workit-footer-social-links">
            <img :src="iconFacebook" alt="facebook" class="social-link facebook">
            <img :src="iconInstagram" alt="social-link twitter" class="social-link twitter">
            <img :src="iconTwitter" alt="social-link instagram" class="social-link instagram">
        </div>
    </footer>
</template>

<script setup>
import workitLogoLight from '/assets/images/LandingPages/WorkitLandingPage/logo-light.svg'
import workitLogoDark from '/assets/images/LandingPages/WorkitLandingPage/logo-dark.svg'
import mobileImageHero from '/assets/images/LandingPages/WorkitLandingPage/image-hero.webp'
import founderAvatar from '/assets/images/LandingPages/WorkitLandingPage/image-founder.webp'
import iconFacebook from '/assets/images/LandingPages/WorkitLandingPage/icon-facebook.svg'
import iconInstagram from '/assets/images/LandingPages/WorkitLandingPage/icon-instagram.svg'
import iconTwitter from '/assets/images/LandingPages/WorkitLandingPage/icon-twitter.svg'

const benefits = [
    {
        title: 'Actionable insights',
        description: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
    },
    {
        title: 'Data-driven decisions',
        description: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
    },
    {
        title: 'Always affordable',
        description: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
    },
]
</script>