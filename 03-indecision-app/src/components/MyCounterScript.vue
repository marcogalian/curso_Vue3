<template>
  <h1>Hola Mundo</h1>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";



<style scoped>
div {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
