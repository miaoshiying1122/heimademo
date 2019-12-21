// 权限拦截  导航守卫
import router from '../router'
router.beforeEach(function (to, from, next) {
  // 拦截谁？？？
  if (to.path.startsWith('./login')) {
    //   进行权限判断  判断有无token，如果有token就放过，如果没有就回到登录页
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 如果有，就直接放过
      next()
    } else {
      next('./login') // 强制跳转到登录页
    }
  } else {
    next()// 直接放行
  }
})
