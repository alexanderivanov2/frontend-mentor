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
        <div class="benefits-section-wrapper">
            <div class="benefit" v-for="({title, description}, index) in benefits" :key="index">
                <button class="benefit-order-number">{{ index + 1 }}</button>
                <h3 class="benefit-title">{{ title }}</h3>
                <p class="benefit-description">{{ description }}</p>
            </div>
        </div>
    </section>
    <section class="apply-for-test-section">
        <h1>Be first to test</h1>
    </section>
</template>

<script setup>
import workitLogoLight from '/assets/images/LandingPages/WorkitLandingPage/logo-light.svg'
import mobileImageHero from '/assets/images/LandingPages/WorkitLandingPage/image-hero.webp'

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