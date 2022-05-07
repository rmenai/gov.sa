<template>
  <div
    ref="label"
    class="border-thin mr-3 border-l-0 border-r-0 px-1 opacity-0"
  >
    <div class="text-header-sm flex opacity-0">
      <div class="flex-header-sm ml-0 mr-auto">
        <slot name="start">START</slot>
      </div>
      <div class="flex-header-sm mr-0 ml-auto"><slot name="end">END</slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { animate } from "~/composables/animations/label";
export default {
  props: {
    above: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const steps = this.above ? 225 : -225;
    animate(this.$refs.label, steps);
  },
};
</script>
