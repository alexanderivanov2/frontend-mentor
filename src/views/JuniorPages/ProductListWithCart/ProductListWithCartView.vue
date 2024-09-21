<template>
    <div id="productListWithCart" class="product-list-with-cart-view">
        <div class="product-list-with-cart-view-content">
            <div class="product-list-wrapper">
                <h1 class="product-list-category">Desserts</h1>
                <div class="products-wrapper">
                    <ProductCard 
                        v-for="(product, key) in productsData"
                        :key="product.id"
                        :product="product"
                        :device-type="getDeviceType"
                        :product-quantity="cartItems[product.id]?.quantity ?? 0"
                        @add-cart-item="addCartItem"
                        @remove-cart-item="removeCartItem"
                    />
                </div>
            </div>
            <div class="product-list-cart-wrapper">
                <ProductCart
                    :cartItems="cartItems"
                    :device-type="getDeviceType"
                    @erase-cart-item="eraseCartItem"
                    @reset-cart-items="resetCartItems"
                />
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductCart from './ProductCart.vue'
import { useDeviceTypeHandler } from '../../../composables/useDeviceTypeHandler'
import productsData from './data.json'
import { CartItemProduct, CartItems } from './types'


const { getDeviceType } = useDeviceTypeHandler()

const cartItems = ref<CartItems>({})

const addCartItem = (id:number, item: CartItemProduct ) => {
    if (!cartItems.value[id]) {
        cartItems.value[id] = item
    } 
    
    cartItems.value[id].quantity += 1
}

const removeCartItem = (id:number) => {
    if (cartItems.value[id] && cartItems.value[id].quantity == 1) {        
        eraseCartItem(id)
        return
    }

    cartItems.value[id].quantity -= 1
}

const eraseCartItem = (id:number) => {
    delete cartItems.value[id]
    cartItems.value = { ...cartItems.value }
}

const resetCartItems = () => cartItems.value = {}

provide('addCartItem', addCartItem)
provide('removeCartItem', removeCartItem)
</script>