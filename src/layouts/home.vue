<script setup lang="ts">
import { animate } from "~/composables/animations/home";
import { animate as animateBreathing } from "~/composables/animations/breathing";
useHead({
  titleTemplate: "Encom - %s",
  htmlAttrs: { lang: "en" },
});
</script>
<template>
  <div ref="home" class="invisible">
    <div class="flex h-screen items-center justify-center">
      <div id="outside" class="border-thick py-2 px-6">
        <div id="inside" class="border-thick z-10 flex py-6">
          <div class="mr-10 w-full pl-14"><slot /></div>
          <div class="relative pr-4">
            <p class="text-terminator border-thick border-r-0 px-0.5">Encom</p>
            <div class="absolute bottom-0">
              <img
                ref="thumbprint"
                src="/images/thumbprint.png"
                alt="Thumbprint"
                width="60px"
                height="70px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="animation-outside-top" class="absolute bg-black"></div>
    <div id="animation-outside-bottom" class="absolute bg-black"></div>
    <div id="animation-inside-top" class="absolute bg-black"></div>
    <div id="animation-inside-bottom" class="absolute bg-black"></div>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    animate(this.$refs.home);
    animateBreathing(this.$refs.thumbprint);
  },
};
</script>
