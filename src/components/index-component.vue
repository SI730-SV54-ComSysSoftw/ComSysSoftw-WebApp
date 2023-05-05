<template>

    <div class="container">
    
        <div class="Leftside">
    
            <p>HealthyPets</p>
            <p>The plataform to find your</p>
            <p>ideal veterinarian</p>

            <img src="/src/img/icono.jpg">
    
        </div>
    
        <div class="Rightside" >
            <div class="links">
                <p>Not a member?</p>
                <p>Sign up now</p>
            </div>
            <p class="title">Sign in to HealtyPets</p>
            <p class="separation">------------------------------Or--------------------------</p>
            <div class="Rightside_container">
                <label for="username">Username or Email Address</label>
                <pv-imputText type="text" v-model="value" id="username" />
            
                <label for="password">Password</label>
                <pv-password v-model="value" :feedback="false" id="password" />

                <label for="user">Type User</label>
                <pv-imputText type="text" v-model="value" id="user" />

                <div class="final">
                    <p>Forgot your password?</p>
                    <div class="buttons">
                        <pv-button label="Log in" severity="warning"/>
                        <pv-button label="Create Acount" severity="warning" />
                    </div>
                    
                </div>

                
            </div>
    
        </div>
    
    
    </div>
    
    
</template>
        
<script>
export default{
        name:"index-component"
    
    
}
    
</script>
        
<style scoped>

.container{
    height: 933px;
    display: flex;
    gap:550px;

    background-image: url("src/img/fondo.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    

    
        
}

.Rightside{
    margin-top: 150px;
    
}
.Rightside p{
    text-align:  center;

}

.links {
    display: flex;
    flex-direction: row;
    gap:20px;
    margin-top: -90px;
    margin-left: 390px;
}
.links p{
    font-weight: 800;
}

.Rightside_container{
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    width: 350px;
    gap:20px;
    
}



.Rightside_container label{
    font-weight: 700;
}

.final {
    margin-top: 25px;
}

.buttons{
    margin-top: 20px;
    display: flex;
    gap:130px;
    
  
}

.separation{
    margin-top: 80px;
}

.Leftside{
    margin-top: 100px;
    margin-left: 130px;
}

.Leftside p,.title{
    font-weight: 800;
    font-size: 33px;
    line-height: 30px;
    color: black;
    line-height: 2.5rem;

}

.title, .separation{
    margin-right: 280px;
    margin-top: 80px;
}

.final p{
    font-weight: 800;
}

img{
    margin-top: 120px;
    margin-left: 80px;
    border-radius: 229.5px;
    width: 450px;
}
</style>