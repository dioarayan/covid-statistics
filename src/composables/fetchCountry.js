import { ref } from 'vue';
import axios from 'axios';

export default function useFetchCountryData() {
  const allResult = ref(null);
  const isLoaded = ref(false);

  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    params: { country: 'philippines' },
    headers: {
      'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response) {
        allResult.value = response.data.response[0];
        isLoaded.value = true;
        // console.log(length.value);
        console.log(allResult.value);
      }
    })
    .catch(function (error) {
      console.error(error);
    });

  // function fetchData(obj) {
  //   console.log(obj);
  //   const newArray = [];
  //   newArray[0] = obj.cases.total;
  //   newArray[1] = obj.deaths.total;
  //   newArray[2] = obj.tests.total;
  //   console.log(newArray);
  //   return newArray;
  // }

  return { allResult, isLoaded };
}

