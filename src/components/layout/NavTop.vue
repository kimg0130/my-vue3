<template>
  <nav>
    <RouterLink to="/vue3/template">vue3</RouterLink>
    <RouterLink to="/sample/hello">sample</RouterLink>
  </nav>
</template>

<script>
export default {
  name: "NavTop"
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  background-color: #1a1a1a;
  padding: 1rem;
}



nav a{
  color: #9499ff;
}
nav a.router-link-exact-active {
  font-weight: bolder;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
  font-size: 13px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
