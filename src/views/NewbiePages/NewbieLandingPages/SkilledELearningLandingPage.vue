<template>
    <div class="skilled-e-learning-landing-page">
        <header class="skilled-e-learning-header">
            <img :src="logoDark" alt="dark logo of skilled">
            <button class="btn btn-dark-blue">Get Started</button>
        </header>
        <section class="skilled-e-learning-header-section">
            <div class="skilled-e-learning-header-section-intro">
                <h2 class="skilled-e-learning-header-section-intro-title">Maximize skill,
                    minimize budget</h2>
                <p class="skilled-e-learning-header-section-intro-description">Our modern courses across a range of
                    in-demand skills will
                    give you the knowledge you need to live the life you want.</p>
                <button class="btn btn-light-gradient">Get Started</button>
            </div>
            <div class="skilled-e-learning-header-section-image-wrapper">
                <div class="responsive-background"></div>
            </div>
        </section>
        <section class="skilled-e-learning-courses-list">
            <div class="skilled-e-learning-courses-list-wrapper">
                <div class="skilled-e-learning-course check-intro">
                    <h5 class="check-intro-title">Check out our most popular courses!</h5>
                </div>
                <div v-for="({ className, title, description, link }, index) in coursesList" class="skilled-e-learning-course"
                    :class="[className]" :key="className">
                    <h5 class="skilled-e-learning-course-title">{{ title }}</h5>
                    <p class="skilled-e-learning-course-description">{{ description }}</p>
                    <a :href="link" class="skilled-e-learning-course-link">Get Started</a>
                </div>
            </div>
        </section>
        <footer class="skilled-e-learning-footer">
            <img :src="logoLight" alt="skilled light logo">
            <button class="btn btn-dark-gradient">Get Started</button>
        </footer>
    </div>
</template>

<script setup>
import logoDark from '/assets/images/LandingPages/skilledELearningPage/logo-dark.svg'
import logoLight from '/assets/images/LandingPages/skilledELearningPage/logo-light.svg'

const coursesList = [
    {
        className: 'animation',
        title: 'Animation',
        description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
        link: '#',
    },
    {
        className: 'design',
        title: 'Design',
        description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
        link: '#',
    },
    {
        className: 'photography',
        title: 'Photography',
        description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
        link: '#',
    },
    {
        className: 'crypto',
        title: 'Crypto',
        description: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
        link: '#',
    },
    {
        className: 'business',
        title: 'Business',
        description: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
        link: '#',
    }
]

</script>
