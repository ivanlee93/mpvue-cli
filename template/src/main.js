import Vue from 'vue'
import App from '@/App'
import IboxPlugin from '@/plugins/ibox'
import store from '@/store'
import WXP from 'minapp-api-promise'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(IboxPlugin)
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$wx = WXP
App.store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
