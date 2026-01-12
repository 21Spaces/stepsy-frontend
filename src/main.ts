import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { apolloProvider } from "./plugins/apollo";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(apolloProvider);

app.mount("#app");
