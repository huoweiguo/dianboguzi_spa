import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "../src/styles/reset.css";
import "../src/styles/buble.css";
import "../src/styles/corw.css";
import "../src/styles/snow.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router).use(store).mount("#app");
