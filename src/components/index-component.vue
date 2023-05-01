<template>

    <div class="container">
    
        <div class="Leftside">
    
            <p>HealthyPets</p>
            <p>The plataform to find your</p>
            <p>ideal veterinarian</p>

            <img src="src/img/icono.jpg">
    
        </div>
    
        <div class="Rightside" >
            <p>Sign in to HealtyPets</p>
            <p class="separation">-------------------Or----------------</p>
            <div class="Rightside_container">
                <label for="username">Username or Email Address</label>
                <pv-imputText type="text" v-model="value" id="username" />
            
                <label for="password">Password</label>
                <pv-password v-model="value" :feedback="false" id="password" />

                <label for="user">Type User</label>
                <pv-imputText type="text" v-model="value" id="user" />


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
    display: flex;
    gap:350px;
    width: 1800px;
}

.Rightside{
    margin-top: 150px;
    
}
.Rightside p{
    text-align:  center;
}

.Rightside_container{
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    width: 350px;
    
}

.separation{
    margin-top: 80px;
}

.container p{
    font-weight: 700;
    font-size: 33px;
    line-height: 30px;
    color: #667080;
    line-height: 2.5rem;
    
}

img{
    border-radius: 229.5px;
    width: 450px;
}
</style>