<template>
    <section id="socialLinksProfilePage">
        <div id="socialLinksProfileCard">
            <div class="social-profile-img-wrapper">
                <img :src="socialProfileImg" alt="social profile image">
            </div>
            <h1 class="social-profile-names">Jessica Randall</h1>
            <p class="social-profile-location">London, United Kingdom</p>
            <p class="social-profile-description">"Front-end developer and avid reader."</p>
            <div class="social-profile-links">
                <div class="social-profile-links-item"><p class="social-link">GitHub</p></div>
                <div class="social-profile-links-item"><p class="social-link">Frontend Mentor</p></div>
                <div class="social-profile-links-item"><p class="social-link">LinkedIn</p></div>
                <div class="social-profile-links-item"><p class="social-link">Twitter</p></div>
                <div class="social-profile-links-item"><p class="social-link">Instagram</p></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import socialProfileImg from '../../assets/images/socialLinksProfileCard/avatar-jessica.jpeg'
</script>