<template>
  <section>
    <div>
      <h2>Search Country</h2>
      <label for="country">Country: </label>
      <input
        type="text"
        v-model="inputCountry"
        @keyup="searchCountry" />
    </div>
    <h4>Countries Affected</h4>
    <div v-if="!isSearched">
      <ul v-for="country of allCountries">
        <country-item></country-item>
      </ul>
    </div>
    <!-- <div v-else>
      <ul v-for="result of searchedResult">
        <li>{{ result }}</li>
      </ul>
    </div> -->
  </section>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import CountryItem from './CountryItem.vue';

export default {
  components: {
    CountryItem,
  },
  setup() {
    const inputCountry = ref('');
    const searchedResult = ref('');
    const isSearched = ref(false);
    const allCountries = ref(null);

    onMounted(() => {
      isSearched.value = false;
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/countries',
        headers: {
          'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          allCountries.value = response.data.response;
        })
        .catch(function (error) {
          console.error(error);
        });
    });

    function searchCountry() {
      isSearched.value = true;
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/countries',
        params: { search: inputCountry.value ? inputCountry.value : null },
        headers: {
          'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          searchedResult.value = response.data.response;
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    return { inputCountry, searchCountry, searchedResult, isSearched, allCountries };
  },
};
</script>

