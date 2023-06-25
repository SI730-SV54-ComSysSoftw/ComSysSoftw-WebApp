<template>
  <div class="login">
    <h2 class="login-title">Login</h2>
    <div class="card flex justify-content-center">
      <form @submit="loginUser()" class="flex flex-column gap-2">
        <div class="flex flex-column">
          <label for="username">Username</label>
          <pv-inputText v-model="formData.username" inputId="username" />
        </div>
        <div class="flex flex-column">
          <label for="name">Password</label>
          <pv-inputText v-model="formData.password" inputId="name" />
        </div>
        <div class="buttons">
          <pv-button type="submit" label="Submit" />
          <pv-button label="Log Out" @click="logOut()" />
        </div>
        
      </form>
    </div>
  </div>
</template>
<script>
import { AuthApiService } from "../services/auth-api.service";
export default {
  name: "LoginPage",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      authService: new AuthApiService(),
    };
  },
  methods: {
    loginUser() {
      const userData = {
        ...this.formData,
        roles: "user",
      };
      this.authService.login(userData).then(({ data }) => {
        window.localStorage.setItem("jwt", data);
      });
    },
    logOut(){
        window.localStorage.removeItem('jwt')
      
        location.reload()

      }
  },
};
</script>
<style>
.login-title {
  text-align: center;
}
.buttons{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
