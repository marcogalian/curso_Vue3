<template>
  <h1 class="text-xl">Hola Mundo MyCounterScript</h1>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div class="flex gap-3">
    <button class="px-4 bg-green-500 rounded " @click="counter++">+1</button>
    <button class="px-4 bg-blue-500 rounded " @click="counter--">-1</button>
  </div>
</template>

<script lang="ts">
  import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';
  

  export default defineComponent({
    props: {
      value: {type: Number, required: true},
    },

    setup(props) {
      const {counter, squareCounter} = useCounter(5);


      return {
        counter,
        squareCounter,
      }
    }
    
  });
  

  // import { computed, ref } from "vue";

  // const counter = ref(4);
  // const squareCounter = computed(() => {
  //   counter.value * counter.value;
  // })
</script>
