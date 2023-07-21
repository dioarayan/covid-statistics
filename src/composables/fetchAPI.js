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
        'X-RapidAPI-Key': '82e14264c4msh77630a16a21c09fp11873fjsncd010265c8e3',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
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

