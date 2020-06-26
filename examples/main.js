/* eslint-disable no-debugger */
import Vue from 'vue'
import App from './App.vue'
import ui from "../packages/index.js"
import router from "./router"
Vue.config.productionTip = false
console.log(ui)
Vue.use(ui.Dialog)
// Vue.use(ui.MyButton)
// Vue.use(ui.MyDivider)
// Vue.use(ui.MyDivider)
import Elem from 'element-ui'
Vue.use(Elem)

// Vue.use(Dialog)
// debugger;
Vue.use(ui)



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
