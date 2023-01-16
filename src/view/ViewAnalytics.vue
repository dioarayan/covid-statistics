<template>
  <h1>Analytics</h1>
  <section>
    <el-select
      v-model="value"
      class="m-2"
      placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
  </section>
  <div class="container">
    <div class="w-full">
      <AnalyticsData
        v-if="isLoaded"
        :all-result="allResult" />
      <div v-else>
        <h1>Something went wrong</h1>
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticsData from '../components/analytics/AnalyticsData.vue';
// import useFetchData from '../composables/fetch.js';
import useFetchCountryData from '../composables/fetchCountry.js';

export default {
  components: { AnalyticsData },
  setup() {
    const { allResult, isLoaded } = useFetchCountryData();
    return { allResult, isLoaded };
  },
};
</script>

