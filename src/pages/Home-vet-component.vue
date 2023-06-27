<template>
    <div class="home">
      <div class="home-left-container">
        <div class="home-user-container">
          <span> <pv-image :src="imgUrl" width="350" /> </span>
        </div>
        <h1>{{ name }}</h1>
        <p> {{ age }} years old</p>
        
        <p>Is vet</p>
        <pv-button label="Editar Usuario" @click="Edit()"/>
      </div>
      <div class="home-right-container">
        <pv-button label="Registrar veterinaria" @click="registerVet()"></pv-button>
        <div class="home-pets-container">
          <div class="home-pet-card">
            <div v-for="vet in vets">
            <img :src="vet.imgUrl" alt="pet-home" />
            <h2>Nombre: {{vet.name}}</h2>
            <p>Telefono: {{ vet.phone_number }}</p>
            <p>Distrito: {{ vet.district }}</p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  <script>
  import {UsersApiService} from "@/services/user-api.service";
  import {VetsApiService} from "../services/vet-api.service";
  export default {
    name: "Home",
    data(){
          return{
              
              usersApiService : new UsersApiService(),
              vetsApiService:new VetsApiService(),
              userName :'',
              name:'',
              age:'',
              imgUrl:'',
              vets:[],
              id:0,
             
  
          }
      },
      methods: {
        Edit(){
          
          this.$router.push('/Edit/User/');
  
        },
        registerVet(){
          this.$router.push('/vet-register');
      },
      getAll(){
            this.vetsApiService.GetvetByUserId(this.id).then((response)=> {
                this.vets = response.data;
            })
        }
        
      },
      beforeMount() {
          this.userName = window.localStorage.getItem('username')
          //window.localStorage.getItem('username')
          // invocar API User
          //promesa
  
          this.usersApiService.GetByUsername(this.userName).then((response)=>{
              console.log('response',response.data)
              this.id=response.data.id;
              this.userName = response.data.userName;
              this.name=response.data.name;
              this.age=response.data.age;
              this.imgUrl=response.data.imgUrl;

              this.getAll()
        
          })
  
  
      }
  };
  </script>
  <style>
  .home {
    display: flex;
    max-width: 1400px;
    margin: auto;
    gap: 1rem;
    padding-top: 5rem;
  }
  
  .home-left-container {
    padding: 0 4rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
  .home-user-container {
    padding: 1rem;
    border-radius: 50%;
    border: 1px solid #666;
  }
  .home-pets-container img {
    border-radius: 8px;
    width: 100%;
    height: auto;
  }
  .home-pets-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
  }
  .home-user-container i {
    font-size: 7rem;
    padding: 1rem;
  }
  .home-left-container h1 {
    font-size: 2rem;
  }
  .home-left-container p {
    font-size: 1rem;
  }
  .home-left-container button {
    white-space: nowrap;
    font-size: 1rem;
  }
  .home-pet-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
  .home-add-pet-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-add-pet-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d9d9d9;
    width: 100%;
    color: white;
    border-radius: 8px;
    aspect-ratio: 3/2;
  }
  .home-add-pet-bg span {
    font-size: 5rem;
  }
  
  img{
    border-radius: 50%;
    max-width: 100%;
  }
  </style>
  