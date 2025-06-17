<script setup>
import GrandChild from '@/components/GrandChild.vue';
import { inject } from 'vue';

const numbers = inject('numbers');
</script>

<template>
  <div>
    <h1 class="text-center text-2xl font-bold text-white">Child</h1>
    <div class="text-center text-white">
      {{ numbers }}
    </div>
    <div class="wrapper-line">
      <div class="line"></div>
    </div>
    <GrandChild />
  </div>
</template>

<style scoped></style>
