<template>
  <div class="w-1/2 h-1/2 m-auto py-40">
    <base-icon><slot></slot></base-icon>
    <p class="font-light italic text-slate-400/50 text-center">
      <slot name="message"></slot>
    </p>
  </div>
</template>

<script>
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
</script>

