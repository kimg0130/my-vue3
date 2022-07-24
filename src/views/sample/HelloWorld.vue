<template>
  <h1>{{message}}</h1>
  <button @click="reverseMessage">reverse message</button>
  <button @click="message += '!'">append !</button>
</template>

<script setup lang="ts">
import {ref} from "vue";

const message = ref('hello world!');

function reverseMessage(){
  message.value = message.value.split('').reverse().join('');
}

</script>

<style scoped>
button,a{
  display: block;
}
</style>
