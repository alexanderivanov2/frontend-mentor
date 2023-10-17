<template>
  <BackButton/>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import BackButton from './components/BackButton.vue';
</script>
