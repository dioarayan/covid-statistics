import { ref } from 'vue';
import axios from 'axios';

export default function useFetchCountry() {
  const countries = ref(null);
  //   const countriesLoaded = ref(false);

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
      if (response) {
        countries.value = response.data.response;
        console.log(countries.value);
      }
    })
    .catch(function (error) {
      console.error(error);
    });

  return [countries];
}

