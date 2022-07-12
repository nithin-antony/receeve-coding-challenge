import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationPin,
  faChartColumn,
  faBars,
  faReceipt,
  faBarsStaggered,
  faArrowTrendDown,
  faArrowTrendUp,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faSortUp,
  faSortDown,
  faShareFromSquare,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPhone,
  faEnvelope,
  faLocationPin,
  faChartColumn,
  faBars,
  faReceipt,
  faBarsStaggered,
  faArrowTrendDown,
  faArrowTrendUp,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faSortUp,
  faSortDown,
  faShareFromSquare,
  faArrowRightFromBracket
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
