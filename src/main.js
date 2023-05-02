import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import Button from "primevue/button";

const app = createApp(App);

app.use(PrimeVue);

app.component("pv-button", Button);
app.mount("#app");
