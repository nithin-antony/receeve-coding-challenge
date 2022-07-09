import Vue from "vue";
import App from "@/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faLocationPin,
  faChartColumn,
  faBars,
  faReceipt,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(
  faPhone,
  faEnvelope,
  faLocationPin,
  faChartColumn,
  faBars,
  faReceipt,
  faBarsStaggered
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.filter("capitalize", function(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
