import Vue from 'vue'
import App from '@/App'
import IboxPlugin from '@/plugins/ibox'
import store from '@/store'
import WXP from 'minapp-api-promise'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(IboxPlugin)
Vue.use(MpvueRouterPatch)
Vue.prototype.$wx = WXP
Vue.config.productionTip = false

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
