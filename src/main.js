import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';



Vue.config.productionTip = false
Vue.component('formulario-component', require('./components/formulario1.vue').default);
Vue.component('titulo-component', require('./components/titulo.vue').default);
Vue.component('tabla-component', require('./components/tabla1.vue').default);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
