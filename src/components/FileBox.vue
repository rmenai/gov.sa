<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  icon: {
    type: String,
    default: "mdi:file-image-outline",
  },
  title: {
    type: String,
    default: "A photo",
  },
  resource: {
    type: String,
    default: "https://picsum.photos/200/300",
  },
});
</script>

<template>
  <a
    :href="resource"
    target="_blank"
    class="group flex h-64 w-64 flex-col items-center no-underline"
  >
    <Icon
      :icon="icon"
      class="text-[11rem] text-cyan-200 transition-all group-hover:text-[12rem]"
    />
    <div class="w-50 text-center">
      <p
        class="text-header-md text-xl font-black normal-case text-cyan-200 visited:text-cyan-200 hover:text-cyan-200"
      >
        {{ title }}
      </p>
    </div>
  </a>
</template>
