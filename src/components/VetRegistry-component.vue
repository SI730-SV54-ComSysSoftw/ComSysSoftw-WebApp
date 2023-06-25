<template>
    <div class="checkin-form">
      <!--<div class="background-image">
        <img src="../img/Imagen1.png" alt="Imagen de fondo" />
      </div>-->
      <div class="form-container">
        <!--<div class="left-image">
            <img src="../img/Imagen3.png" alt="Imagen izquierda" />
        </div>-->
        <form @submit.prevent="submitForm">

          <div class="title-group">
            <h1>Register</h1>
          </div>

          <div class="form-group">
            <label for="nameVet">Name:</label>
            <input type="text" id="nameVet" v-model="nameVet" placeholder="Name" required  />
          </div>
          <div class="form-group">
            <label for="distric">Distric:</label>
            <input type="text" id="distric" v-model="distric" placeholder="Distric" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" v-model="phone" placeholder="Phone Number" required />
          </div>
          <div class="form-group">
            <label for="urlImg">Url Image:</label>
            <input type="tel" id="urlImg" v-model="urlImg" placeholder="url Imgage" required />
          </div>
          <div class="form-group">
            <button type="submit">Check-in</button>
          </div>
        </form>
       <!-- <div class="right-image">
            <img src="../img/Imagen2.png" alt="Imagen derecha" />
        </div>-->
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

  .form-container {
    width: 400px;
    padding: 30px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-top:100px;
  }
  
  .form-group {
    width: 100%;
    padding: 10px;
    border-radius:4px;
    margin-bottom: 16px;
    border:1px;
    font-size: 18px;
  }
  .title-group{
    text-align: center;
  }

  label {
    font-size: 22px;
    color:black;
    font-weight: bold;
  }
  


  input {
    border: 2px solid #ccc;
    padding: 10px;
    font-size: 16px;
    width: 100%;
  }
  
  .form-group button {
    width:100%;
    background-color:#B70BD3;
    color:white;
    text-decoration:none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  .form-group button:hover {
    background-color: #a945c7;
  }


</style>  