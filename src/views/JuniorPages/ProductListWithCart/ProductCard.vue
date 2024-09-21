<template>
    <div class="product-card">

        <div class="product-card-image-wrapper">
            <img :src="product.image[deviceType]" 
                alt="product image"
                class="product-card-img"
                :class="{ 'with-border': productQuantity}"
                >
           <ProductCardButton
                :product="product"
                :productQuantity="productQuantity"
           />
        </div>

        <div class="product-card-info">
            <p class="product-card-info-category"> {{  product.category }}</p>
            <h2 class="product-card-info-title">{{ product.name }}</h2>
            <p class="product-card-info-price">${{ price }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProductCardButton from './ProductCardButton.vue';
import { Product } from './types';

interface Props {
    product: Product;
    productQuantity: number;
    deviceType: 'mobile' | 'tablet' | 'desktop';
}

const props = defineProps<Props>()

const price = computed(() => props.product.price.toFixed(2) ?? '0.00')

const emit = defineEmits(['addCartItem', 'removeCartItem'])

// TO DO ADD LOGIC FOR ADD PRODUCT
</script>