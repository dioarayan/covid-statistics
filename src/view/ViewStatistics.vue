<template>
  <h1 class="text-3xl">Statistics</h1>
  <base-message v-if="loadingState && !loadedState">
    <template #icon>
      <base-icon
        size="50"
        class="is-loading">
        <Loading />
      </base-icon>
    </template>
    <template #message>
      <span>Fetching data...</span>
    </template>
  </base-message>

  <div v-else-if="loadedState && !loadingState">
    <statistics-table :all-result="allResult"></statistics-table>
  </div>
  <base-message v-else-if="!loadedState && !loadingState">
    <template #icon>
      <base-icon size="50">
        <WarningFilled />
      </base-icon>
    </template>
    <template #message>
      <span>{{ errorState.message }}</span
      ><br />
      <span>Sorry, try again later</span>
    </template>
  </base-message>
  <!-- <el-backtop
    :right="100"
    :bottom="100" /> -->
</template>

<script>
import StatisticsTable from '../components/statistics/StatisticsTable.vue';
import { Loading, WarningFilled } from '@element-plus/icons-vue';
import useFetchData from '../composables/fetchStatistics.js';
import { ref } from 'vue';

export default {
  components: { StatisticsTable, Loading, WarningFilled },

  setup() {
    const load_spinner = ref(true);
    const load_data = ref(false);

    const { allResult, loadedState, loadingState, errorState } = useFetchData(load_spinner.value, load_data.value);

    return {
      allResult,
      loadedState,
      loadingState,
      errorState,
      Loading,
      WarningFilled,
    };
  },
};
</script>

