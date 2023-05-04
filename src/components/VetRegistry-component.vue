<template>
    <div class="checkin-form">
      <div class="background-image">
        <img src="../img/Imagen1.png" alt="Imagen de fondo" />
      </div>
      <div class="form-container">
        <div class="left-image">
            <img src="../img/Imagen3.png" alt="Imagen izquierda" />
        </div>
        <form @submit.prevent="submitForm">
          
          <div class="form-group">
            <label for="ruc">RUC:</label>
            <input type="text" id="ruc" v-model="ruc" required />
          </div>
          <div class="form-group">
            <label for="street">Street Address:</label>
            <input type="text" id="street" v-model="street" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" v-model="phone" required />
          </div>
          <button type="submit">Check-in</button>
        </form>
        <div class="right-image">
            <img src="../img/Imagen2.png" alt="Imagen derecha" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"VetRegistry"
  };
  </script>
  
  <style scoped>
  .checkin-form {
  position: relative;
}
  
  .background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  
}
  .form-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #FFA448;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
    color:black
  }
  
  input {
    border: 2px solid #ccc;
    padding: 10px;
    font-size: 16px;
    width: 100%;
  }
  
  button {
    background-color: #FFA448;
    border: 2px solid #ccc;
    color:black;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  
  
  .left-image {
  transform: translateX(-750%);
  width: 100px;
  height: 100px;
}

.right-image {
 
  transform: translateX(250%);
  width: 100px;
  height: 100px;
  
}


</style>  