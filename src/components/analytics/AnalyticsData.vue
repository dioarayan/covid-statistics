<template>
  <div class="flex flex-row">
    <div class="basis-1/3">
      <p>{{ result }}</p>
    </div>
  </div>
  <!-- <LineChart /> -->
</template>

<script>
// import LineChart from '../analytics/chart/LineChart.vue';
import useFetchHistory from '../../composables/fetchHistory.js';
// import { ref } from 'vue';

export default {
  // components: { LineChart },
  props: {
    country: {
      type: String,
      required: true,
    },
    datePicked: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    // const chartOptions = reactive({
    //   responsive: true,
    // });

    // const allCountryStats = computed(function () {
    //   const chartData = {
    //     labels: ['Cases', 'Deaths', 'Tests'],
    //     datasets: [
    //       {
    //         backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
    //         data: fetchData.value,
    //       },
    //     ],
    //   };
    //   return chartData;
    // });

    // const fetchData = computed(function () {
    //   const newArray = [];
    //   // for(let i = 0 )
    //   newArray[0] = results.value.cases.total;
    //   newArray[1] = results.value.deaths.total;
    //   newArray[2] = results.value.tests.total;
    //   return newArray;
    // });

    // const statPerMonth = results.value.filter((e) => {
    //   const fetchedDate = new Date(Date.parse(e.time));
    //   const date = fetchedDate.getDate();
    //   const year = fetchedDate.getFullYear();
    //   return date === 15 && year === 2022;
    // });

    const { result, isLoaded } = useFetchHistory(props.country, props.date);

    return { result };
  },
};
</script>

