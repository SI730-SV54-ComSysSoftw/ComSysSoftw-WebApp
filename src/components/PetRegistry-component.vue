<template>
   <div class="todo">
    <div class="container">

    <img src="src/img/image 11.png">


    <form>
    
    <pv-imputText type="text" v-model="value"  placeholder="kinds Pet" class="inputText"/>

    <div class="conjunto">

        <pv-imputText type="text" v-model="value" class="p-inputtext-sm"  placeholder="Name"/>

        <div class="genderbuttons">
            <div class="gender">
                <pv-radioButton v-model="gender" inputId="genderM" name="gender" value="male" />
                <label for="ingredient1" class="ml-2">Male</label>
            </div>
            <div class="gender">
                <pv-radioButton v-model="gender" inputId="genderF" name="gender" value="Female" />
                <label for="ingredient2" class="ml-2">Female</label>
            </div>

        </div>


    </div>
   

    <pv-imputText type="text" v-model="value"  placeholder="Age" class="inputText"/>




    </form>

    <img src="src/img/image 12.png">













        </div>



   </div> 
   


</template>

<script>
export default{
    name:"PetRegistry"
}



</script>

<style scoped>


.container{
    display: flex;
    gap: 300px;
    
  
    
    margin: 50px;
}
.todo{
    background-image: url("src/img/image 10.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 900px;
    
}

.genderbuttons{
    display: flex;
    gap: 20px;
    float:right;
    
}

.gender{
    align-items: center;
    display: flex;
    gap: 10px;
}

.p-inputtext-sm, .inputText{
    border: 1px solid #000000;
}

img{
    margin-top: 50px;
}

form{
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 2rem;
    display: flex;
    gap:50px;
    flex-direction: column;
    background: rgba(255, 164, 72, 0.83);
    width: 430px;
    
}

</style>