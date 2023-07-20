<template>
  <div class="h-full relative">
    <el-menu :ellipsis="false" router :default-active="route.path">
      <section class="p-4">
        <img
          src="/public/images/icon.png"
          class="w-9 inline-block mr-2" />
        Covid-19 Statistics
      </section>
      <el-menu-item index="/" route="/">
        <base-icon><HomeFilled /></base-icon>Home
      </el-menu-item>
      <el-menu-item index="/countries" route="/countries">
        <base-icon><MapLocation /></base-icon>Countries
      </el-menu-item>
      <el-menu-item index="/about" route="/about">
        <base-icon><Avatar /></base-icon> About
      </el-menu-item>
    </el-menu>
    <section class="absolute bottom-0 p-8">
      <p class="text-center">DioArayan</p>
    </section>
  </div>
</template>

<script>
import { Grid, MapLocation, Avatar, HomeFilled, TrendCharts } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
export default {
  components: { Grid, MapLocation, HomeFilled, TrendCharts, Avatar },
  setup() {
    const route = useRoute()
    return { Grid, MapLocation, HomeFilled, TrendCharts, Avatar, route };
  },
};
</script>

