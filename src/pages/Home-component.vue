<template>
  <div class="home">
    <div class="home-left-container">
      <div class="home-user-container">
        <span> <pv-image :src="imgUrl2" width="350" /> </span>
      </div>
      <h1>{{ name2}}</h1>
      <p> {{ age2 }} years old</p>
      <p>2 cats, 1 dog</p>
      <pv-button label="Editar cuenta" @click="Edit()"/>
    </div>
    <div class="home-right-container">
      <pv-button label="Registrar mascota" @click="registerPet()"></pv-button>
      
      <div class="home-pets-container">
        <div class="home-pet-card">
          <div v-for="pet in pets">
            <img :src="pet.imgUrl" alt="pet-home" />
            <h2>Nombre: {{pet.name}}</h2>
            <p>Edad: {{ pet.age }}</p>
          </div>
          
        </div>
        <!-- <div class="home-pet-card">
          <img src="/src/assets/pet-home.jpg" alt="pet-home" />
          <h2>Argos</h2>
          <p>5 months old</p>
        </div>
        <div class="home-pet-card">
          <img src="/src/assets/pet-home.jpg" alt="pet-home" />
          <h2>Argos</h2>
          <p>5 months old</p>
        </div>
        <div class="home-add-pet-container">
          <div class="home-add-pet-bg">
            <span>+</span>
          </div>
          <h2>Add new</h2>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import {UsersApiService} from "@/services/user-api.service";
import {PetsApiService} from "../services/pet-api.service"
export default {
  
  name: "Home",
  data(){
   
        return{
            
            usersApiService : new UsersApiService(),
            pets:[],
            petsService : new PetsApiService(),
            userName :'',
            id:0,
            name2:'',
            age2:'',
            imgUrl2:''
           

        }
    },
    methods: {
      Edit(){
        
        this.$router.push('/Edit/User/');

      },
      registerPet(){
          this.$router.push('/registerPet');
      },
      getAll(){
            this.petsService.getPetByUserId(this.id).then((response)=> {
                this.pets = response.data;
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
            this.name2=response.data.name;
            this.age2=response.data.age;
            this.imgUrl2=response.data.imgUrl;

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
.home-pet-card img{
  max-width: 250px;
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
