<template>
  <header>
    <div class="wrapper">
      <NavTop />
    </div>
  </header>

  <RouterView />
</template>

<script>
import NavTop from "@/components/layout/NavTop.vue";
export default {
  name: "app-layout",
  components: {NavTop}
}
</script>

<style scoped>
</style>
