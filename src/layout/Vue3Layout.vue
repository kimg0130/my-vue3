<template>
  <header>
      <NavTop />
  </header>
  <div class="wrapper">
    <div class="left-menu">
      <li><router-link to="/vue3/template">Template Syntax</router-link></li>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavTop from "@/components/layout/NavTop.vue";
export default {
  name: "vue3-layout",
  components: {NavTop}
}
</script>

<style scoped>
.wrapper{
  display: flex;
  padding: 0.5rem;
}
.left-menu{
  padding-right: 20px;
  min-width: 200px;
}
a{
  color: #89ddff;
  font-weight: bold;
}
.content{
  width: 100%;
}
</style>
