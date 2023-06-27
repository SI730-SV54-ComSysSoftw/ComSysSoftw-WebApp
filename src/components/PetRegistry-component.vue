<template>
   <div class="form" >
        <div class="form-header">
            <h1>Registra a tu mascota</h1>
        </div>
        <div class="group" >
            <label for="name">Name: </label>
            <pv-inputText class="input" v-model="name" id="name"></pv-inputText>
        </div>
        <div class="group">
            <label for="age">Age: </label>
            <pv-inputNumber class="input" v-model="age" id="age"></pv-inputNumber>
        </div>
        <div class="group">
            <label for="description">Description: </label>
            <pv-inputText class="input" v-model="description" id="description"></pv-inputText>
        </div>
        <div class="group">
            <label for="ImgUrl">Url image: </label>
            <pv-inputText class="input" v-model="ImgUrl" id="ImgUrl"></pv-inputText>
        </div>

        <pv-button @click="createPet()" label="Submit"></pv-button>
    </div>
</template>

<script>
import {PetsApiService} from "../services/pet-api.service"
import {UsersApiService} from "../services/user-api.service";
export default{
    name:"PetRegistry",
    data(){
        return{
            userName:'',
            petsService : new PetsApiService(),
            usersApiService : new UsersApiService(),
            name:'',
            age:0,
            description:'',
            ImgUrl:'',
            userId:0

        }
    },
    methods:{
        createPet() {
        const body ={"name":this.name,
                     "age":this.age,
                     "description":this.description,
                     "userId":this.userId,
                     "ImgUrl":this.ImgUrl, };

            this.petsService.create(body).then((response)=>{ 

                if( response.status === 200){
                    
                    this.$router.push('/home');
                }
            });
        }
    },
    beforeMount() {
        this.userName = window.localStorage.getItem('username')
        //window.localStorage.getItem('username')
        //this.$route.params.userName
        // invocar API User
        //promesa

        this.usersApiService.GetByUsername(this.userName).then((response)=>{
            console.log('response',response.data)
            this.userId=response.data.id;
            //this.userName = response.data.userName;
            
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