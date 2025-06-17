<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const red = ref(0);
const green = ref(0);
const blue = ref(0);

function generateColor() {
  red.value = Math.floor(Math.random() * 255);
  green.value = Math.floor(Math.random() * 255);
  blue.value = Math.floor(Math.random() * 255);
}

const ToNested = () => {
  router.push({ name: 'nested' });
};
</script>

<template>
  <main
    class="relative flex min-h-dvh items-center justify-center bg-brands-main-color"
    :style="{
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }"
  >
    <div>
      <button
        class="absolute end-0 top-0 m-6 flex rounded-xl border border-gray-600 bg-white px-4 py-1 transition-all duration-300 hover:animate-pulse hover:bg-brands-main-color hover:text-white"
        @click="ToNested"
      >
        To Nested
      </button>
    </div>
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

      <div>
        <button
          class="w-full rounded-xl bg-brands-light-green py-2 text-white transition-all duration-300 hover:animate-pulse hover:bg-brands-main-color"
          @click="generateColor"
        >
          Generate
        </button>
      </div>

      <!-- Card Color -->
      <h1 class="text-center text-2xl font-bold text-white">Result</h1>
      <div class="rounded-xl bg-white p-2 py-1 text-center shadow-md">
        {{ `rgb(${red}, ${green}, ${blue})` }}
      </div>
      <!-- ./ Card Color -->
    </div>
  </main>
</template>

<style scoped></style>
