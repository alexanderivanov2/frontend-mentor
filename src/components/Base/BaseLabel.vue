<template>
    <label :for="for" >
        <slot></slot>
    </label>
</template>

<script setup lang="ts">

interface Props {
    for: string
}

const props = defineProps<Props>()
</script>