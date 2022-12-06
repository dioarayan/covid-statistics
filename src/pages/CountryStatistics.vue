<template>
  <h1>Statistics</h1>
  <div>
    <el-input
      v-model="searchItem"
      class="w-60 m-2"
      size="large"
      placeholder="Search Country"
      :suffix-icon="Search" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

export default {
  setup() {
    const searchItem = ref(null);

    return { searchItem, Search };
  },
};
</script>

