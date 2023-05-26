<template>
  <el-container class="h-screen">
    <el-aside class="bg-slate-600 opacity-75 fixed w-1/5"> </el-aside>
    <el-main class="w-full"> </el-main>
  </el-container>
</template>

<script>
import ElAside from './components/layouts/ElAside.vue';
import ElMain from './components/layouts/ElMain.vue';

export default {
  components: {
    ElContainer,
    ElAside,
    ElMain,
  },
};
</script>

