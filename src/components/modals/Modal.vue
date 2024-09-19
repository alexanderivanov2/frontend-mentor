<template>
    <div class="modal">
        <slot></slot>
    </div>

</template>

<script setup lang="ts"></script>

<style lang="scss">
.modal {
    position: fixed;
    // position: absolute;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    width: 100%;

    &.center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &.bottom {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>