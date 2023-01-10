<template>
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
              <div class="mt-2">
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
              <div class="mt-2">
                <p>New Deaths: {{ props.row.deaths.new }}</p>
                <p>Total Deaths: {{ props.row.deaths.total }}</p>
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
              <div class="mt-2">
                <p>New Tests: {{ props.row.tests.new }}</p>
                <p>Total Tests: {{ props.row.tests.total }}</p>
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

export default {
  props: {
    allResult: {
      type: Array,
    },
    searchResult: {
      type: Array,
    },
    isSearching: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const statResult = ref(null);
    // const chartData = reactive({
    //   labels: ['Cases', 'Deaths', 'Tests'],
    //   datasets: [
    //     {
    //       backgroundColor: ['#0891B2', '#E11D48', '#059669'],
    //       data: [2, 6, 3],
    //     },
    //   ],
    // });
    // const chartOptions = reactive({
    //   responsive: true,
    // });
    // const convertStatsData = function () {
    //   return {
    //     labels: ['Cases', 'Deaths', 'Tests'],
    //     datasets: [
    //       {
    //         data: [40, 20, 12],
    //       },
    //     ],
    //   };
    // };

    const allResults = computed(function () {
      return props.allResult;
    });

    const searchResults = computed(function () {
      return props.searchResult;
    });

    const countryList = computed(function () {
      if (props.isSearching === false) {
        return allResults.value;
      } else if (props.isSearching === true) {
        return searchResults.value;
      }
    });

    // const statData = computed(function () {
    //   for (let i = 0; i <= statResult.value.length; i++) {
    //     return Object.values(statResult.value[i]);
    //   }
    // });

    // onMounted(() => {
    // statResult.value = countryList.value.map((results) => {
    //   const container = {};
    //   container.casesTotal = results.cases.total;
    //   container.deathsTotal = results.deaths.total;
    //   container.testsTotal = results.tests.total;

    //   return container;
    // });
    // console.log(statResult.value);
    // });

    return { countryList };
  },
};
</script>

