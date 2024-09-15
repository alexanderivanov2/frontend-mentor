<template>
    <div class="product-cart">
        <div class="product-cart-header">
            <h2 class="product-cart-header-title">Your Cart</h2>
            <p class="product-cart-header-counter">({{ cartItemsInfo.quantity }})</p>
        </div>
        <div class="product-cart-body">
            <div class="product-cart-body-empty-cart" v-if="isCartEmpty">
                <img :src="emptyCartSvg" alt="" class="empty-cart">
            </div>
            <div class="cart-items-list" v-else>
                    <div class="cart-item"
                        v-for="(item, key) in cartItems"
                    >
                        <div class="cart-item-info">
                            <p class="cart-item-info-title">{{ item.name }}</p>
                            <div class="cart-item-info-price-quantity">
                                <p class="cart-item-info-quantity">{{ item.quantity }}x</p>
                                <p class="cart-item-info-one-price">@${{ item.price.toFixed(2) }}</p>
                                <p class="cart-item-info-overall-price">${{ (item.price * item.quantity).toFixed(2) }}</p>
                            </div>
                        </div>
                        <button class="cart-item-erase-btn"
                        @click="removeItem(key)">
                            <img :src="removeItemSvg" alt="remove x"/>
                        </button>
                    </div>
                </div>
        </div>
        <div class="product-cart-footer">
            <div class="product-cart-footer-empty-cart" v-if="isCartEmpty">
                <p class="product-cart-footer-empty-cart-msg">Your added items will appear here</p>
            </div>
            <div class="product-cart-footer-info" v-else>
    
                <p class="product-cart-footer-info-total-label">Order Total</p>
                <p class="product-cart-footer-info-total">${{ cartItemsInfo.totalPrice.toFixed(2) }}</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import emptyCartSvg from '/assets/images/juniorChallenges/product-list-with-cart/illustration-empty-cart.svg'
import removeItemSvg from '/assets/images/juniorChallenges/product-list-with-cart/icon-remove-item.svg'
import { CartItems } from './types';

interface Props {
    cartItems: CartItems
}

const props = defineProps<Props>()

const emit = defineEmits(['eraseCartItem'])

const cartItemsInfo = computed(() => {
    return Object.values(props.cartItems).reduce((cartInfo, productCartItem) => {
        cartInfo.quantity += productCartItem.quantity
        cartInfo.totalPrice += productCartItem.quantity * productCartItem.price
        return cartInfo
    }, { quantity: 0, totalPrice: 0 })
})

const isCartEmpty = computed(() => !cartItemsInfo.value.quantity)

const removeItem = (id: number) => emit('eraseCartItem', id)
</script>