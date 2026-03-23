<template>
  <h1 class="text-xl">Hola Mundo MyCounter</h1>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div class="flex gap-3">
    <button class="px-4 bg-green-500 rounded " @click="counter++">+1</button>
    <button class="px-4 bg-blue-500 rounded " @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
// import { computed, ref } from "vue";
import { useCounter } from '../composables/useCounter';


interface Props {
  value: number,
}

const props = defineProps<Props>()
  
  
const {counter, squareCounter} = useCounter()






// const props = defineProps({
//   value: { type: Number, required: true },
// });


// agregado a carpeta compasable ( son los hooks de Vue)
// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);

//    const incrementCounter = () => {
//         return counter.value = counter.value + 1;
//    }

//    const decrementarCounter = () => {
//         return counter.value = counter.value -1;
//    }
</script>
