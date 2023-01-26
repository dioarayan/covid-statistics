<template>
  <h1>Analytics</h1>
  <div class="container">
    <AnalyticsControls />
    <AnalyticsAll />
    <!-- <component
        :is="currentView"
        :country="country"
        :date-picked="datePicked"
        /> -->
  </div>
</template>

<script>
// import { ref, watch } from 'vue';

// import AnalyticsData from '../components/analytics/AnalyticsData.vue';
import AnalyticsAll from '../components/analytics/AnalyticsAll.vue';
import AnalyticsControls from '../components/analytics/AnalyticsControls.vue';

export default {
  components: { AnalyticsAll, AnalyticsControls },
  setup() {
    // const datePicked = ref('');
    // const country = ref('');
    // const currentView = ref('AnalyticsAll');
    // const loadAnalytics = ref(false);
    // watch([country, datePicked], function () {
    //   if (country.value !== '' && datePicked.value !== '') {
    //     currentView.value = 'AnalyticsData';
    //     console.log(country.value + ' ' + datePicked.value);
    //   } else {
    //     currentView.value = 'AnalyticsAll';
    //   }
    // });
  },
};
</script>

