<script setup>
import NavbarComponent from "./components/Navbar-component.vue";
</script>

<template>
  <navbar-component />
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
