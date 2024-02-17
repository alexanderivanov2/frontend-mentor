<template>
    <section id="orderSummaryCardPage">
        <div class="background-image">
            <img :src="isMobile ? mobileBackground : desktopBackground" alt="background-image">
        </div>
        <div class="order-summary-card">


        </div>
    </section>
</template>

<script setup>
import mobileBackground from '../../../../public/assets/images/orderSummaryCard/pattern-background-mobile.svg'
import desktopBackground from '../../../../public/assets/images/orderSummaryCard/pattern-background-desktop.svg'

import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

const isMobile = ref(() => false)

const handleResize = () => {
    isMobile.value = document?.documentElement?.clientWidth < 1440;
}

onBeforeMount(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
#orderSummaryCardPage {
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
    $body-bg: #E0E8FF;

    background-color: $body-bg;
    min-height: 100vh;
    height: 100%;
    position: relative;

    .background-image {
        width: 100%;

        img {
            width: 100%;
        }
    }
    // &::before {
    //     content: url('../../../../public/assets/images/orderSummaryCard/pattern-background-mobile.svg');
    //     widows: 100%;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     position: absolute;

    //     @media screen and (min-width: 1440px) {
    //         content: url('../../../../public/assets/images/orderSummaryCard/pattern-background-desktop.svg');
    //     }
    // }


}

</style>