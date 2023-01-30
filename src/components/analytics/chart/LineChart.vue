<template>
  <Line
    :data="statDetails"
    :options="chartOptions" />
</template>

<script>
import { ref, computed } from 'vue';
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
  components: { Line },
  props: {
    countryData: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const countryData = ref(props.countryData);
    const totalCases = computed(function () {
      const totalArray = [];
      for (let i = 0; i < countryData.value.length; i++) {
        totalArray[i] = countryData.value[i].cases.total;
      }
      return totalArray;
    });

    // const labelsCases = computed(function () {
    //   const labelsArray = [];
    //   for (let i = 0; i < result.value.length; i++) {
    //     labelsArray[i] = new Date(Date.parse(result.value[i].time)).toLocaleTimeString();
    //   }
    //   return labelsArray;
    // });

    const statDetails = computed(function () {
      const chartData = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        borderColor: 'white',
        datasets: [
          {
            // backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            label: 'Total Cases',
            data: totalCases.value,
            borderColor: '#fff',
            borderWidth: '1',
          },
        ],
      };
      return chartData;
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
    };

    return { statDetails, chartOptions };
  },
};
</script>

