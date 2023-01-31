<template>
  <h1>Analytics</h1>
  <div class="container">
    <AnalyticsControls @select-country="selectCountry" />
    <AnalyticsAll
      v-if="isLoaded"
      :searching-country="searchingCountry"
      :result-fetched="resultFetched" />
    <!-- <AnalyticsData
      v-else-if="searchingCountry"
      :country-picked="countryPicked" /> -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

// import AnalyticsData from '../components/analytics/AnalyticsData.vue';
import AnalyticsAll from '../components/analytics/AnalyticsAll.vue';
import AnalyticsControls from '../components/analytics/AnalyticsControls.vue';
import useFetchHistory from '../composables/fetchHistory.js';
export default {
  components: { AnalyticsAll, AnalyticsControls },
  setup() {
    const countryPicked = ref('All');
    const resultFetched = ref(null);
    // const searchingCountry = ref(false);

    function selectCountry(country) {
      searchingCountry.value = true;
      countryPicked.value = country;
      console.log(countryPicked.value);
      resultFetched.value = loadAPI(countryPicked.value);
    }

    const { isLoaded, loadAPI } = useFetchHistory(countryPicked.value);

    onMounted(() => {
      resultFetched.value = loadAPI(countryPicked.value);
    });

    return { resultFetched, isLoaded, searchingCountry, countryPicked, selectCountry };
  },
};
</script>

