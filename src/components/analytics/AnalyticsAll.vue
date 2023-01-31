<template>
  <section class="w-full">
    <LineChart
      ref="line"
      :country-data="countryData" />
  </section>
</template>

<script>
import { ref } from 'vue';
import LineChart from '../analytics/chart/LineChart.vue';

export default {
  components: { LineChart },
  props: {
    resultFetched: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const countryData = ref(null);
    const line = ref(null);

    function getFullData(array1, array2) {
      let arrayResult = [];
      for (let i = 0; i < array1.length; i++) {
        let fetchData = array2.find(function (e) {
          return (
            new Date(Date.parse(e.time)).toISOString().slice(0, 19) === new Date(array1[i]).toISOString().slice(0, 19)
          );
        });
        arrayResult.push(fetchData);
      }
      console.log('It also works here!');
      return arrayResult;
    }

    function getLatestDataPerMonth(array) {
      let arrayDates = [];
      for (let i = 0; i <= 11; i++) {
        let fetchDate = new Date(
          Math.max(
            ...array
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
      console.log('It Works here!');
      return arrayDates;
    }

    countryData.value = getFullData(getLatestDataPerMonth(props.resultFetched), props.resultFetched);

    return { countryData, line };
  },
};
</script>

