import layouAside from './home/layout-aside'
import layouHeader from './home/layout-header'
import BreadCrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('layout-aside', layouAside) // 全局注册
    Vue.component('layout-header', layouHeader) // 全局注册
    Vue.component('bread-crumb', BreadCrumb) // 全局注册一个面包屑组件
  }
}
