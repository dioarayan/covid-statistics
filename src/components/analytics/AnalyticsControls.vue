<template>
  <section class="flex justify-center items-center">
    <el-form>
      <el-select
        v-model="country"
        class="m-2"
        filterable
        placeholder="Select Country">
        <el-option
          v-for="country in countries"
          :value="country"
          >{{ country }}</el-option
        >
      </el-select>
      <el-date-picker
        v-model="datePicked"
        type="date"
        placeholder="Pick a day" />
      <!-- <base-button @click="goButton"> Go! </base-button> -->
    </el-form>
  </section>
</template>

<script>
import useFetchCountry from '../../composables/fetchCountry.js';

export default {
  setup() {
    const [countries] = useFetchCountry();

    return { countries };
  },
};
</script>

