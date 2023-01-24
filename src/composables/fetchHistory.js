import { ref } from 'vue';
import axios from 'axios';

export default function useFetchHistory(country, date) {
  const result = ref(null);
  const isLoaded = ref(false);
  const newDate = new Date(date.toISOString().split('T')[0]);

  // const parsedDate = ref(date.toJSON());

  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/history',
    params: { country: country, day: newDate },
    headers: {
      'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response) {
        result.value = response.data.response;
        isLoaded.value = true;
        // console.log(length.value);
        console.log(result.value);
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

  return { result, isLoaded };
}
