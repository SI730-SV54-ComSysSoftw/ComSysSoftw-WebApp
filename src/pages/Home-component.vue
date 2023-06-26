<template>
  <div class="home">
    <div class="home-left-container">
      <div class="home-user-container">
        <span> <img :src="imgUrl" > </span>
      </div>
      <h1>{{ name }}</h1>
      <p> {{ age }} years old</p>
      <p>2 cats, 1 dog</p>
      <pv-button label="Edit User" @click="Edit()"/>
    </div>
    <div class="home-right-container">
      <div class="home-pets-container">
        <div class="home-pet-card">
          <img src="/src/assets/pet-home.jpg" alt="pet-home" />
          <h2>Argos</h2>
          <p>5 months old</p>
        </div>
        <div class="home-pet-card">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {UsersApiService} from "@/services/user-api.service";
export default {
  name: "Home",
  data(){
        return{
            
            usersApiService : new UsersApiService(),
            userName :'',
            name:'',
            age:'',
            imgUrl:''
           

        }
    },
    methods: {
      Edit(){
        
        this.$router.push('/Edit/User/');

      }
    },
    beforeMount() {
        this.userName = window.localStorage.getItem('username')
        //window.localStorage.getItem('username')
        // invocar API User
        //promesa

        this.usersApiService.GetByUsername(this.userName).then((response)=>{
            console.log('response',response.data)
            this.userName = response.data.userName;
            this.name=response.data.name;
            this.age=response.data.age;
            this.imgUrl=response.data.imgUrl;
      
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
