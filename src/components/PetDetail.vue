<template lang="">
    <div class="petDetail flex flex-column justify-content-center align-items-center gap-3 p-5">
        <div class="petDetail-img-container">
            <img :src="petImgUrl" :alt="petName" width="90">
        </div>
        <div>
            <h1 class="text-color">{{petName}}</h1>
        </div>
        <div>
            <p class="text-color">{{description}}</p>
        </div>
        <div class="flex flex-column gap-3 w-full p-4 ">
            <pv-button severity="warning" label="Edit image" />
            <pv-button severity="warning" label="Edit name" />
            <pv-button severity="warning" label="Delete" />
        </div>
    </div>
</template>
<script>
export default {
    name: "PedDetail",
    props: {
        petName: String,
        description: String,
        petImgUrl: String
    }
}
</script>


<style>
   .petDetail {
    background: rgba(255, 164, 72, 0.58);
    border-radius: 15px;
   } 

   .petDetail-img-container > img {
    border-radius: 120px;
   }
</style>