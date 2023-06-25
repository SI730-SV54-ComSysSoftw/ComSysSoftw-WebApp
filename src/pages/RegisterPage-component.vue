<template>
  <div class="register">
    <h2 class="register-title">Register</h2>
    <div class="card flex justify-content-center">
      <form @submit="createUser()" class="flex flex-column gap-2">
        <div class="flex flex-column">
          <label for="name">Name</label>
          <pv-inputText v-model="formData.name" inputId="name" />
        </div>
        <div class="flex flex-column">
          <label for="email">Email</label>
          <pv-inputText v-model="formData.email" inputId="email" />
        </div>
        <div class="flex flex-column">
          <label for="name">Password</label>
          <pv-inputText v-model="formData.password" inputId="name" />
        </div>
        <div class="flex flex-column">
          <label for="age">Age</label>
          <pv-inputNumber inputId="age" v-model="formData.age" showButtons />
        </div>
        <div class="flex flex-column">
          <label for="vet">Veterinarian</label>
          <pv-inputSwitch inputId="vet" v-model="formData.isVet" showButtons />
        </div>
        <pv-button type="submit" label="Submit" />
      </form>
    </div>
  </div>
</template>
<script>
import { AuthApiService } from "../services/auth-api.service";
export default {
  name: "RegisterPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        age: 0,
        isVet: false,
      },
      authService: new AuthApiService(),
    };
  },
  methods: {
    createUser() {
      const userData = {
        ...this.formData,
        username: this.formData.name,
        roles: "user",
        ImgUrl: "242342342",
      };
      this.authService.register(userData).then((res) => {
        console.log("Response: ", res);
      });

      this.$router.push('/')
    },
  },
};
</script>
<style>
.register-title {
  text-align: center;
}
</style>
