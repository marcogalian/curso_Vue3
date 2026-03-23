<template>
    <h1>My primera app de Vue3</h1>
    <hr>
    <MyCounter :value="6" />
    <MyCounterScript :value="8" />
    <MyCounterScript2 :value="1" />
</template>


<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';


</script>

<style scoped>


</style>