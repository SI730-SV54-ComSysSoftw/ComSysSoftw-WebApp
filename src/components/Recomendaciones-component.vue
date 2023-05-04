<template>
    <div class="pet-container">
      <div class="pet-image">
        <img src="../img/logo.png" alt="Imagen de la mascota">
      </div>
      <div class="pet-info">
        <h2>Vet 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque cupiditate commodi recusandae sint, amet dignissimos atque repellendus delectus incidunt quidem ut mollitia exercitationem, doloribus ea ducimus dolorum explicabo voluptas!</p>
      </div>
      <div class="button-container">
      <button class="register-button" @click="registerPet">Register pet</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"Recomendaciones"
  }
  </script>
  
  <style>
  
  h2 {
    color: black;
  }
  p {
    color: black;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .pet-container {
  background-image: url("../img/fondo.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100vmax;
  height: 50vmax;
  overflow: auto;
}
  .pet-image {
  max-width: 50%;
  height: auto;
  margin-right: 20px;
  
}

.pet-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 220px);
  overflow: hidden;
}

.pet-info h2 {
  font-size: 24px;
  margin-top: 0;
}

.pet-info p {
  font-size: 18px;
}
.button-container {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

button {
    background-color: #FFA448;
    border: 2px solid #ccc;
    color:black;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #3e8e41;
}
  </style>
  