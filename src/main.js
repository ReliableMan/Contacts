/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import router from '@/router/routes';

import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import store from './store';

import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
