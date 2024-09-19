<template>
    <div class="cart-item"
        :class="{
            'with-thumbnail': isThumbnailEnabled
        }"
    >
        <div class="cart-item-img-wrapper" v-if="isThumbnailEnabled">
            <img :src="cartItem.thumbnail" alt="">
        </div>
        <div class="cart-item-info">
            <p class="cart-item-info-title">{{ cartItem.name }}</p>
            <div class="cart-item-info-price-quantity">
                <p class="cart-item-info-quantity">{{ cartItem.quantity }}x</p>
                <p class="cart-item-info-one-price">@${{ cartItem.price.toFixed(2) }}</p>
                <p class="cart-item-info-overall-price" v-if="!isThumbnailEnabled">${{ overallPrice }}</p>
            </div>
        </div>
        <button 
            v-if="isEraseBtnEnabled"
            class="cart-item-erase-btn"
            @click="removeItem"
        
        >
            <img :src="removeItemSvg" alt="remove x" />
        </button>
        <p class="cart-item-info-overall-price" v-else>${{ overallPrice }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CartItemProduct } from './types';
import removeItemSvg from '/assets/images/juniorChallenges/product-list-with-cart/icon-remove-item.svg'


interface Props {
    cartItem: CartItemProduct;
    id: number | string;
    isThumbnailEnabled?: boolean;
    isEraseBtnEnabled?: boolean;
}

const props = defineProps<Props>()
const emit = defineEmits(['eraseCartItem'])

const removeItem = () => emit('eraseCartItem', props.id)
const overallPrice = computed(() => (props.cartItem.quantity * props.cartItem.price).toFixed(2))

</script>