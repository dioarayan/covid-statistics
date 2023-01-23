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
      <router-link to="/statistics">
        <el-menu-item index="0">
          <base-icon><List /></base-icon>Statistics
        </el-menu-item>
      </router-link>
      <router-link to="/analytics">
        <el-menu-item index="1">
          <base-icon><TrendCharts /></base-icon>Analytics
        </el-menu-item>
      </router-link>
      <router-link to="/about">
        <el-menu-item index="2">
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
import { Avatar, List, TrendCharts } from '@element-plus/icons-vue';
export default {
  components: { List, TrendCharts, Avatar },
  setup() {
    return { List, TrendCharts, Avatar };
  },
};
</script>

