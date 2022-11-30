<template>
  <div class="common-layout">
    <el-container>
      <base-header> </base-header>
    </el-container>
    <el-container>
      <base-main></base-main>
    </el-container>
  </div>
</template>

<script>
import BaseHeader from './components/layouts/BaseHeader.vue';
import BaseMain from './components/layouts/BaseMain.vue';
// import CountryList from './components/country/CountryList.vue';

export default {
  components: {
    BaseMain,
    BaseHeader,
  },
};
</script>

