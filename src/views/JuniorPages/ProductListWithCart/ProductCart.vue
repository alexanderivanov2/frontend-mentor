<template>
    <div class="product-cart">
        <div class="product-cart-header">
            <h2 class="product-cart-header-title">Your Cart</h2>
            <p class="product-cart-header-counter">({{ 0 }})</p>
        </div>
        <div class="product-cart-body">
            <div class="product-cart-body-empty-cart">
                <img :src="emptyCartSvg" alt="" class="empty-cart">
            </div>
        </div>
        <div class="product-cart-footer">
            <div class="product-cart-footer-empty-cart">
                <p class="product-cart-footer-empty-cart-msg">Your added items will appear here</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import emptyCartSvg from '/assets/images/juniorChallenges/product-list-with-cart/illustration-empty-cart.svg'



</script>