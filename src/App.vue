<script setup>
import indexComponent from './components/index-component.vue';
import PetRegistryComponent from './components/PetRegistry-component.vue';
import Owner from './pages/Owner.vue';

</script>

<template>
  <header>
 
  </header>

  <main>
   <indexComponent />
   <PetRegistryComponent />
    <Owner />
  </main>
</template>

<style scoped>
  main {
    background-image: url(./assets/background.png);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
