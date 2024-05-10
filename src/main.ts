import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/styles/reset.css";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
