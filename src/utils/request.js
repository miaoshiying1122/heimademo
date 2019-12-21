// 对axios进行一个封装
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/' // 赋值黑马头条的地址

axios.interceptors.request.use(function (config) {
  // 执行请求成功时
//   config  是axios的所有配置
  let token = window.localStorage.getItem('user-token')// 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回的config就会作为新的请求选项去进行请求
}, function (error) {
  // 执行请求失败后
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当data不存在时，then中读取数据报错问题
}, function (error) {
  // 失败时执行 所有的失败 都会进入到第二个回调函数
//   执行状态码 不是200 或者210/204
// 获取状态码，根据状态码进行相应的提示
  let status = error.response.status// 获取状态码
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '手机号或验证码不正确，请重新输入'
      break
    case 403:
    //   resfehtoken过期 强制跳转到登录页   =>是用来换取token的
      router.push('./login') // this.$router.push()
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      window.localStorage.clear() // 清空缓存
      //   token过期 强制跳转到登录页
      router.push('/login') // this.$router.push()
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ message })
  //   希望 在异常处理函数中将所有的错误都处理完毕 不再进入catch  终止错误
  return new Promise(function () {}) // 终止当前的错误
})

export default axios
