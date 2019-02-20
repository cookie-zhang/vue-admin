<template>
  <div class="headerWrapper">
    <div class="logoWrapper">
      <i class="el-icon-menu"></i>
      <span slot="title" class="logoTitle">信息管理系统</span>
    </div>
    <!-- <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <span>asdaksd</span>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu> -->
  </div>
</template>
<script>
export default {
  name: "Heade",
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style lang="less" scoped>
.headerWrapper{
  background: #333;
  color: #fff
}
.logoWrapper {
  float: left;
  width: 250px;
  line-height: 60px;
}
.el-icon-menu {
  margin-right: 10px;
  font-size: 30px;
}
.logoTitle {
  font-size: 30px;
}
</style>
