<template>
    <div class="profile-card">
        <div class="profile-card-top-bg-decoration"></div>
        <div class="profile-card-body">
            <img :src="profilePicture" alt="profile-picture" class="profile-card-picture">
            <h3 class="profile-name">Victor Crest</h3>
            <p class="profile-age">26</p>
            <p class="profile-location">London</p>
        </div>
        <div class="profile-card-footer">
            <div class="footer-stats followers-stats">
                <p class="stats-number">80K</p>
                <p class="stats-label">Followers</p>
            </div>
            <div class="footer-stats">
                <p class="stats-number">803K</p>
                <p class="stats-label">Likes</p>
            </div>
            <div class="footer-stats">
                <p class="stats-number">1.4K</p>
                <p class="stats-label">Photos</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import profilePicture from '../../assets/images/profileCard/image-victor.jpg'
</script>