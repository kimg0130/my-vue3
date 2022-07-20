<template>
  <h1>Attribute Bindings</h1>
  <p>
    <span :title="message">
      마우스를 올리고 있으면 메세지가 나타납니다.
    </span>
  </p>
  <p @click="toggleRed">
    <span :class="{red:isRed}">
      클릭시 빨간색이 토글됩니다.
    </span>
  </p>
  <p @click="toggleColor">
    <span :style="{color:color}">
      클릭시 글자색이 변경됩니다.
    </span>
  </p>

  <div class="blank"></div>

  <h1>Attribute Bindings</h1>
</template>

<script setup>
import {ref} from "vue";

const message = ref('hello world!');
const isRed = ref(true);
const color = ref('blue');

function toggleRed(){
  isRed.value = !isRed.value;
}

function toggleColor(){
  color.value = color.value === 'blue' ? 'green' : 'blue';
}
</script>

<style scoped>
.red{
  color: red;
}
.blank{
  height: 20px;
}
</style>
