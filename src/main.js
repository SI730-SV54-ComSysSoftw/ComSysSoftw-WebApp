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
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';






const app = createApp(App);

app.component('pv-imputText',InputText)
app.component('pv-password',Password)
app.component('pv-button',Button)
app.component('pv-radioButton',RadioButton)

app.use(PrimeVue);
app.mount("#app");