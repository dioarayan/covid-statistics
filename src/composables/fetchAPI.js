import { ref } from 'vue';
import axios from 'axios';

export default function useFetchAPIData(endpoint, x, y) {
  const allResult = ref(null);
  const loadingState = ref(x);
  const loadedState = ref(y);
  const errorState = ref(null);

  function loadAPI() {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/' + endpoint,
      headers: {
        'X-RapidAPI-Key': process.env.VITE_API_KEY,
        'X-RapidAPI-Host': process.env.VITE_API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response) {
          allResult.value = response.data.response;
          loadedState.value = true;
          loadingState.value = false;
          // console.log('isLoading' + loadingState.value);
          // console.log(isLoaded.value);
        }
      })
      .catch(function (error) {
        loadedState.value = false;
        loadingState.value = false;
        // console.log(loadedState.value);
        console.error(error);
        errorState.value = error;
      });
  }

  return { allResult, loadedState, loadingState, errorState, loadAPI };
}

