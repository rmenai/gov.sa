<template>
  <div
    ref="label"
    class="border-thin mr-3 border-l-0 border-r-0 px-1 opacity-0"
  >
    <div class="text-header-sm flex items-center justify-center opacity-0">
      <div class="flex-header-sm ml-0 mr-auto">
        <slot name="start">START</slot>
      </div>
      <div class="flex-header-sm mr-0 ml-auto"><slot name="end">END</slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { animate } from "~/composables/animations/label";
import { ended } from "~/composables/animations/home";
export default {
  props: {
    above: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const steps = this.above ? 225 : -225;
    if (this.$route.path !== "/" || !ended) {
      animate(this.$refs.label, steps);
    } else {
      this.$refs.label.style.opacity = 1;

      // Get box child.
      const child = this.$refs.label.firstChild;
      child.style.opacity = 1;
    }
  },
};
</script>
