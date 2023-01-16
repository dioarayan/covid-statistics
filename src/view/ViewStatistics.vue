<template>
  <h1 class="text-3xl">Statistics</h1>
  <base-message v-if="loadingState && !loadedState">
    <template #icon>
      <Loading />
    </template>
    <template #message>
      <span>Fetching data...</span>
    </template>
  </base-message>

  <div v-else-if="loadedState && !loadingState">
    <statistics-table :all-result="allResult"></statistics-table>
  </div>
  <div
    v-else-if="!loadedState && !loadingState"
    class="w-1/2 h-1/2 m-auto py-40">
    <h1 class="font-light italic text-slate-400/50 text-center">{{ errorState.message }}</h1>
    <h1 class="font-light italic text-slate-400/50 text-center">Sorry, try again later</h1>
  </div>
  <el-backtop
    :right="100"
    :bottom="100" />
</template>

<script>
import StatisticsTable from '../components/statistics/StatisticsTable.vue';
import { Loading } from '@element-plus/icons-vue';
import useFetchData from '../composables/fetch.js';
import { ref } from 'vue';

export default {
  components: { StatisticsTable, Loading },

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
    };
  },
};
</script>

