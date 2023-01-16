<template>
  <el-container>
    <el-aside class="bg-slate-600 h-screen opacity-75 fixed">
      <the-aside></the-aside>
    </el-aside>
    <el-main class="h-screen">
      <the-main class="relative"></the-main>
    </el-main>
  </el-container>
</template>

<script>
import TheAside from './components/layouts/TheAside.vue';
import TheMain from './components/layouts/TheMain.vue';

export default {
  components: {
    TheAside,
    TheMain,
  },
};
</script>

