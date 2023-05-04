<script setup>
import NavbarComponent from './components/Navbar-component.vue';
</script>

<template>
  <main>
      <router-view></router-view>
  </main>
</template>

<style scoped>
  main {
    background-image: url(./assets/background.png);
    display: flex;
    flex-direction: column;
  }
</style>
