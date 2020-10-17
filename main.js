import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'
import { http } from '@/common/service.js' // 全局挂载引入，配置相关在该index.js文件里修改
/***
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
**/
Vue.prototype.$http = http
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111" 
Vue.prototype.wechatAppId = "wx1cd87722a5f39d01"
Vue.prototype.templateId = "0VTS54fueHsTmDqaHdbfpO-F586HOJkwlKtgQZoI9H4" 
Vue.prototype.shareImage = "https://lajun-chihe.oss-cn-beijing.aliyuncs.com/chihe-share.jpeg"
Vue.prototype.contactImage = "https://leijun-common.oss-cn-shenzhen.aliyuncs.com/lajun-wechat.jpeg"
Vue.prototype.raiseImage = "https://leijun-common.oss-cn-shenzhen.aliyuncs.com/raise.jpeg"

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
