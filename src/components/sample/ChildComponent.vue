<template>
  <li>자식컴포넌트 id: {{item.id}} | name: {{item.name}} | age: {{item.age}}</li>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {type:Object, default:{}}
})
</script>

<style scoped>
</style>
