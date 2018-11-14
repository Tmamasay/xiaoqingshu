import Vue from 'vue'
import App from './App'
import api from './api/index'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(api)
const app = new Vue(App)
app.$mount()
