<template>
  <div class="container">
    <div class="h-screen">
      <div class="my-5">
        <p class="text-3xl">My Dashboard</p>
      </div>
      <el-divider />
      <div class="flex flex-row justify-between my-5">
        <p class="float-left">Track First</p>
        <base-button
          link
          :to="'/country'"
          >See All Countries</base-button
        >
      </div>

      <div class="flex flex-row">
        <div class="basis-1/2 m-3">
          <base-card>
            <template #header>
              <div class="card-header mb-4">
                <div class="flex justify-between">
                  <span>{{ details.name }}</span> <base-button>See Details</base-button>
                </div>
              </div>
            </template>
            <div class="flex justify-between">
              <p>Total Population:</p>
              <p>{{ details.population }}</p>
            </div>
            <div class="flex justify-between">
              <p>New Cases:</p>
              <p>{{ details.caseNew }}</p>
            </div>
            <div class="flex justify-between">
              <p>Active Cases:</p>
              <p>{{ details.caseActive }}</p>
            </div>
            <div class="flex justify-between">
              <p>Cases Recovered:</p>
              <p>{{ details.caseRecovered }}</p>
            </div>
            <div class="flex justify-between">
              <p>Total Deaths:</p>
              <p>{{ details.deathTotal }}</p>
            </div>
            <div class="flex justify-between">
              <p>Total Tests:</p>
              <p>{{ details.testsTotal }}</p>
            </div>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
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
      details.caseNew = data.response[0].cases.new;
      details.caseActive = data.response[0].cases.active;
      details.caseRecovered = data.response[0].cases.recovered;
      details.deathTotal = data.response[0].deaths.total;
      details.testsTotal = data.response[0].tests.total;
      // console.log(details.caseNew);
    }

    return { details, result, populateDetails };
  },
};
</script>

