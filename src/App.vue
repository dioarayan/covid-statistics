<template>
  <el-container>
    <el-aside class="bg-slate-600 h-screen opacity-75 fixed">
      <the-aside></the-aside>
    </el-aside>
    <el-main>
      <the-main class="relative"></the-main>
    </el-main>
  </el-container>
</template>

<script>
import TheAside from './components/layouts/TheAside.vue';
import TheMain from './components/layouts/TheMain.vue';
// import useFetchData from './composables/fetch.js';

export default {
  components: {
    TheAside,
    TheMain,
  },

  // setup() {
  //   const { isLoaded } = useFetchData();

  //   return { isLoaded };
  // },
};
</script>

<style>
.screenHeight {
  height: 100vh;
}
</style>

