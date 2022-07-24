<template>
  <h2>
    <a class="header-anchor" :href="'#'+hrefId" aria-hidden="true">#</a>
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  hrefId: {type:String, default:''}
})
</script>

<style scoped>
h2{
  color: #ffffffd2;
  letter-spacing: -.02rem;
  font-weight: 600;
}
a{
  margin-right: 5px;
}
</style>
