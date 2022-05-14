<template>
  <div ref="box" class="border-thick p-1 opacity-0">
    <div class="opacity-0">
      <div
        class="text-header-md border-thin flex items-center justify-center border-b-0 px-1"
      >
        <div class="flex-header-md ml-0 mr-auto">
          <slot name="start">
            README
            <span class="text-cyan-300">.txt</span>
          </slot>
        </div>
        <div class="flex-header-md mr-0 ml-auto text-xs text-cyan-300">
          <slot name="end"> end. program </slot>
        </div>
      </div>
      <div class="border-thin text-body">
        <slot name="body"> Hello World </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { animate } from "~/composables/animations/box";
import { ended } from "~/composables/animations/home";

export default {
  props: {
    animationDelay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    if (this.$route.path !== "/" || !ended) {
      animate(this.$refs.box, this.animationDelay);
    } else {
      this.$refs.box.style.opacity = 1;

      // Get box child.
      const child = this.$refs.box.firstChild;
      child.style.opacity = 1;
    }
  },
};
</script>
