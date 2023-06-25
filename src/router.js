import { createRouter, createWebHashHistory } from "vue-router";
import indexComponent from "./components/index-component.vue";
import PetRegistryComponent from "./components/PetRegistry-component.vue";
import VetRegistryComponent from "./components/VetRegistry-component.vue";
import RecomendacionesComponent from "./components/Recomendaciones-component.vue";
import OwnerComponent from "./pages/Owner-component.vue";
import ProfilePetComponent from "./pages/ProfilePet-component.vue";
import HomeComponent from "./pages/Home-component.vue";
import ServiceComponent from "./pages/Services-component.vue";
import LoginPageComponent from "./pages/LoginPage-component.vue";
import RegisterPageComponent from "./pages/RegisterPage-component.vue";
import EditPerfileUserComponent from "./components/EditPerfile-user-component.vue";
import EditPerfileVetComponent from "./components/EditPerfile-vet-component.vue";


const routes = [
  { path: "/", component: LoginPageComponent },
  { path: "/Edit/User", component: EditPerfileUserComponent },
  { path: "/Veterinary/:id", component: EditPerfileVetComponent },
  { path: "/pet-register", component: PetRegistryComponent },
  { path: "/vet-register", component: VetRegistryComponent },
  { path: "/recomendation", component: RecomendacionesComponent },
  { path: "/owner", component: OwnerComponent },
  { path: "/profile-pet", component: ProfilePetComponent },
  { path: "/home", component: HomeComponent },
  { path: "/services", component: ServiceComponent },
  { path: "/register", component: RegisterPageComponent },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
