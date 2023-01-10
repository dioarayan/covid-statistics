<template>
  <h1 class="text-xl">Statistics</h1>
  <div class="m-2 float-right">
    <el-input
      v-model="inputSearch"
      class="w-60 m-2"
      size="large"
      placeholder="Search Country"
      @keyup="performSearch"
      :suffix-icon="Search" />
  </div>

  <div v-if="isLoaded">
    <statistics-table
      :all-result="allResult"
      :search-result="searchResult"
      :is-searching="isSearching"></statistics-table>
  </div>
  <el-backtop
    :right="100"
    :bottom="100" />
</template>

<script>
import StatisticsTable from '../components/statistics/StatisticsTable.vue';
import { Search } from '@element-plus/icons-vue';
import useFetchData from '../composables/fetch.js';
import { ref } from 'vue';

export default {
  components: { StatisticsTable },

  setup() {
    const searchResult = ref(null);
    const inputSearch = ref('');
    const isSearching = ref(false);

    function performSearch() {
      isSearching.value = true;
      let response = allResult.value;
      searchResult.value = search(response, inputSearch.value);
    }

    function search(myArray, searchKey) {
      let arrayResult = [];
      let searchItem = searchKey.toUpperCase();
      for (let i = 0; i < myArray.length; i++) {
        let item = myArray[i].country.toUpperCase();
        if (item === searchItem || item.includes(searchItem)) {
          arrayResult.push(myArray[i]);
        }
      }
      return arrayResult;
    }

    const { allResult, isLoaded } = useFetchData();

    return { allResult, isLoaded, isSearching, inputSearch, performSearch, searchResult, Search };
  },
};
</script>

