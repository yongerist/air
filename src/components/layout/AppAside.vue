<script setup lang="ts">
const isCollapse = ref(false)
</script>

<template>
  <el-aside>
    <el-menu router :collapse="isCollapse">
      <a href="/" class="logo">
        <img src="@/assets/logo.svg" alt="" />
        <h1>空调系统</h1>
      </a>
      <el-menu-item index="/settings">
        <el-icon><IEpSetting /></el-icon><span>空调配置</span>
      </el-menu-item>

      <el-menu-item index="/info">
        <el-icon><IEpSetting /></el-icon><span>空调信息</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-aside {
  background-color: #eeeeee;
  height: 100vh;
  width: auto;
}

.el-menu {
  width: 200px;
  border-right: none;
  background-color: #eeeeee;
  &.el-menu--collapse {
    width: 60px;
    & h1 {
      display: none;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  height: 60px;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
