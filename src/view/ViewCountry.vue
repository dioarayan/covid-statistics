<template>
  <h1 class="text-3xl">Countries</h1>
  <el-divider />
  <div class="p-3">
    <ul class="list-disc grid gap-4 grid-cols-4 grid-rows-3">
      <li v-for="result in allResult">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
import useFetchAPIData from '../composables/fetchAPI.js';
import { Loading, WarningFilled } from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const load_spinner = ref(false);
    const load_data = ref(false);
    const endpoint = ref('countries');

    const { allResult, loadedState, loadingState, errorState, loadAPI } = useFetchAPIData(
      endpoint.value,
      load_spinner.value,
      load_data.value
    );

    onMounted(() => {
      loadAPI();
    });

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

