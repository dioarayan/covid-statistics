<template>
  <!-- <div>
    <p>{{ totalCases }}</p>
    <p>{{ labelsCases }}</p>
  </div> -->
  <Line :data="statDetails" :options="chartOptions" />
</template>

<script>
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default {
  name: "LineChart",
  components: { Line },
  props: {
    result: {
      type: Array,
      required: true,
    },
    resultLength: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const totalCases = computed(function () {
      const totalArray = [];
      for (let i = 0; i < props.resultLength; i++) {
        totalArray[i] = props.result[i].cases.total;
      }
      return totalArray;
    });

    const labelsCases = computed(function () {
      const labelsArray = [];
      for (let i = 0; i < props.resultLength; i++) {
        labelsArray[i] = new Date(
          Date.parse(props.result[i].time)
        ).toLocaleTimeString();
      }
      return labelsArray;
    });

    const statDetails = computed(function () {
      const chartData = {
        labels: labelsCases.value,
        borderColor: "white",
        datasets: [
          {
            // backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: totalCases.value,
            borderColor: "#fff",
            borderWidth: "3",
          },
        ],
      };
      return chartData;
    });

    const chartOptions = {
      responsive: true,
      chartArea: {
        backgroundColor: "rgba(251, 85, 85, 0.4)",
      },
    };

    // const totalStatistics = computed(function () {
    //   const newArray = [];
    //   newArray[0] = props.result.cases.total;
    //   newArray[1] = props.result.deaths.total;
    //   newArray[2] = props.result.tests.total;
    //   return newArray;
    // });

    return { statDetails, chartOptions };
  },
};
</script>
