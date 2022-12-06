<template>
  <div class="container">
    <div class="my-5">
      <p class="text-3xl">My Dashboard</p>
    </div>
    <el-divider />
    <div class="my-5">
      <p>Track First</p>
    </div>
    <div class="flex flex-wrap">
      <div class="basis-1/2 m-5">
        <base-card>
          <p>{{ result }}</p>
          <p>{{ details.name }}</p>
          <p>{{ details.population }}</p>
          <p>{{ details.caseNew }}</p>
        </base-card>
      </div>
      <div class="basis-1/2 m-5">
        <base-card>
          <p>{{ result }}</p>
          <p>{{ details.name }}</p>
          <p>{{ details.population }}</p>
          <p>{{ details.caseNew }}</p>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
export default {
  setup() {
    const result = ref(null);

    const details = reactive({
      name: '',
      population: '',
      caseNew: '',
      caseActive: '',
      caseRecovered: '',
      deathTotal: '',
      testsTotal: '',
    });

    function populateDetails(data) {
      details.name = data.response[0].country;
      details.population = data.response[0].population;
      details.caseNew = data.response[0].cases[0];
      console.log(details.caseNew);
    }

    onMounted(() => {
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params: { country: 'Philippines' },
        headers: {
          'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          result.value = response.data;
          console.log(result.value);

          populateDetails(result.value);
        })
        .catch(function (error) {
          console.error(error);
        });
    });

    return { details, result, populateDetails };
  },
};
</script>

