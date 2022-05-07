<template>
  <div ref="container" class="h-40 w-full">
    <canvas />
  </div>
</template>

<script lang="ts">
import { createWebGLTest } from "~/composables/animations/webgl/test";

export default {
  mounted: function () {
    const { animate } = createWebGLTest(this.$refs.container);
    setTimeout(function () {
      animate();
    }, 800);
  },
};
</script>
