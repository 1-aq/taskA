import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/reset.scss";
import './styles/common.scss'

// import echarts from "@/echarts.min.js";

// import { GridComponent } from "../node_modules/echarts/components";
// import { BarChart } from "../node_modules/echarts/charts";
// import {CanvasRenderer} from '../node_modules/echarts/renderers'

// echarts.use([GridComponent, BarChart, CanvasRenderer]);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
