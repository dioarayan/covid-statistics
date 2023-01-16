<template>
  <Pie :data="statDetails" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'PieChart',
  components: { Pie },
  setup() {
    //   const statDetails = computed(function () {
    //     const chartData = {
    //       labels: ['Active', 'Deaths', 'Tests'],
    //       datasets: [
    //         {
    //           backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
    //           data: [2, 5, 3],
    //         },
    //       ],
    //     };
    //     return chartData;
    //   });

    return { statDetails };
  },
};
</script>
