import { createApp } from "vue";
import router from "./routers";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "./axiosSetup";
window.axios = axios;

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);

const vueSetup = createApp(App);
vueSetup.use(router);
vueSetup.use(AOS.init());
vueSetup.mount("#app");
vueSetup.component("font-awesome-icon", FontAwesomeIcon);

// createApp(App).mount("#app");

//Set pinia and axios
import { createPinia } from "pinia";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = router;
  store.$axios = axios;
  store.APIURL = import.meta.env.VITE_MAIN_API_URL;
});
vueSetup.use(pinia);
