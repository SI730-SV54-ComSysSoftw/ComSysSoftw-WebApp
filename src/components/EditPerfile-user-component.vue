<template>
    
    <div class="form">
        <div class="form-header">
            <h1>Edite su Cuenta</h1>
        </div>
        <div class="group">
            <label for="name">Name: </label>
            <pv-imputText class="input" v-model="name" id="name"></pv-imputText>
        </div>
        <div class="group">
            <label for="email">Email: </label>
            <pv-imputText class="input" v-model="email" id="email"></pv-imputText>
        </div>
        <div class="group">
            <label for="age">Age: </label>
            <pv-inputNumber class="input" v-model="age" id="age"></pv-inputNumber>
        </div>
        <div class="group">
            <label for="username">Username: </label>
            <pv-imputText class="input" v-model="userName" id="username"></pv-imputText>
        </div>
        <div class="group">
            <label for="password">Password: </label>
            <pv-imputText class="input" v-model="password" id="password"></pv-imputText>
        </div>
        <div class="group">
            <label for="roles">Rol: </label>
            <pv-imputText class="input" v-model="roles" id="roles"></pv-imputText>
        </div>

        <pv-button label="save" @click="update()"></pv-button>
    </div>
    


</template>

<script>
import {UsersApiService} from "@/services/user-api.service";

export default {
    name: "update-user",
    data(){
        return{
            id:0,
            usersApiService : new UsersApiService(),
            userName :'',
            email:'',
            name:'',
            age:'',
            password:'',
            roles:''

        }
    },
    methods:{
        update() {

            const body ={   "username": this.userName ,
                            "email" : this.email ,
                            "name":this.name,
                            "age":this.age,
                            "password":this.password,
                            "roles":this.roles };

            this.usersApiService.update(this.id,body).then((response)=>{

                if( response.status === 200){
                    alert("user updated")
                    //this.$router.push('/users');
                }else{
                    alert("error updating user")
                }
            })
        }
    },
    beforeMount() {
        this.id =  this.$route.params.id
        // invocar API User
        //promesa

        this.usersApiService.getUserById(this.id).then((response)=>{
            console.log('response',response.data)
            this.userName = response.data.userName;
            this.email = response.data.email;
            this.name=response.data.name;
            this.age=response.data.age;
            this.password=response.data.password;
            this.roles=response.data.roles;
        })


    }
}
</script>

<style scoped>

.form{
  z-index: 15;
  position: relative;
  width: max-width;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(black, .1);
  box-sizing: border-box;
  margin: 100px auto 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label{
    display: block;
    margin: 0 0 10px;
    color: gray;
    font-size: 12px;
    font-weight: semibold;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: .2em;
}

.input{
    outline: none;
    display: block;
    background: rgba(black, 0.1);
    width: 100%;
    border: rgba(black, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: black;
    font-family: inherit;
    font-size: inherit;
    font-weight: semibold;
    line-height: inherit;
   
}
</style>