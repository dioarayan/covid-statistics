<template>
  <h1>Analytics</h1>
  <div class="container">
    <AnalyticsControls @select-country="selectCountry" />
    <AnalyticsAll
      v-if="isLoaded"
      :result="result" />
    <!-- <AnalyticsData /> -->
  </div>
</template>

<script>
import { ref } from 'vue';

// import AnalyticsData from '../components/analytics/AnalyticsData.vue';
import AnalyticsAll from '../components/analytics/AnalyticsAll.vue';
import AnalyticsControls from '../components/analytics/AnalyticsControls.vue';
import useFetchHistory from '../composables/fetchHistory.js';
export default {
  components: { AnalyticsAll, AnalyticsControls },
  setup() {
    const countryPicked = ref('All');

    function selectCountry(country) {
      countryPicked.value = country;
      console.log(countryPicked.value);
    }

    const { result, isLoaded } = useFetchHistory(countryPicked.value);

    return { result, isLoaded, selectCountry };
  },
};
</script>

