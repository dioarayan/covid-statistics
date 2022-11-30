<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item index="1">Dashboard</el-menu-item>
    <el-menu-item index="2">Countries</el-menu-item>
    <el-menu-item index="3">Statistics</el-menu-item>
    <el-menu-item index="4">History</el-menu-item>
  </el-menu>
  <div class="h-6" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const activeIndex2 = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

