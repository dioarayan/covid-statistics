<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="height: 100vh">
        <base-side></base-side>
      </el-aside>

      <el-container vertical>
        <el-header>
          <base-header></base-header>
        </el-header>
        <el-main>
          <base-main></base-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BaseHeader from './components/layouts/BaseHeader.vue';
import BaseSide from './components/layouts/BaseSide.vue';
import BaseMain from './components/layouts/BaseMain.vue';
// import CountryList from './components/country/CountryList.vue';

export default {
  components: {
    BaseHeader,
    BaseMain,
    BaseSide,
  },
};
</script>

<style>
.el-aside {
  height: 100vh;
  background-color: #6c6e72;
}

.el-header {
  text-align: right;
  background-color: #262727;
}
</style>

