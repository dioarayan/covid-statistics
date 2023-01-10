<template>
  <el-menu :ellipsis="false">
    <section class="p-4">
      <img
        src="../../../images/icon.png"
        class="w-9 inline-block mr-2" />
      Covid-19 Tracker
    </section>
    <router-link to="/statistics">
      <el-menu-item index="0"> Statistics </el-menu-item>
    </router-link>
    <router-link to="/analytics">
      <el-menu-item index="1"> Analytics </el-menu-item>
    </router-link>
    <router-link to="/">
      <el-menu-item index="2"> About </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  // props: ['isLoaded'],
  setup() {
    // return {adjustHeight}
  },
};
</script>

