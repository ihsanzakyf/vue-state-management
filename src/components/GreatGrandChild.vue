<script setup>
import { inject } from 'vue';

const numbers = inject('numbers');
</script>

<template>
  <div>
    <h1 class="text-center text-2xl font-bold text-white">Great Grand Child</h1>
    <div class="text-center text-white">
      {{ numbers }}
    </div>
  </div>
</template>

<style scoped></style>
