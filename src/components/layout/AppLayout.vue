<script setup lang="ts">
import AppAside from './AppAside.vue'
import Header from './AppHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <AppAside />
      <el-container class="header-and-main">
        <AppHeader />
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.header-and-main {
  flex-direction: column;
}
</style>
