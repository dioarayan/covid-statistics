<template>
  <Bar
    :data="allCountryStats"
    :options="chartOptions" />
  <h2>{{ allResult }}</h2>
</template>

<script>
// import PieChart from '../analytics/';
import { ref, reactive, computed } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

export default {
  components: { Bar },
  props: ['allResult'],
  setup(props) {
    const results = ref(props.allResult);
    const chartOptions = reactive({
      responsive: true,
    });

    const allCountryStats = computed(function () {
      const chartData = {
        labels: ['Cases', 'Deaths', 'Tests'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: fetchData.value,
          },
        ],
      };
      return chartData;
    });

    const fetchData = computed(function () {
      const newArray = [];
      // for(let i = 0 )
      newArray[0] = results.value.cases.total;
      newArray[1] = results.value.deaths.total;
      newArray[2] = results.value.tests.total;
      return newArray;
    });

    return { allCountryStats, chartOptions };
  },
};
</script>

