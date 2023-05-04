<template>
    <nav>
        <div>
            <h1>
                <router-link to="/">
                    Healthy Pets
                </router-link>
            </h1>
        </div>

        <div class="navbar-search-container">
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <pv-imputText v-model="value1" placeholder="Search" />
            </span>
        </div>

        <div class="navbar-icons-container">
            <span><i class="pi pi-book"></i></span>
            <span><i class="pi pi-star"></i></span>
            <span><i class="pi pi-bell"></i></span>
        </div>

        <div class="navbar-user-container">
            <span><i class="pi pi-user"></i></span>
            <span>Name</span>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1.5rem;
        background: #EEF1F4;
    }
    nav a {
        text-decoration: none;
        color: #000000;
    }
    .navbar-search-container {
        flex: 1;
        max-width: 50%;
    }
    .navbar-search-container > span {
        width: 100%;
    }
    .navbar-search-container input {
        width: 100%;
    }
   nav > h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
   } 
   .navbar-icons-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
   }

   .navbar-icons-container  i {
        font-size: 1.5rem;
   }
   .navbar-user-container {
    display: flex;
    align-items: center;
    gap: .75rem;
   }
   .navbar-user-container i {
    font-size: 1.5rem;
   }
</style>