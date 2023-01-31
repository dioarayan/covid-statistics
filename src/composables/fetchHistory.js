import { ref, unref } from 'vue';
import axios from 'axios';

export default function useFetchHistory(country, day) {
  const result = ref(null);
  const isLoaded = ref(false);
  const error = ref(null);

  function loadAPI(country) {
    let data = new Array();
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      params: { country: country, day: day },
      headers: {
        'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response) {
          // data.push(response.data.response);
          response.data.response.map((element) => data.push(element));
          isLoaded.value = true;
          console.log(data);
        }
      })
      .catch(function (error) {
        console.error(error);
        error.value = error;
      });
    return data;
  }

  return { result, isLoaded, loadAPI };
}

