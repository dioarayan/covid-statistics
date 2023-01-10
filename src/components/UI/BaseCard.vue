<template>
  <el-card
    class="box-card rounded-lg"
    :shadow="shadow">
    <div class="card-header">
      <slot name="header" />
    </div>

    <section>
      <slot> </slot>
    </section>
  </el-card>
</template>

<script>
export default {
  props: {
    shadow: {
      type: String,
      required: false,
    },
  },
};
</script>

