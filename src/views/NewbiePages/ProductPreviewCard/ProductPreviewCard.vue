<template>
    <section id="productPreviewCard">
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
            </div>
            <button class="product-preview-card-button"><img :src="cartSVG" alt="shoping cart"> {{ buttonText }}</button>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import cartSVG from '../../../../public/assets/images/productPreview/icon-cart.svg'

    const productTag = ref('Perfume')
    const productTitle = ref('Gabrielle Essence Eau De Parfum')
    const productDescription = ref('A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.')
    const productPrice = ref('$149.99')
    const productOldPrice = ref('$169.99')
    const buttonText = ref('Add to Cart')
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap');

$bg-color: #F2EAE2;
$light-text-color: #6C7289;
$title-text-color: #1C232B;
$green: #3D8168;
$dark-green: #1A4031;
$border-radius: 10px;
$product-mobile-img: '../../../../public/assets/images/productPreview/image-product-mobile.jpg';

#productPreviewCard {
    height: 100%;
    min-height: 100vh;
    background-color: $bg-color;

    display: flex;
    justify-content: center;
    align-items: center;

    .product-preview-card {
        width: 343px;
        height: 611px;
        background-color: white;
        border-radius: $border-radius;
        font-family: 'Montserrat', sans-serif;
        .product-preview-card-img {
            width: 100%;
            height: 240px;
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            background-image: url($product-mobile-img);
            background-color: lightgrey;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .product-preview-card-title,
        .product-preview-card-price {
            font-family: 'Fraunces', serif;
        }

        .product-preview-card-content-wrapper {
            width: 295px;
            margin: 24px auto 20px;

            .product-preview-card-tag {
                color: $light-text-color;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 12px;
                letter-spacing: 5px;
                margin-bottom: 12px;
            }

            .product-preview-card-title {
                color: $title-text-color;
                font-weight: 700;
                font-size: 32px;
                line-height: 32px;
                margin-bottom: 16px;
            }

            .product-preview-card-description {
                color: $light-text-color;
                font-size: 14px;
                line-height: 23px;
                margin-bottom: 24px;
            }

            .product-preview-card-price-wrapper {
                display: flex;
                align-items: center;
                gap: 19px;

                .product-preview-card-price {
                    color: $green;
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 32px;
                }

                .product-preview-card-old-price {
                    color: $light-text-color;
                    text-decoration: line-through;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 23px;
                }
            }
        }

        .product-preview-card-button {
            width: 295px;
            background-color: $green;
            color: white;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            border-radius: 8px;
            margin: auto;
            padding: 16px 0;
            font-size: 14px;
            font-weight: 700;
            transition: background-color ease-in-out 250ms;

            &:hover {
                background-color: $dark-green;
                cursor: pointer;
            }
        }
    }
}
</style>