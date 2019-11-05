import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import router from './router';

import Layout from './layout';

Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.config.devtools = false;

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  vuetify: new Vuetify({}),
  render: h => h(Layout),
});
