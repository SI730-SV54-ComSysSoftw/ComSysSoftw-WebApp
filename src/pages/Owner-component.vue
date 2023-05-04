<template>
    <div class="owner-banner-container flex p-4">
        <div class="owner-banner flex align-items-center">
            <div class="owner-banner-left">
            <img src="../assets/owner-logo.jfif" alt="owner-logo">
            </div>
            <div class="owner-banner-right">
            <h1 class="text-color">Client list</h1>
            </div>
        </div>
    </div>

    <div class="owner-clients">
        <ClientCard
            clientName="Client 1" 
            clientImgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <ClientCard
            clientName="Client 1" 
            clientImgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <ClientCard
            clientName="Client 1" 
            clientImgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
    </div>

    <div class="owner-buttons">
        <pv-button severity="warning" label="Edit vet profile" />
        <pv-button severity="warning" label="Reviews" />
    </div>
</template>
<script>
import ClientCard from '../components/ClientCard.vue';

export default {
    name: "Owner",
    components: { ClientCard }
}
</script>
<style>
    .owner-banner {
        width: 100%;
    }
    .owner-banner-left {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .owner-banner-right {
        flex: 2;
    }
   .owner-banner img {
    width: 190px;
    border-radius: 92.5px;
   } 
   .owner-banner-container {
    background-image: url(../assets/clinet-list-banner.png);
   }
   .owner-clients {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
   }
   .owner-buttons {
    display: flex;
    gap: .75rem;
    justify-content: end;
    padding: 2rem;
   }
</style>