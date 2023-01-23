<template>
  <!-- <div class="w-1/2 h-1/2 m-auto py-40"> -->
  <div class="flex flex-col justify-center items-center h-96">
    <base-icon class="p-10 opacity-50"><slot name="icon"></slot></base-icon>

    <p class="font-light italic text-slate-400/50 text-center">
      <slot name="message"></slot>
    </p>
  </div>
  <!-- </div> -->
</template>

<!-- <script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
  },
};
</script> -->

