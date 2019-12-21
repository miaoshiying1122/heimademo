<template>
<!-- 放置一个外层容器container -->
<el-container>
    <!-- 然后左右布局 -->
    <el-aside style="background-color:#353b4e; min-height:100vh; width:230px">
     <layout-aside/>
    </el-aside>
    <!-- 在放置一个外层容器container -->
    <el-container>
        <!-- 上下布局 -->
    <el-header>
     <layout-header/>
    </el-header>
    <el-main>
    <!-- 主要区域 -->
    <router-view></router-view>
    </el-main>
    </el-container>
</el-container>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
</style>
