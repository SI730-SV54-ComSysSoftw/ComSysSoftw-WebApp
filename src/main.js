import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//PrimeVue
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-purple/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core
import "primeicons/primeicons.css"; // icons
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';


import i18n from "../src/locales/i18n";



const app = createApp(App);

app.component('pv-imputText',InputText)
app.component('pv-password',Password)

app.use(PrimeVue);
app.use(i18n);
app.mount("#app");

