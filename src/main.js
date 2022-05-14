import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import Router from "./router/index";
import * as AntIcons from "@ant-design/icons-vue";

const app = createApp(App);

for (const iconName in AntIcons) {
  app.component(iconName, AntIcons[iconName]);
}

app.use(store);
app.use(Router);
app.mount("#app");
