<template>
  <nav>
    <div class="logo-container">
      <img src="/src/assets/logo-hp.jpg" alt="logo" />
      <h1 class="logo">
        <router-link to="/"> Healthy Pets </router-link>
      </h1>
    </div>

    <div class="navbar-items-container flex align-items-center gap-4">
      <ul>
        <li><a href="#">Appointments</a></li>
        <li><a href="#">Services</a></li>
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
      user: null,
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
