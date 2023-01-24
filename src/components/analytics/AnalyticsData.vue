<template>
  <div class="flex flex-row">
    <div class="basis-1/3">
      <p>{{ result }}</p>
    </div>
  </div>
  <LineChart
    :result="result"
    :result-length="resultLength" />
</template>

<script>
import LineChart from '../analytics/chart/LineChart.vue';
import useFetchHistory from '../../composables/fetchHistory.js';
import { ref } from 'vue';

export default {
  components: { LineChart },
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
    const newDate = new Date([props.datePicked]);
    const dateString = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];

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

    // const statPerMonth = results.value.filter((e) => {
    //   const fetchedDate = new Date(Date.parse(e.time));
    //   const date = fetchedDate.getDate();
    //   const year = fetchedDate.getFullYear();
    //   return date === 15 && year === 2022;
    // });

    const { result, resultLength } = useFetchHistory(props.country, dateString);

    return { result, resultLength };
  },
};
</script>

