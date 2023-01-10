<template>
  <h1>Analytics</h1>
  <div class="container">
    <div class="w-1/2">
      <!-- <Pie
        v-if="loaded"
        :data="allCountryStats"
        :options="chartOptions" /> -->
    </div>
    <div class="w-1/2">
      <PieChart />
    </div>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { ref, reactive, computed, onMounted } from 'vue';
// import axios from 'axios';
import useFetchData from '../composables/fetch.js';

import PieChart from '../components/statistics/charts/PieChart.vue';

ChartJS.register(Tooltip, Legend, ArcElement);

export default {
  components: { Pie, PieChart },
  setup() {
    const result = ref(null);
    const loaded = ref(false);
    const statArray = ref([]);
    const chartOptions = reactive({
      responsive: true,
    });
    const allCountryStats = computed(function () {
      const chartData = {
        labels: ['Active', 'Deaths', 'Tests'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: statArray.value,
          },
        ],
      };
      return chartData;
    });

    function fetchData(obj) {
      const newArray = [];
      // for(let i = 0 )
      newArray[0] = obj.cases.total;
      newArray[1] = obj.deaths.total;
      newArray[2] = obj.tests.total;
      console.log(newArray);
      return newArray;
    }

    function analyticsData(element, length) {
      for (let i = 0; i < length; i++) {}
    }

    const { allResult, length } = useFetchData();
    console.log(allResult);
    // statArray.value = fetchData(allResult);
    analyticsData(allResult, length);
    loaded.value = true;
    //   const options = {
    //     method: 'GET',
    //     url: 'https://covid-193.p.rapidapi.com/statistics',
    //     params: { country: 'all' },
    //     headers: {
    //       'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
    //       'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    //     },
    //   };

    //   axios
    //     .request(options)
    //     .then(function (response) {
    //       result.value = response.data.response[0];
    //       // console.log(result.value);
    //       statArray.value = fetchData(result.value);
    //       loaded.value = true;
    //       console.log(statArray.value);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // });

    // onUnmounted(() => {
    //   console.log(statResult);
    // });

    return { result, loaded, allCountryStats, chartOptions };
  },
};
</script>

