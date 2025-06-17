<script setup>
import { ref } from 'vue';

const red = ref(0);
const green = ref(0);
const blue = ref(0);
</script>

<template>
  <main
    class="flex min-h-dvh items-center justify-center bg-brands-main-color"
    :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }"
  >
    <div class="flex flex-col gap-3">
      <h1 class="text-center text-2xl font-bold text-white">Color Picker</h1>
      <div class="relative">
        <input
          type="number"
          inputmode="numeric"
          placeholder="Red"
          id=""
          v-model="red"
          class="text-md w-full rounded-xl border border-gray-600 p-[3px] ps-7 text-red-500 placeholder:text-gray-400 focus:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-2 text-lg text-red-500"
        >
          <i class="i-material-symbols-colors-rounded"></i>
        </div>
      </div>
      <div class="relative">
        <input
          type="number"
          inputmode="numeric"
          placeholder="Green"
          id=""
          v-model="green"
          class="text-md w-full rounded-xl border border-gray-600 p-[3px] ps-7 text-green-500 placeholder:text-gray-400 focus:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-2 text-lg text-green-500"
        >
          <i class="i-material-symbols-colors-rounded"></i>
        </div>
      </div>
      <div class="relative">
        <input
          type="number"
          inputmode="numeric"
          placeholder="Blue"
          id=""
          v-model="blue"
          class="text-md w-full rounded-xl border border-gray-600 p-[3px] ps-7 text-blue-500 placeholder:text-gray-400 focus:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-2 text-lg text-blue-500"
        >
          <i class="i-material-symbols-colors-rounded"></i>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
