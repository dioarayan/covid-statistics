import { List } from '@element-plus/icons-vue';

<template>
  <div class="h-full relative">
    <el-menu :ellipsis="false">
      <section class="p-4">
        <img
          src="../../../images/icon.png"
          class="w-9 inline-block mr-2" />
        Covid-19 Statistics
      </section>
      <router-link to="/">
        <el-menu-item index="0">
          <base-icon><Grid /></base-icon>Dashboard
        </el-menu-item>
      </router-link>
      <router-link to="/countries">
        <el-menu-item index="2">
          <base-icon><MapLocation /></base-icon>Countries
        </el-menu-item>
      </router-link>
      <router-link to="/statistics">
        <el-menu-item index="3">
          <base-icon><List /></base-icon>Statistics
        </el-menu-item>
      </router-link>
      <router-link to="/analytics">
        <el-menu-item index="4">
          <base-icon><TrendCharts /></base-icon>Analytics
        </el-menu-item>
      </router-link>
      <router-link to="/about">
        <el-menu-item index="5">
          <base-icon><Avatar /></base-icon> About
        </el-menu-item>
      </router-link>
    </el-menu>
    <section class="absolute bottom-0 p-8">
      <p class="text-center">DioArayan</p>
    </section>
  </div>
</template>

<script>
import { Grid, MapLocation, Avatar, List, TrendCharts } from '@element-plus/icons-vue';
export default {
  components: { Grid, MapLocation, List, TrendCharts, Avatar },
  setup() {
    return { Grid, MapLocation, List, TrendCharts, Avatar };
  },
};
</script>

