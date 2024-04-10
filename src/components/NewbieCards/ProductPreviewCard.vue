<template>
    <div class="product-preview-card">
        <div class="product-preview-card-img">
        </div>
        <div class="product-preview-card-content-wrapper">
            <p class="product-preview-card-tag">{{ productTag }}</p>
            <h2 class="product-preview-card-title">{{ productTitle }}</h2>
            <p class="product-preview-card-description">{{ productDescription }}</p>
            <div class="product-preview-card-price-wrapper">
                <p class="product-preview-card-price">{{ productPrice }}</p>
                <p class="product-preview-card-old-price">{{ productOldPrice }}</p>
            </div>
            <button class="product-preview-card-button"><img :src="cartSVG" alt="shoping cart"> {{ buttonText }}</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import cartSVG from '../../assets/images/productPreview/icon-cart.svg'

    const productTag = ref('Perfume')
    const productTitle = ref('Gabrielle Essence Eau De Parfum')
    const productDescription = ref('A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.')
    const productPrice = ref('$149.99')
    const productOldPrice = ref('$169.99')
    const buttonText = ref('Add to Cart')
</script>