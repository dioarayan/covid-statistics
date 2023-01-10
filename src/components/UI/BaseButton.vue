<template>
  <el-button
    v-if="!link"
    type="primary">
    <slot></slot>
  </el-button>
  <router-link
    v-else
    :to="to">
    <el-button type="success">
      <slot></slot>
    </el-button>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
    },
    link: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

