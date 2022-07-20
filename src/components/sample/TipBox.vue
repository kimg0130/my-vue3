<template>
  <div class="tip-box">
    <p v-if="title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<style scoped>
.tip-box{
  border-color: #646cff;
  color: #9499ff;
  background-color: rgba(100,108,255,.08);
  border-style:solid;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  max-width: 600px;
}
.tip-box p{
  font-weight: 900;
}
</style>
