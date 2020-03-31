// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/theme.css";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);
// require styles
import 'swiper/css/swiper.css'

import store from "./store";

Vue.use(VueAwesomeSwiper)
Vue.use(Element);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=216767064,1223934954&fm=26&gp=0.jpg',
  loading: 'http://hbimg.b0.upaiyun.com/a44800212601c7e2f81bfe0047a303d5dcbb1bb94b96-eCm20d_fw658',
  attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
