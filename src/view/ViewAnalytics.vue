<template>
  <h1>Analytics</h1>
  <div class="container">
    <div class="flex justify-center items-center">
      <el-form>
        <el-select
          v-model="country"
          class="m-2"
          filterable
          placeholder="Select Country"
        >
          <el-option v-for="country in countries" :value="country">{{
            country
          }}</el-option>
        </el-select>
        <el-date-picker
          v-model="datePicked"
          type="date"
          placeholder="Pick a day"
        />
        <base-button @click="goButton"> Go! </base-button>
      </el-form>
    </div>
    <div class="flex flex-col justify-center items-center">
      <AnalyticsData
        v-if="loadAnalytics"
        :country="country"
        :date-picked="datePicked"
      />
      <div v-else>
        <h1>Start searching</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useFetchCountry from "../composables/fetchCountry.js";

// import AnalyticsData from '../components/analytics/AnalyticsData.vue';
// import useFetchData from '../composables/fetch.js';

export default {
  setup() {
    const datePicked = ref("");
    const country = ref("");
    const loadAnalytics = ref(false);
    // const data = reactive({
    //   labels: ['January', 'February', 'March', 'June'],
    //   datasets: [
    //     {
    //       label: 'Data One',
    //       backgroundColor: '#f87979',
    //       data: [24, 31, 14, 3],
    //     },
    //   ],
    // });

    function goButton() {
      loadAnalytics.value = true;
      console.log(datePicked.value);
      console.log(country.value);
    }

    const [countries] = useFetchCountry();

    return { countries, country, datePicked, loadAnalytics, goButton };
  },
};
</script>
