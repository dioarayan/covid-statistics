<template>
  <li>
    {{ countryName }}
  </li>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['country'],

  setup(props) {
    const countryName = props.country;

    return { countryName };
  },
};
</script>

