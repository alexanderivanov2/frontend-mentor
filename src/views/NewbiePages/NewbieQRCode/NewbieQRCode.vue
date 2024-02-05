<template>
    <section id="newbieQrCode">
        <div class="qr-code-card">
            <div class="qr-code-img-wrapper">
                <img :src="qrCodeImage" alt="QR Code" class="qr-code-img">
            </div>
            <h3 class="qr-code-card-title">Improve your front-end skills by building projects</h3>
            <p class="qr-code-card-description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import qrCodeImage from '../../../../public/assets/images/image-qr-code.png'
     
    const img = ref(qrCodeImage)
</script>