<script setup lang="ts">
import { animate } from "~/composables/animations/route";

const home = ref(null);

onMounted(() => {
  animate(home.value);
});

const currentRoute = () => {
  return useRoute().name;
};
</script>
<template>
  <div ref="home" class="relative flex h-screen flex-col items-center">
    <div id="loading" class="flex h-full items-center opacity-0">
      <div class="border-thick rounded-2xl border-4 px-4 py-2">
        <p class="text-terminator text-5xl">{{ currentRoute() }}</p>
      </div>
    </div>
    <div id="content" class="relative hidden opacity-0">
      <slot />
    </div>
  </div>
</template>
