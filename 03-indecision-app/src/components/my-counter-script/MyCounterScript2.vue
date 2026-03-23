<template>
  <h1 class="text-xl">Hola Mundo MyCounterScript2</h1>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div class="flex gap-3">
    <button class="px-4 bg-green-500 rounded " @click="counter++">+1</button>
    <button class="px-4 bg-blue-500 rounded " @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../../composables/useCounter';

interface Props {
  value: number,
}

const props = defineProps<Props>()
  
  
const {counter, squareCounter} = useCounter(2)

</script>

