<script setup>
import Parent from '@/components/Parent.vue';
import { provide, ref } from 'vue';

const numbers = ref([1, 2, 3, 4, 5]);

provide('numbers', numbers);
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6"
  >
    <div class="wrapper-line">
      <div class="line"></div>
    </div>
    <Parent />
  </main>
</template>

<style scoped></style>
