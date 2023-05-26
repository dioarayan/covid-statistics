import { ref, reactive } from 'vue';
import axios from 'axios';

export default function useFetchHistory(country) {
  const state = reactive({
    loading: true,
    isLoaded: false,
    errorMsg: null,
  });
  const result = ref(null);

  function requestData() {
    state.loading = true;

    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      params: { country: country },
      headers: {
        'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        result.value = response.data.response;
        state.loading = false;
        state.isLoaded = true;
        console.log(result.value);
      })
      .catch(function (error) {
        state.loading = false;
        state.isLoaded = false;
        state.errorMsg = error.message;
      });
  }

  return {
    result,
    state,
    requestData,
  };
}

