import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission/index' // 引入js
import ElementUI from 'element-ui' // 引入element包
import './styles/index.less' // 引入初始化样式
import 'element-ui/lib/theme-chalk/index.css' // 引入elementui样式
import axios from './utils/request' // 引入自己封装的axios
import Component from './components' // 引入组件对象
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册
Vue.prototype.$axios = axios// 赋值给全局对象
Vue.use(Component) // 注册全局组件对象=>调用该对象中的install方法

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
