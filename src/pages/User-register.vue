
<template>
  <div class="register">
      <div class="logo">

      </div>
  </div>

  <div class="data">
      <h2 class="ml-4 mb-5" id="txtReg">REGISTER NOW</h2>

      <span class="p-float-label m-3">
        <pv-input-text id="fullname" type="text" v-model="user.name" class="border-3"/>
        <label for="fullname">Full Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="username" type="text" v-model="user.userName" class="border-3"/>
        <label for="username">User Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="email" type="text" v-model="user.email" class="border-3"/>
        <label for="email">E-mail</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="password" type="text" v-model="user.password" class="border-3"/>
        <label for="password">Password</label>
      </span>

      <pv-dropdown v-model="user.selectedType"
                   :options="type"
                   optionLabel="typeUser"
                   optionValue="code"
                   placeholder="Type of User"
                   class="p-float-label ml-3 mb-3 border-3"/>

      <div class="b-register">
          <pv-button label="REGISTER"
                     class="p-button-rounded"
                     @click="registerUser()"
          />
      </div>
  </div>
</template>

<script setup>



</script>
<style scoped>

</style>