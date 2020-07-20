import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'

import lodash from 'lodash'
Vue.use(lodash)

import faker from 'vue-faker'
Vue.use(faker)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store: store
})
