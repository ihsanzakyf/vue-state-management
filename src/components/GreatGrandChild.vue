<script setup>
// import { inject } from 'vue';

// const numbers = inject('numbers');

import { useNumbers } from '@/stores';

const { numbers, addNumber, filterNumber } = useNumbers();
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-center text-white">Great Grand Child</h1>
    <div
      class="grid justify-center grid-cols-8 gap-2 mt-4 text-center text-white"
    >
      <div v-for="(num, index) in numbers" :key="index">
        {{ num }}
      </div>
    </div>

    <div class="wrapper-line">
      <div class="line"></div>
    </div>

    <div class="p-2 border border-gray-600 rounded-2xl bg-slate-200">
      {{ filterNumber(14) }}
    </div>

    <div class="mt-4">
      <button
        class="w-full py-2 text-white transition-all duration-300 rounded-xl bg-brands-light-green hover:animate-pulse hover:bg-brands-main-color"
        @click="addNumber"
      >
        Add
      </button>
    </div>
  </div>
</template>

<style scoped></style>
