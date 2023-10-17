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
    import qrCodeImage from '../../assets/images/image-qr-code.png'
     
    const img = ref(qrCodeImage)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Playfair+Display:ital,wght@1,900&family=Roboto:ital,wght@1,300&display=swap');

#newbieQrCode {
    $bg-color: #D5E1EF;
    $bg-card-color: #FFFFFF;
    $title-text-color: #1F314F;
    $description-text-color: #7D889E;

    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-color;

    .qr-code-card {
        height: 465px;
        width: 288px;
        background-color: $bg-card-color;
        border-radius: 20px;
        padding: 16px;

        .qr-code-img-wrapper {
           height: 288px;
           width: 100%; 
           border-radius: 10px;
           margin-bottom: 24px;

            .qr-code-img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .qr-code-card-title,
        .qr-code-card-description  {
            font-family: Outfit, sans-serif;
            font-style: normal;
            line-height: normal;
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
        }

        .qr-code-card-title {
            width: 286px;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 16px;   
            color: $title-text-color;
        }

        .qr-code-card-description {
            width: 256px;
            margin: auto;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0.188px;
            padding: 0 16px;
            color: $description-text-color;
        }
    }
}

</style>