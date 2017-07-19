// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueFire from 'vuefire'
import Materials from 'vue-materials'

/* Объявляем глобальную шину для передачи событие между компонентами */

Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return this.$root.bus
  }
})

Vue.config.productionTip = false

/* Блок подключения плагинов Vue */

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAaaaF02Cg8aKi-yYB2jR0k4GuApxnzxr0',
    v: '3.26',
    libraries: 'places'
  }
})

Vue.use(VueFire)
Vue.use(Materials)

/* Конструктор приложения */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    bus: new Vue({})
  }
})
