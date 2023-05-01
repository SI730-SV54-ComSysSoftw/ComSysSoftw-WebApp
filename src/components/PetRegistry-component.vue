<template>
    <div class="container">

        <img src="src/img/image 11.png">


        <form>
            
            <pv-imputText type="text" v-model="value"  placeholder="kinds Pet"/>
            <pv-imputText type="text" v-model="value"  placeholder="Name"/>

            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <pv-radioButton v-model="gender" inputId="genderM" name="gender" value="male" />
                    <label for="ingredient1" class="ml-2">Male</label>
                </div>
                <div class="flex align-items-center">
                    <pv-radioButton v-model="gender" inputId="genderF" name="gender" value="Female" />
                    <label for="ingredient2" class="ml-2">Female</label>
                </div>
          
            </div>




        </form>

        <img src="src/img/image 12.png">













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
    gap: 350px;
}

</style>