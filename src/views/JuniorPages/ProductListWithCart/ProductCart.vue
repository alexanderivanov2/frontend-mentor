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
                    <ProductCartItem 
                        v-for="(item, key) in cartItems"
                        :cartItem="item"
                        :id="key"
                        isEraseBtnEnabled
                        @erase-cart-item="onEraseCartItem"
                    />
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
            <Teleport to="#modal">
                <Modal v-if="showModalState" 
                    :class="[isMobile ? 'bottom' : 'center']">
                    <div class="product-cart-modal">
                        <img :src="confirmedSvg" alt="" class="confirm-svg">
                        <h2 class="product-cart-modal-title">Order Confirmed</h2>
                        <p class="product-cart-modal-greet">We hope you enjoy your food!</p>
                        <div class="product-cart-modal-list">
                            <ProductCartItem 
                                v-for="(item, key) in cartItems"
                                :cartItem="item"
                                :id="key"
                                isThumbnailEnabled
                            />

                            <div class="product-cart-modal-list-footer">
                                <p class="product-cart-modal-list-footer-info-total-label">Order Total</p>
                                <p class="product-cart-modal-list-footer-info-total">${{ cartItemsInfo.totalPrice.toFixed(2) }}</p>
                            </div>
                        </div>

                        <button @click="closeModal" class="start-new-order-btn btn">Start New Order</button>
                    </div>

                </Modal>
            </Teleport>
            <button v-if="!isCartEmpty" @click="showModal" class="btn">Confirm Order</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductCartItem from './ProductCartItem.vue';
import Modal from '../../../components/modals/Modal.vue';
import emptyCartSvg from '/assets/images/juniorChallenges/product-list-with-cart/illustration-empty-cart.svg'
import confirmedSvg from '/assets/images/juniorChallenges/product-list-with-cart/icon-order-confirmed.svg'

import { CartItems } from './types';
import { useModal } from '../../../composables/useModal'

interface Props {
    cartItems: CartItems
    deviceType: 'mobile' | 'tablet' | 'desktop'
}

const props = defineProps<Props>()

const emit = defineEmits(['eraseCartItem'])

const {showModalState, showModal, closeModal} = useModal()

const cartItemsInfo = computed(() => {
    return Object.values(props.cartItems).reduce((cartInfo, productCartItem) => {
        cartInfo.quantity += productCartItem.quantity
        cartInfo.totalPrice += productCartItem.quantity * productCartItem.price
        return cartInfo
    }, { quantity: 0, totalPrice: 0 })
})

const isCartEmpty = computed(() => !cartItemsInfo.value.quantity)
const isMobile = computed(() => props.deviceType === 'mobile')
const onEraseCartItem = (id: number) => emit('eraseCartItem', id)
</script>