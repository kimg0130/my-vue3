<template>
  <SampleTitle href-id="input">Input</SampleTitle>
  <div class="samle-desc">
    <li>input text</li>
    <!--시작시 포커스 주고싶은경우 v-focus-->
    <c-input v-model="inputVal1" v-focus />

    <li>input password</li>
    <c-input type="password" v-model="inputVal2"/>

    <li>input number</li>
    <c-input type="number" v-model="inputVal3"/>
  </div>

  <SampleTitle href-id="button">Button</SampleTitle>
  <div class="samle-desc">
    <c-button @click="clickButton1">ddd</c-button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SampleTitle from "@/components/sample/SampleTitle.vue";
import CInput from "@/components/form/CInput.vue";
import CButton from "@/components/form/CButton.vue";

const inputVal1 = ref('sss');
const inputVal2 = ref('1234');
const inputVal3 = ref(1234);

function clickButton1(e:any) {
  alert('click')
}

</script>

<style scoped>
li{margin-top: 5px}
.samle-desc{
  margin-bottom: 20px;
}
</style>
