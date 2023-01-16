<template>
  <div class="flex flex-row">
    <div class="basis-3/4">
      <span class="italic text-slate-400/50 inline-block align-bottom">As of {{ timeUpdate }}</span>
    </div>
    <div class="basis-1/4">
      <el-input
        v-model="inputSearch"
        class="w-60 m-2"
        size="large"
        placeholder="Search Country"
        @keyup="performSearch"
        :suffix-icon="Search" />
    </div>
  </div>
  <el-table
    :data="countryList"
    class="table-auto border-spacing-1 w-full">
    <el-table-column type="expand">
      <template #default="props">
        <div class="flex flex-row justify-between">
          <div class="basis-1/4 w-16 p-4">
            <div class="mt-0 mb-2">
              <p class="float-left">Country:</p>
              <p class="text-right">{{ props.row.country }}</p>
            </div>
            <div class="mt-0 mb-2">
              <p class="float-left">Continent:</p>
              <p class="text-right">{{ props.row.continent }}</p>
            </div>
            <div class="mt-0 mb-2">
              <p class="float-left">Population:</p>
              <p class="text-right">{{ props.row.population }}</p>
            </div>
          </div>

          <div class="basis-1/4 w-16 p-4">
            <base-card
              shadow="never"
              class="bg-cyan-600">
              <template #header>
                <h2>Cases</h2>
              </template>
              <div class="flex flex-col mt-2">
                <div class="w-full">
                  <p class="float-left">Active Cases:</p>
                  <p class="text-right">{{ props.row.cases.active }}</p>
                </div>
                <div class="w-full">
                  <p class="float-left">New Cases:</p>
                  <p class="text-right">{{ props.row.cases.new }}</p>
                </div>
                <div class="w-full">
                  <p class="float-left">Critical Cases:</p>
                  <p class="text-right">{{ props.row.cases.new }}</p>
                </div>
                <div class="w-full">
                  <p class="float-left">Recovered:</p>
                  <p class="text-right">{{ props.row.cases.recovered }}</p>
                </div>
              </div>
            </base-card>
          </div>
          <div class="basis-1/4 w-16 p-4">
            <base-card
              shadow="never"
              class="bg-rose-600">
              <template #header>
                <h2>Deaths</h2>
              </template>
              <div class="flex flex-col mt-2">
                <div class="w-full">
                  <p class="float-left">New Deaths:</p>
                  <p class="text-right">{{ props.row.deaths.new }}</p>
                </div>
                <div class="w-full">
                  <p class="float-left">Total Deaths:</p>
                  <p class="text-right">{{ props.row.deaths.total }}</p>
                </div>
              </div>
            </base-card>
          </div>
          <div class="basis-1/4 w-16 p-4">
            <base-card
              shadow="never"
              class="bg-emerald-600">
              <template #header>
                <h2>Tests</h2>
              </template>
              <div class="flex flex-col mt-2">
                <div class="w-full">
                  <p class="float-left">New Deaths:</p>
                  <p class="text-right">{{ props.row.tests.new }}</p>
                </div>
                <div class="w-full">
                  <p class="float-left">Total Deaths:</p>
                  <p class="text-right">{{ props.row.tests.total }}</p>
                </div>
              </div>
            </base-card>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="country"
      label="Country"
      sortable />
    <el-table-column
      prop="cases.total"
      label="Total Cases"
      sortable />
    <el-table-column
      prop="deaths.total"
      label="Total Deaths"
      sortable />
    <el-table-column
      prop="tests.total"
      label="Total Tests"
      sortable />
  </el-table>
</template>

<script>
import { ref, computed } from 'vue';
import { Search, Loading } from '@element-plus/icons-vue';

export default {
  components: { Loading },
  props: {
    allResult: {
      type: Array,
    },
  },
  setup(props) {
    const searchResult = ref(null);
    const inputSearch = ref('');
    const isSearching = ref(false);

    const timeUpdate = computed(function () {
      const dateTime = Date.parse(allResults.value[0].time);
      return new Date(dateTime);
    });

    const allResults = computed(function () {
      return props.allResult;
    });

    const countryList = computed(function () {
      if (isSearching.value === false) {
        return allResults.value;
      } else if (isSearching.value === true) {
        return searchResult.value;
      }
    });

    function performSearch() {
      isSearching.value = true;
      let response = allResults.value;
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

    return { countryList, timeUpdate, isSearching, inputSearch, performSearch, searchResult, Search, Loading };
  },
};
</script>

