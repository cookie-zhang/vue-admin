<template>
  <div class="index">
    <el-container>
  <el-header>
    <heade/>
  </el-header>
  <el-container>
    <el-aside width="201px">
      <left-menu/>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '../views/home/home'
import heade from '../components/heade'
import leftMenu from '../components/leftMenu'
export default {
  name: 'index',
  components: {
    heade,
    leftMenu
  }
}
</script>
<style lang="less" scoped>
  .el-header {
    position: fixed;
    top: 0;
    right:0;
    width: 100%;
    background-color: rgb(84, 92, 100);
  }
  .el-aside {
    position: fixed;
    top: 60px;
    left: 0;
    height: 100%;
    width: 100%;
    color: #333;
    overflow: auto;
    background-color: rgb(84, 92, 100);
  }
  
  .el-main {
    float: left;
    width: 100%;
    margin-top: 60px;
    margin-left: 201px;
    height: 100%;
    background-color: #E9EEF3;
    overflow: hidden;
  }

</style>

