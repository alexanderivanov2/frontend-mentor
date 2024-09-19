<template>
    <button 
        class="product-card-button"
        :class="[productQuantity ? 'add-remove-btn' : 'add-to-cart-btn']"
        v-on:click="!productQuantity ? addItemToCart() : null"  
    >
    <template v-if="!productQuantity"
    >
        <img :src="iconAddToCart" alt="">Add To Cart
    </template>
    <template v-else>
        <img :src="iconDecrement" alt="minus" @click.stop="removeItemFromCart">
        <p>{{ productQuantity }}</p>
        <img :src="iconIncrement" alt="plus" @click.stop="addItemToCart">
    </template>
    </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { Product, CartItemProduct } from './types';
import iconAddToCart from '/assets/images/juniorChallenges/product-list-with-cart/icon-add-to-cart.svg'
import iconIncrement from '/assets/images/juniorChallenges/product-list-with-cart/icon-increment-quantity.svg'
import iconDecrement from '/assets/images/juniorChallenges/product-list-with-cart/icon-decrement-quantity.svg'

interface Props {
    product: Product;
    productQuantity: number;
}

const props = defineProps<Props>()

const addItem = inject<(id: number, item: CartItemProduct ) => void>
('addCartItem', () => {})

const addItemToCart = () => {
    const item: CartItemProduct = {
        name: props.product.name,
        price: props.product.price,
        quantity: 0,
        thumbnail: props.product.image.thumbnail,
    }

    addItem(props.product.id, item)
}
const removeItem = inject<(id: number) => void>('removeCartItem', () => {})

const removeItemFromCart = () => removeItem(props.product.id)

</script>