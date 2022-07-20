<template>
  <SampleTitle href-id="simple-component">컴포넌트간 데이터 교환</SampleTitle>

  <TipBox title="참고">
    <li>for문 이용시 유니크한 key값 필요</li>
    <li>자식으로 데이터 전달시 자식컴포넌트 props에서 받음</li>
  </TipBox>

  <ChildComponent v-for="(item,idx) in listData" :item="item" :key="item.id"/>

</template>

<script setup>
import {ref} from "vue";
import ChildComponent from "../../src/components/sample/ChildComponent.vue";
import TipBox from "../../components/sample/TipBox.vue";
import SampleTitle from "../../components/sample/SampleTitle.vue";

const listData = ref([
  {id:0, name:'홍길동', age:26},
  {id:1, name:'미미', age:7},
  {id:2, name:'쿠키', age:4},
])

</script>

<style scoped>

</style>
