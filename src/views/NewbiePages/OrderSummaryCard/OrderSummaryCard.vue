<template>
    <section id="orderSummaryCardPage">
        <div class="order-summary-card">


        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#orderSummaryCardPage {
    $body-bg: #E0E8FF;

    background-color: $body-bg;
    min-height: 100vh;
    height: 100%;
    position: relative;

    &::before {
        content: url('../../../../public/assets/images/orderSummaryCard/pattern-background-mobile.svg');
        top: 0;
        position: absolute;

    }


}

</style>