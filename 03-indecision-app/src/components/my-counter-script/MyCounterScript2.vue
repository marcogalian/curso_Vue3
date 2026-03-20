<template>
  <h1 class="text-xl font-bold">Hola Mundo</h1>
  <h3 class="font-extralight">Counter: {{ counter }}</h3>
  <h3 class="font-extralight">Square: {{ squareCounter }}</h3>

  <div>
    <button class="px-3 py-1 rounded-md bg-green-600 cursor-pointer hover:bg-green-500 transition-colors duration-150" @click="counter++"><span class="font-bold">+1</span></button>
    <button class="text-gray-200 px-3 py-1 rounded-md bg-red-600 cursor-pointer hover:bg-red-500 transition-colors duration-150" @click="counter--"><span class="font-bold">-1</span></button>
  </div>
</template>

<script lang="ts" src="./MyCounterScript2.ts">

</script>

<style scoped>
div {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
