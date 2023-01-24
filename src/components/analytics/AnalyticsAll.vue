<template>
  <section
    v-if="isLoaded"
    class="w-full">
    {{ result }}
  </section>
</template>
<script>
import { ref } from 'vue';
import useFetchHistory from '../../composables/fetchHistory.js';

export default {
  setup() {
    const country = ref('all');

    const { result, isLoaded } = useFetchHistory(country.value);

    return { result, isLoaded };
  },
};
</script>

