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
import InputNumber from 'primevue/inputnumber';
import router from "./router";
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";

import InputSwitch from "primevue/inputswitch";

import i18n from "../src/locales/i18n";

const app = createApp(App);

app.component("pv-inputText", InputText);
app.component("pv-password", Password);
app.component("pv-button", Button);
app.component("pv-radioButton", RadioButton);

app.component("pv-autocomplete", AutoComplete);
app.component("pv-calendar", Calendar);
app.component("pv-inputNumber", InputNumber);
app.component("pv-inputSwitch", InputSwitch);

app.component("pv-inputNumber", InputNumber);


app.use(PrimeVue);
app.use(router);
app.use(i18n);
app.mount("#app");
