<template>
  <div class="services">
    <div class="services-container">
      <div class="services-item-container">
        <img src="../assets/bathtub.png" />
        <span>Grooming</span>
      </div>
      <div class="services-item-container">
        <img src="../assets/bed.png" />
        <span>Pet Hotel</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Service",
};
</script>
<style>
.services {
  max-width: 1400px;
  margin: auto;
  width: 100%;
  padding-top: 5rem;
}
.services-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.services-item-container {
  width: 300px;
  background: #588cc7;
  aspect-ratio: 1;
  box-shadow: 4px 4px 21px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
}
</style>
