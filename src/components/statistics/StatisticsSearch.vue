<template>
  <p>Search Country Result</p>
  <el-table
    :data="searchCountry"
    class="table-auto border-spacing-2 w-full">
    <el-table-column type="expand">
      <template #default="props">
        <div class="flex flex-row justify-between">
          <div class="basis-1/4 w-16 p-4">
            <p class="mt-0 mb-2">Country: {{ props.row.country }}</p>
            <p class="mt-0 mb-2">Continent: {{ props.row.continent }}</p>
            <p class="mt-0 mb-2">Population: {{ props.row.population }}</p>
            <base-button
              link
              to="/statistics"
              >Search History</base-button
            >
          </div>
          <div class="basis-1/4 w-16 p-4">
            <base-card
              shadow="never"
              class="bg-cyan-600">
              <template #header>
                <h2>Cases</h2>
              </template>
              <div class="mt-2">
                <p>Active Cases: {{ props.row.cases.active }}</p>
                <p>New Cases: {{ props.row.cases.new }}</p>
                <p>Critical: {{ props.row.cases.critical }}</p>
                <p>Recovered: {{ props.row.cases.recovered }}</p>
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
import { ref } from 'vue';

export default {
  props: {
    searchResult: {
      type: Array,
    },
  },
  setup(props) {
    const searchCountry = ref(props.searchResult);

    return { searchCountry };
  },
};
</script>

