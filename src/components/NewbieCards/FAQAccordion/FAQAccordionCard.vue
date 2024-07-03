<template>
    <div class="faq-accordion-card">
        <img class="faq-accordion-card-heading-icon" src="/assets/images/newbieChallenges/faqAccordion/icon-star.svg" alt="">
        <h1 class="faq-accordion-card-heading">FAQs</h1>
        <div class="faq-accordion-card-content">
            <FAQAccordionSection
                v-for="(faq, key) in faqsData" 
                :key="key"
                :faq="faq"
                :id="Number(key)"
                :openId="openFaq"
                @handle-faq-toggle="toggleFaq"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import FAQAccordionSection from './FAQAccordionSection.vue';


const openFaq = ref(1)

const faqsData = {
    1: {
        title: 'What is Frontend Mentor, and how will it help me?',
        content: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.',
    
    },
    2: {
        title: ' Is Frontend Mentor free? ',
        content: ' Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    3: {
        title: 'Can I use Frontend Mentor projects in my portfolio?',
        content: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It`s an excellent way to showcase your skills to potential employers!',
    },
    4: {
        title: 'How can I get help if I`m stuck on a Frontend Mentor challenge?',
        content: 'The best place to get help is inside Frontend Mentor`s Discord community. Theres a help channel where you can ask questions and seek support from other community members.',
    }
}
 
const toggleFaq = (id) => {
    id = Number(id)
    if (id === openFaq.value) {
        openFaq.value = null
        return
    }

    openFaq.value = id
}
</script>