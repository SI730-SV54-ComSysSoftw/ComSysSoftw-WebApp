<template>
    <div class="checkin-form">
      <!--<div class="background-image">
        <img src="../img/Imagen1.png" alt="Imagen de fondo" />
      </div>-->
      <div class="form-container">
        <!--<div class="left-image">
            <img src="../img/Imagen3.png" alt="Imagen izquierda" />
        </div>-->
        <form >

          <div class="title-group">
            <h1>Register</h1>
          </div>

          <div class="form-group">
            <label for="nameVet">Name:</label>
            <pv-inputText type="text" id="nameVet" v-model="name"  />
          </div>
          <div class="form-group">
            <label for="distric">Distric:</label>
            <pv-inputText type="text" id="distric" v-model="district"/>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <pv-inputText type="tel" id="phone" v-model="phone_number" />
          </div>
          <div class="form-group">
            <label for="urlImg">Url Image:</label>
            <pv-inputText type="tel" id="urlImg" v-model="imgUrl" />
          </div>
          <div class="form-group">
            <pv-button @click="create()" label="Submit"></pv-button>
          </div>
        </form>
       <!-- <div class="right-image">
            <img src="../img/Imagen2.png" alt="Imagen derecha" />
        </div>-->
      </div>
    </div>
  </template>
  
<script>
import {VetsApiService} from "../services/vet-api.service";
import {UsersApiService} from "../services/user-api.service";
  export default {
    name:"VetRegistry",
    data(){
      return {
        name: '',
        district: '',
        phone_number:'',
        imgUrl:'',
        userName:'',
        vetsService : new VetsApiService(),
        usersApiService : new UsersApiService(),
        userId:0
      }
    },
    methods:{
      create() {
        const body ={"name":this.name,
                     "district":this.district,
                     "phone_number":this.phone_number,
                     "userId":this.userId,
                     "imgUrl":this.imgUrl, };

            this.vetsService.createVet(body).then((response)=>{ 

                if( response.status === 200){
                    
                    this.$router.push('/homeVet');
                }
            });
        }
    },
    beforeMount() {
        this.userName = window.localStorage.getItem('username')
        //window.localStorage.getItem('username')
        //this.$route.params.userName
        // invocar API User
        //promesa

        this.usersApiService.GetByUsername(this.userName).then((response)=>{
            console.log('response',response.data)
            this.userId=response.data.id;
            //this.userName = response.data.userName;
            
        })


    }
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