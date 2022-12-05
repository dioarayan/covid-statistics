<template>
  <el-menu>
    <router-link to="/dashboard">
      <el-menu-item index="1">
        <template #title> Dashboard </template>
      </el-menu-item>
    </router-link>
    <router-link to="/country">
      <el-menu-item index="2">
        <template #title> Country </template>
      </el-menu-item>
    </router-link>
    <router-link to="/statistics">
      <el-menu-item index="2">
        <template #title> Statistics </template>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style scoped>
.aside {
  height: 100vh;
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
</style>

