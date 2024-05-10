import { createApp } from "vue";
// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
// 导入ICon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
