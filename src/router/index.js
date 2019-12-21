import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/'
import Logins from '../views/login'
import homes from '../views/home/home.vue'
import Comment from '../views/comment'
Vue.use(VueRouter)

const routes = [
  { // 强制跳转
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: '', // 二级路由 什么都不写 作为显示组件
      component: homes
    }, {
      path: '/home/comment',
      component: Comment
    }]
  }, {
    path: '/login',
    component: Logins
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
