<template>
  <el-icon
    :size="size"
    :class="class">
    <slot></slot>
  </el-icon>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
  },
};
</script>

