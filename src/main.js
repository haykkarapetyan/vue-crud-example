import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Vuetify({
  icons: {
    iconfont: 'fa',
    values: {
      cancel: 'fas fa-ban',
      menu: 'fas fa-ellipsis-v',
    },
  },
})
