import { ref } from 'vue';
import axios from 'axios';

export default function useFetchData() {
  const allResult = ref(null);
  const isLoaded = ref(false);
  const length = ref(null);

  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response) {
        allResult.value = response.data.response;
        isLoaded.value = true;
        length.value = allResult.value.length;
        // console.log(length.value);
        console.log(allResult.value[0]);
      }
    })
    .catch(function (error) {
      console.error(error);
    });

  return { allResult, isLoaded, length };
}

