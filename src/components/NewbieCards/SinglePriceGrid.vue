<template>
    <div class="single-price-grid">
        <div class="section-join cell">
            <h3 class="section-title join-title">Join our community</h3>
            <p class="join-benefit">30-day, hassle-free money back guarantee</p>
            <p class="join-description">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div class="section-subscription cell">
            <h3 class="section-title subscription-title">Monthly Subscription</h3>
            <p class="subscription-monthly">$29 <span>per month</span></p>
            <p class="subscription-details">Full access for less than $1 a day</p>
            <button class="subscription-sign-up">Sign Up</button>
        </div>
        <div class="section-why-us cell">
            <h3 class="section-title">Why Us</h3>
            <div class="benefits">
                <p class="why-us-benefit benefit" v-for="(benefit, index) in formatBenefits" :key="index">{{ benefit }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const inputBenefits = 'Tutorials by industry experts,Peer & expert code review,Coding exercises,Access to our GitHub repos,Community forum,Flashcard decks,New videos every week';
const formatBenefits = inputBenefits.split(',');
</script>