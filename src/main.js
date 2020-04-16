import Vue from 'vue'
import App from '@/App.vue'
import Router from '@/router'
import KirbyApi from '@/api/kirby'
import i18n from './i18n'
import Vuex from 'vuex'
import VueGlobalVariable from 'vue-global-var'


Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(VueGlobalVariable, {
  globals: {
    vueI18n: i18n,
  },
  });
  

// self invoke async initialization
;(async () => {
  const site = await KirbyApi.getSite()
  const router = await Router.init(site)
  
  // globals
  Vue.prototype.$api = KirbyApi
  Vue.prototype.$site = site
 
  new Vue({
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
})()
