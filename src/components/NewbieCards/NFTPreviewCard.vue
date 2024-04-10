<template>
    <div class="nft-preview-card">
        <div class="equilibrium-img-wrapper">
            <img :src="equilibriumIMG" alt="equilibirium image">
        </div>

        <h1 class="nft-card-title">Equilibrium #3429</h1>
        <p class="nft-card-description">Our Equilibrium collection promotes balance and calm.</p>

        <div class="nft-card-info-wrapper">
            <div class="nft-card-info-data">
                <img :src="equilibriumLogo" alt="equilibrium icon logo">
                <span class="nft-card-info-quantity">0.041 ETH</span>
            </div>
            <div class="nft-card-info-data">
                <img :src="clockIMG" alt="clock icon">
                <span class="nft-card-info-time">3 days left</span>
            </div>
        </div>

        <div class="nft-card-line"></div>
        <div class="nft-card-owner-wrapper">
            <div class="nft-card-owner-avatar-wrapper">
                <img :src="avatarIMG" alt="owner avatar">
            </div>
            <p class="nft-card-owner-info">Creation of <span class="nft-card-owner-name">Jules Wyvern</span></p>
        </div>
    </div>
</template>

<script setup>
import equilibriumIMG from '../../assets/images/nftPreviewCard/image-equilibrium.jpg'
import equilibriumLogo from '../../assets/images/nftPreviewCard/icon-ethereum.svg'
import clockIMG from '../../assets/images/nftPreviewCard/icon-clock.svg'
import avatarIMG from '../../assets/images/nftPreviewCard/image-avatar.png'
</script>