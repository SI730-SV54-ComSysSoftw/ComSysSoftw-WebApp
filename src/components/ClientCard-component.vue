<template>
    <div class="client-card">
       <h1 class="text-color">{{clientName}}</h1> 
       <div>
        <img :src="clientImgUrl" :alt="clientName" />
       </div>
    </div>
</template>
<script>
export default {
   name: "ClientCard-component",
   props: {
    clientName: String,
    clientImgUrl: String
   }
}
</script>
<style>
   .client-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   } 
   .client-card img {
    width: 360px;
   }
</style>