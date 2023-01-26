<template>
  <section
    v-if="isLoaded"
    class="w-full">
    <LineChart :result="result" />
  </section>
</template>
<script>
// import { ref } from 'vue';
import useFetchHistory from '../../composables/fetchHistory.js';
import LineChart from '../analytics/chart/LineChart.vue';

export default {
  components: { LineChart },
  setup() {
    const country = 'all';

    const { result, isLoaded } = useFetchHistory(country);

    return { result, isLoaded };
  },
};
</script>

