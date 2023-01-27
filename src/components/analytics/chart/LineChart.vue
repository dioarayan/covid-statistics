<template>
  <div>
    <p>{{ allCases }}</p>
    <p>{{ dataCases }}</p>
  </div>
  <Line
    :data="statDetails"
    :options="chartOptions" />
</template>

<script>
import { computed } from 'vue';
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
import { result } from 'lodash';
// import { result } from 'lodash';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

export default {
  components: { Line },
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const resultLength = computed(function () {
      return props.result.length;
    });

    const totalCases = computed(function () {
      const totalArray = [];
      for (let i = 0; i < resultLength.value; i++) {
        totalArray[i] = props.result[i].cases.total;
      }
      return totalArray;
    });

    const labelsCases = computed(function () {
      const labelsArray = [];
      for (let i = 0; i < resultLength.value; i++) {
        labelsArray[i] = new Date(Date.parse(props.result[i].time)).toLocaleTimeString();
      }
      return labelsArray;
    });

    const allCases = computed(function () {
      let arrayDates = [];
      for (let i = 0; i <= 11; i++) {
        let fetchDate = new Date(
          Math.max(
            ...props.result
              .map((e) => {
                return new Date(Date.parse(e.time));
              })
              .filter((b) => {
                return b.getFullYear() === 2022 && b.getMonth() === i;
              })
          )
        );
        arrayDates.push(fetchDate);
        // console.log(fetchDate);
      }
      return arrayDates;
    });

    const dataCases = computed(function () {
      let arrayData = [];
      for (let i = 0; i <= allCases.value.length; i++) {
        let fetchData = props.result.find(function (e) {
          return e.time === allCases.value[i];
        });
        arrayData.push(fetchData);
      }
      return arrayData;
    });

    const statDetails = computed(function () {
      const chartData = {
        labels: labelsCases.value,
        borderColor: 'white',
        datasets: [
          {
            // backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
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
      chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)',
      },
    };

    // const totalStatistics = computed(function () {
    //   const newArray = [];
    //   newArray[0] = props.result.cases.total;
    //   newArray[1] = props.result.deaths.total;
    //   newArray[2] = props.result.tests.total;
    //   return newArray;
    // });

    console.log(allCases.value);
    return { allCases, dataCases, statDetails, chartOptions };
  },
};
</script>

