import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ViewUI)
// 全局注册axios，使用的时候需要加this，https://www.html.cn/qa/vue-js/14698.html
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
