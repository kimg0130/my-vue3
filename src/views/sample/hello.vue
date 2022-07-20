<template>
  <h1>{{message}}</h1>
  <button @click="reverseMessage">reverse message</button>
  <button @click="message += '!'">append !</button>
  <a href="https://www.naver.com" @click.prevent="notify">naver</a>
</template>

<script setup>
import {ref} from "vue";

const message = ref('hello world!');

function reverseMessage(){
  message.value = message.value.split('').reverse().join('');
}

function notify(){
  alert('hello');
}
</script>

<style scoped>
button,a{
  display: block;
}
</style>
