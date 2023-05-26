<template>
  <h1>Analytics</h1>
  <div class="container">
    <section v-if="!state.isLoaded && state.loading">...</section>
    <section v-else-if="state.isLoaded && !state.loading">
      <LineChart :result="result" />
      <!-- <AnalyticsAll :result="result" /> -->
    </section>
    <section v-else-if="!state.isLoaded && !state.loading">{{ state.errorMsg }}</section>

    <!-- <AnalyticsData
      v-else-if="searchingCountry"
      :country-picked="countryPicked" /> -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
// import AnalyticsAll from '../components/analytics/AnalyticsAll.vue';

import LineChart from '../components/analytics/chart/LineChart.vue';
import useFetchHistory from '../composables/fetchHistory.js';
export default {
  components: { LineChart },
  setup() {
    // const resultFetched = ref(null);
    // const finalData = ref(null);

    const { result, state, requestData } = useFetchHistory('all');

    onMounted(() => {
      requestData();
    });

    return { result, state };
  },
};
</script>

