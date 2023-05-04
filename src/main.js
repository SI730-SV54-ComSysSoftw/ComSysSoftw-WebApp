import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

//PrimeVue
import PrimeVue from "primevue/config";

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-purple/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core
import "primeicons/primeicons.css"; // icons
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import router from "./router";

import i18n from "../src/locales/i18n";

const app = createApp(App);

app.component("pv-imputText", InputText);
app.component("pv-password", Password);
app.component("pv-button", Button);
app.component("pv-radioButton", RadioButton);

app.use(PrimeVue);
app.use(router);
app.use(i18n);
app.mount("#app");
