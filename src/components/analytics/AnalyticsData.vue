<template>
  <div class="flex flex-col">
    <div>
      <p>{{ result }}</p>
    </div>
    <LineChart :result="result" />
  </div>
</template>

<script>
import LineChart from '../analytics/chart/LineChart.vue';
import useFetchHistory from '../../composables/fetchHistory.js';
import { ref, watch } from 'vue';

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
    const country = ref(props.country);
    const newDate = new Date([props.datePicked]);
    const dateString = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];

    // const chartOptions = reactive({
    //   responsive: true,
    // });

    // const statPerMonth = results.value.filter((e) => {
    //   const fetchedDate = new Date(Date.parse(e.time));
    //   const date = fetchedDate.getDate();
    //   const year = fetchedDate.getFullYear();
    //   return date === 15 && year === 2022;
    // });

    const { result } = useFetchHistory(country.value, dateString);

    return { result };
  },
};
</script>

