<template>
    <div class="four-card-feature-landing-page">
        <div class="four-card-feature-page-wrapper">
            <section class="four-card-feature-page-hero-section">
                <h1 class="four-card-feature-page-hero-section-heading">
                    Reliable, efficient delivery
                    <strong>Powered by Technology</strong>
                </h1>
                <p class="four-card-feature-page-hero-section-description">
                    Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
                </p>
            </section>
            <div class="four-card-feature-card-list-section">

                <div 
                    v-for="(value, key) in data"
                    :key="key"
                    class="four-card-feature-card-list-item"
                    :class="[value.customClass]"
                >
                    <div class="four-card-feature-card-list-item-content">
                        <h2 class="four-card-feature-card-list-item-content-heading">
                            {{ value.heading }}
                        </h2>
                        <p class="four-card-feature-card-list-item-content-description">
                            {{ value.description }}
                        </p>
                    </div>
                    <img :src="value.img" alt="card logo" class="four-card-feature-card-list-item-logo">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import iconCalculator from '/assets/images/LandingPages/fourCardFeatureLandingPage/icon-calculator.svg'
import iconKarma from '/assets/images/LandingPages/fourCardFeatureLandingPage/icon-karma.svg'
import iconSupervisor from '/assets/images/LandingPages/fourCardFeatureLandingPage/icon-supervisor.svg'
import iconTeamBuilder from '/assets/images/LandingPages/fourCardFeatureLandingPage/icon-team-builder.svg'
const data = [
    {
        heading: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        customClass: 'light-blue',
        img: iconSupervisor,
    },
    {
        heading: 'Team Builder',
        description: 'Scans our talent network to create the optimal team for your project',
        customClass: 'orange-red',
        img: iconTeamBuilder
    },
    {
        heading: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        customClass: 'gold',
        img: iconKarma
    },
    {
        heading: 'Calculator',
        description: 'Uses data from past projects to provide better delivery estimates',
        customClass: 'blue',
        img: iconCalculator
    },
]
</script>