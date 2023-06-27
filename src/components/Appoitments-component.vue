<template>
    <div class="appointment">
      <div class="appointment-left-container">
        <pv-button>Create</pv-button>
        <pv-calendar v-model="date" inline showWeek />
  
      </div>
      <div class="appointment-right-container">
  
        <div class="pet-appointment">
  
          <h2>Vaccine (4/4)</h2>
          <p>5 months old</p>
          <p>FVRCP booster</p>
          <p>Rabies</p>
          <p>FelV</p>
        </div>
        <div class="img-container">
          <img src="/src/assets/pet-home.jpg" alt="pet-home" />
          <p>Garfield</p>
        </div>
  
      </div>
  
    </div>
  </template>
  
  
  <script>


  export default {
    name: "Appointments-component",
    data(){
        return{
            
        }
    }
  }
  </script>
  
  <style scoped>
  .appointment {
    display: flex;
    max-width: 1400px;
    gap: 1rem;
    margin: 5rem auto auto;
  }
  .appointment-left-container {
    padding: 0 4rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
  .pet-appointment{
  
    align-items: center;
  
  }
  
  button{
    background: #ffffff;
    color:black;
    border-color: #588CC7;
  }
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  .appointment-right-container{
    height: 300px;
    width:1000px;
    padding: 2rem;
    background: #CFD8CE;
    display:flex;
    gap:15rem;
    justify-content: center;
    align-items: center;
  }
  .img-container{
    flex-direction: column;
    align-items: center;
    display:flex;
    padding: 0 4rem;
    gap:1rem;
  }
  </style>