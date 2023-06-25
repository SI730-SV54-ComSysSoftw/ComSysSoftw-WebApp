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
            <label for="district">District: </label>
            <pv-imputText class="input" v-model="district" id="district"></pv-imputText>
        </div>
        <div class="group">
            <label for="phone_number">Phone Number: </label>
            <pv-inputNumber class="input" v-model="phone_number" id="phone_number"></pv-inputNumber>
        </div>
        <div class="group">
            <label for="userId">UserId: </label>
            <pv-imputText class="input" v-model="userId" id="userId"></pv-imputText>
        </div>
        <div class="group">
            <label for="imgUrl">Url image: </label>
            <pv-imputText class="input" v-model="imgUrl" id="imgUrl"></pv-imputText>
        </div>
       
        <pv-button label="save" @click="update()"></pv-button>
    </div>
    


</template>

<script>
import {VetsApiService} from "@/services/vet-api.service";

export default {
    name: "update-veterinary",
    data(){
        return{
            id:0,
            vetsApiService : new VetsApiService(),
            district :'',
            phone_number:'',
            name:'',
            userId:'',
            imgUrl:''

        }
    },
    methods:{
        update() {

            const body ={   "district": this.district ,
                            "phone_number":this.phone_number,
                            "name":this.name,
                            "userId":this.userId,
                            "imgUrl":this.imgUrl};

            this.vetsApiService.update(this.id,body).then((response)=>{

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
        
        

        this.vetsApiService.GetvetById(this.id).then((response)=>{
            console.log('response',response.data)
            this.district = response.data.district;
            this.phone_number = response.data.phone_number;
            this.name=response.data.name;
            this.userId=response.data.userId;
            this.imgUrl=response.data.imgUrl;
            
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