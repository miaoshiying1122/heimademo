import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less' // 引入初始化样式
import ElementUI from 'element-ui' // 引入element包
import 'element-ui/lib/theme-chalk/index.css' // 引入elementui样式
import axios from 'axios'
import Component from './components' // 引入组件对象
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册
Vue.use(Component) // 注册全局组件对象=>调用该对象中的install方法
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/' // 赋值黑马头条的地址
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
