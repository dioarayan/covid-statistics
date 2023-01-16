<template>
  <div>
    <el-scrollbar height="400px">
      <p
        class="list"
        v-for="country of allCountries">
        {{ country }}
      </p>
    </el-scrollbar>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const allCountries = ref(null);

    // onMounted(() => {
    //   const options = {
    //     method: 'GET',
    //     url: 'https://covid-193.p.rapidapi.com/countries',
    //     headers: {
    //       'X-RapidAPI-Key': '57b8ce9aedmsh22fe9b1780b95f8p1a76d1jsn23bc3457d222',
    //       'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    //     },
    //   };

    //   axios
    //     .request(options)
    //     .then(function (response) {
    //       allCountries.value = response.data.response;
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // });

    return { allCountries };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>

