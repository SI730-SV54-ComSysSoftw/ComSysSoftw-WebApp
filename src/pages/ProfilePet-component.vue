<template>
    <div class="profilePet">
        <div class="flex justify-content-between gap-7 flex-wrap">
            <PetDetail 
                petName="Charlo"
                description="This is the best dog in the world" 
                petImgUrl="https://d.newsweek.com/en/full/2163363/rottweiler-puppy-lying-down-bone.jpg?w=1600&h=1600&q=88&f=8d49f3a7adc45914b97dc274a6b3359b" 
            />
            <PetDetail 
                petName="Charlo"
                description="This is the best dog in the world" 
                petImgUrl="https://d.newsweek.com/en/full/2163363/rottweiler-puppy-lying-down-bone.jpg?w=1600&h=1600&q=88&f=8d49f3a7adc45914b97dc274a6b3359b" 
            />
            <PetDetail 
                petName="Charlo"
                description="This is the best dog in the world" 
                petImgUrl="https://d.newsweek.com/en/full/2163363/rottweiler-puppy-lying-down-bone.jpg?w=1600&h=1600&q=88&f=8d49f3a7adc45914b97dc274a6b3359b" 
            />
        </div>
    </div>
</template>

<script>
import PetDetail from '../components/PetDetail-component.vue';

export default {
    name: "ProfilePet",
    components: { PetDetail }
}
</script>
<style>
    .profilePet {
        margin: auto;
    }
</style>