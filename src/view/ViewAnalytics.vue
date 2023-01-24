<template>
  <h1>Analytics</h1>
  <div class="container">
    <div class="flex justify-center items-center">
      <el-form>
        <el-select
          v-model="country"
          class="m-2"
          filterable
          placeholder="Select Country">
          <el-option
            v-for="country in countries"
            :value="country"
            >{{ country }}</el-option
          >
        </el-select>
        <el-date-picker
          v-model="datePicked"
          type="date"
          placeholder="Pick a day" />
        <!-- <base-button @click="goButton"> Go! </base-button> -->
      </el-form>
    </div>
    <div class="flex justify-center items-center">
      <!-- <AnalyticsData
        :country="country"
        :date-picked="datePicked" />
      <LineChart
        v-if="loadAnalytics"
        :country="country"
        :date-picked="datePicked" /> -->
      <component
        :is="currentView"
        :country="country"
        :date-picked="datePicked"
        @newQuery="" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import useFetchCountry from '../composables/fetchCountry.js';
import AnalyticsData from '../components/analytics/AnalyticsData.vue';
import AnalyticsAll from '../components/analytics/AnalyticsAll.vue';

export default {
  components: { AnalyticsData, AnalyticsAll },
  setup() {
    const datePicked = ref('');
    const country = ref('');
    const currentView = ref('AnalyticsAll');
    // const loadAnalytics = ref(false);

    watch([country, datePicked], function (newValues) {
      if (country.value !== '' && datePicked.value !== '') {
        currentView.value = 'AnalyticsData';
        country.value = newValues[0];
        datePicked.value = newValues[1];
        console.log(country.value + ' ' + datePicked.value);
      } else {
        currentView.value = 'AnalyticsAll';
      }
    });

    // function goButton() {
    //   loadAnalytics.value = true;
    //   console.log(datePicked.value);
    //   console.log(country.value);
    // }

    const [countries] = useFetchCountry();

    return { countries, country, datePicked, currentView };
  },
};
</script>

