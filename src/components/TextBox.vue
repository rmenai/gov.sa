<template>
  <div ref="box" class="border-thick p-1 opacity-0">
    <div class="opacity-0">
      <div class="text-header-md border-thin flex items-center border-b-0 px-1">
        <p class="flex-header-md ml-0 mr-auto">
          <slot name="start">
            README
            <span class="text-cyan-300">.txt</span>
          </slot>
        </p>
        <p class="flex-header-md mr-0 ml-auto pt-1 text-xs text-cyan-300">
          <slot name="end"> end. program </slot>
        </p>
      </div>
      <div class="border-thin text-body">
        <slot name="body"> Hello World </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { animate } from "~/composables/animations/box";
export default {
  props: {
    animationDelay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    animate(this.$refs.box, this.animationDelay);
  },
};
</script>
