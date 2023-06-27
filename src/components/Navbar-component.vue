<template>
  <nav>
    <div class="logo-container">
      <img src="/src/assets/logo-hp.jpg" alt="logo" />
      <h1 class="logo">
        <div v-if="this.isVet==true">
          <router-link to="/homeVet"> Healthy Pets </router-link>
        </div>
        <div v-if="this.isVet==false">
          <router-link to="/home"> Healthy Pets </router-link>
        </div>
        
      </h1>
    </div>

    <div class="navbar-items-container flex align-items-center gap-4">
      <ul>
        <li><router-link to="/appoitments"> Appoitments </router-link></li>
        <li><router-link to="/services"> Services </router-link></li>
        <li><a href="#">Messages</a></li>
        <li><pv-button label="Log Out" @click="logOut()" /></li>
      </ul>
      <div class="navbar-user-container">
        <span><i class="pi pi-user"></i></span>
      </div>
    </div>

  
  </nav>
</template>
<script>
import { UsersApiService } from "@/services/user-api.service";
import jwt_decode from "jwt-decode";
export default {
  name: "Navbar",
  data() {
    return {
      isVet:false,
      userName:'',
      userService: new UsersApiService(),
    };
  },
 /*  beforeMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      const payload = jwt_decode(token);
      this.userService.GetByUsername(payload?.username).then(({ data }) => {
        this.user = data;
      });
    } */
  
  methods: {
    logOut() {
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("username");

      //location.reload()
      this.$router.push("/");
    }
    /* goToLogin() {
      this.$router.push("/");
    },
    goToRegister() {
      this.$router.push("/register");
    }, */
  },
  
  beforeMount() {
        this.userName = window.localStorage.getItem('username')
        this.userService.GetByUsername(this.userName).then((response)=>{
            console.log('response',response.data)
            this.isVet=response.data.isVet;
            
        })


    }
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background: #fff;
  max-width: 1400px;
}
.logo-container {
  display: flex;
  flex: 1;
}
.logo-container img {
  object-fit: contain;
  width: 70px;
  aspect-ratio: 1;
}
.logo {
  align-self: flex-end;
  margin: 0;
}
nav a {
  text-decoration: none;
  color: #000000;
}
.navbar-items-container {
  margin: 0 1rem;
}
.navbar-items-container ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
}
.navbar-items-container a {
  font-size: 1.5rem;
}
.navbar-user-container i {
  font-size: 1.5rem;
  border-radius: 50%;
  border: 1px solid #777;
  padding: 0.5rem;
}
</style>
