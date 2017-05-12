import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
  //Vue.use(resource)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
