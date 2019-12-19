<template>
  <div class="login">
    <!-- 使用element组件el-card -->
    <el-card class="login-card">
      <!-- 匿名插槽 -->
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form ref="myfrom" :model="from" :rules="ruless" style="margin-top:20px">
        <el-form-item prop="mobile">
          <el-input v-model="from.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="from.code" placeholder="请输入验证码" style="width:65%"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item  prop="cheak">
          <el-checkbox v-model="from.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="clot" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // 定义表单数据对象from
  data () {
    return {
      from: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 多选框
      },
      //   验证规则   key字段名称:value数组
      ruless: {
        // 如果required为true =>必填。
        mobile: [
          { required: true, message: '请输入你的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ],
        code: [
          { required: true, message: '请输入正确的验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }
        ],
        check: [{ validator: function (rule, value, callback) {
          // rule是当前的规则   没什么用
          // value是我们要校验字段的值
          if (value) {
            // 认为校验通过
            callback() // 认为校验通过 直接执行callback函数
          } else {
            // 认为校验不通过，  给提示信息
            callback(new Error('你还没有同意合约')) // 认为校验不通过  执行callback函数
          }
        } }]
      }
    }
  },
  methods: {
    clot () {
      // 提交登录表单
      this.$refs.myfrom.validate((ok) => {
        if (ok) {
        //   认为前端校验登录成功
          this.$axios({
            url: 'authorizations', // 请求地址
            method: 'post',
            data: this.from
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token) // 前端缓存令牌
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '手机号或密码错误，请重新输入',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 330px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
