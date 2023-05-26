<template>
  <!-- <Line
    :data="chartDataComputed"
    :options="chartOptions" /> -->
</template>

<script>
import { computed, reactive } from 'vue';
// import useGetChartData from '../../../composables/getChartData.js';
// import { Line } from 'vue-chartjs';
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
// } from 'chart.js';

// ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

export default {
  // components: { Line },
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // console.log(props.result);

    // const { resultFetched } = useGetChartData(props.result);

    const totalCases = computed(function () {
      const totalArray = [];
      for (let i = 0; i < resultFetched.length; i++) {
        totalArray[i] = resultFetched[i].cases.total;
      }
      return totalArray;
    });

    const chartDataComputed = computed(function () {
      const chartData = reactive({
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
      });
      return chartData;
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
    };

    function getLatestDataPerDay(array) {
      const result = array.map((e) => {
        return new Date(Date.parse(e.time));
      });
      console.log(result);
    }

    getLatestDataPerDay(props.result);

    // return { chartDataComputed, chartOptions };
  },
};
</script>

