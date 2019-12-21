<template>
<!-- 头部组件 -->
<el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <!-- 左侧内容 -->
    <el-col class="left" :span="7">
        <!-- 左侧图标 -->
        <i class="el-icon-s-unfold"></i>
        <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧内容 -->
    <el-col :span="4" class="right">
        <el-row type="flex" justify="end" align="middle">
           <img :src="!userInfo.photo ? userInfo.photo :defaultImg" alt="" style="width:40px;height:40px;border-radius:50%;margin-right: 5px;">
        <!-- 放置一个下拉菜单 -->
           <el-dropdown @command="handle">
               <span>{{userInfo.name}}</span>
               <!-- 具名插槽 -->
               <el-dropdown-menu>
                   <el-dropdown-item command="info">个人信息</el-dropdown-item>
                   <el-dropdown-item command="git">git地址</el-dropdown-item>
                   <el-dropdown-item command="lgout">退出</el-dropdown-item>
               </el-dropdown-menu>
           </el-dropdown>
        </el-row>
    </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        // 用户信息
      },
      defaultImg: require('../../assets/img/ez.jpg')
    }
  },
  created () {
    this.$axios({
      url: 'user/profile'

    }).then(result => {
      this.userInfo = result.data
    })
  },
  methods: {
    handle (command) {
      if (command === 'lgout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/miaoshiying1122/heimademo'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header{
    height: 60px;
    .left{
        font-size: 18px;
        .title{
            margin-left: 10px;
        }

    }
}
</style>
