<template>
  <div class="flex flex-col">
    <div>
      <p>{{ result }}</p>
    </div>
    <LineChart
      v-if="isLoaded"
      :result="result" />
  </div>
</template>

<script>
import LineChart from '../analytics/chart/LineChart.vue';
import useFetchHistory from '../../composables/fetchHistory.js';
import { onMounted, ref, watch } from 'vue';

export default {
  components: { LineChart },
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const countryData = ref(null);
    // const newDate = new Date([props.datePicked]);
    // const dateString = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    const { result, isLoaded, loadAPI } = useFetchHistory(props.countryPicked);

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

    countryData.value = getFullData(getLatestDataPerMonth(result), result);

    onMounted(() => {
      loadAPI(props.countryPicked);
    });
    // console.log(countryData.value);

    return { result, isLoaded };
  },
};
</script>

