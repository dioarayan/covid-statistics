<template>
  <Line :data="statDetails" />
</template>

<script>
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

export default {
  name: 'PieChart',
  components: { Line },
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

