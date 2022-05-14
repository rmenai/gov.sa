<script setup lang="ts">
import { animate, ended } from "~/composables/animations/home";
import { animate as animateBreathing } from "~/composables/animations/breathing";

const home = ref(null);
const thumbprint = ref(null);

onMounted(() => {
  const route = useRoute();
  if (route.path !== "/" || !ended) {
    animate(home.value);
    animateBreathing(thumbprint.value);
  } else {
    home.value.style.visibility = "visible";
  }
});
</script>
<template>
  <div id="home" ref="home" class="invisible">
    <div class="flex h-screen items-center justify-center">
      <div id="outside" class="border-thick py-2 px-8">
        <div id="inside" class="border-thick z-10 flex py-10">
          <div class="pl-22 mr-10 w-full"><slot /></div>
          <div class="relative pr-6">
            <p class="text-terminator border-thick border-r-0 px-0.5">Encom</p>
            <div class="absolute bottom-0">
              <img
                ref="thumbprint"
                src="/images/thumbprint.png"
                alt="Thumbprint"
                width="59"
                height="69"
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
