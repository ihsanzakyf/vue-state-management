import { ref } from 'vue';

export function useNumbers() {
  const numbers = ref([6, 7, 8, 9, 10]);

  const addNumbers = () => {
    numbers.value.push(numbers.value.length + 1);
  };

  return { numbers, addNumbers };
}
