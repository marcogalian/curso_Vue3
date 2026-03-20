<template>
  <h1>Hola Mundo</h1>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

interface Props {
    value: Number,
}

const props = defineProps<Props>()

// const props = defineProps({
//   value: { type: Number, required: true },
// });

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);

//    const incrementCounter = () => {
//         return counter.value = counter.value + 1;
//    }

//    const decrementarCounter = () => {
//         return counter.value = counter.value -1;
//    }
</script>

<style scoped>
div {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
