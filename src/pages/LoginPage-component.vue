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
          <pv-button label="Register" @click="Register()" />
        </div>
        
      </form>
    </div>
  </div>
</template>
<script>
import { AuthApiService } from "../services/auth-api.service";
import {UsersApiService} from "../services/user-api.service";
export default {
  name: "LoginPage",
  data() {
    return {
      formData: {
        username: "",
        password: ""
       
      },
      isVet: false,
      authService: new AuthApiService(),
      usersApiService : new UsersApiService()
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
        if(data!='Error al procesar'){
          window.localStorage.setItem("username", this.formData.username);
          
          this.usersApiService.GetByUsername(this.formData.username).then((response)=>{
            console.log('response',response.data)
            this.isVet=response.data.isVet;

            if(this.isVet==true){
            this.$router.push('/homeVet');

          }else {
         
            this.$router.push('/home');

          }
         
      
          })

          

          
          

        }
      });

      

    },
    Register(){
      this.$router.push('/Register')
      

      }
  },
};
</script>
<style>
.login{
  margin-top: 100px;
}
.login-title {
  text-align: center;
}
.buttons{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
