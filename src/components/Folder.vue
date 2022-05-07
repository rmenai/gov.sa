<script setup lang="ts">
defineProps({
  title: { type: String, default: "" },
  big: { type: Boolean, default: false },
});
</script>

<template>
  <button class="group">
    <div
      class="flex h-[49px] w-[80px] flex-col items-center justify-center gap-2 pt-20 pb-20"
    >
      <img v-if="big" src="/images/folder_big.png" alt="Big folder" />
      <img v-else src="/images/folder_small.png" alt="Small folder" />
      <p
        class="group-hover:(bg-yellow-500 text-black) text-header-sm rounded-md px-1 pt-0 text-sm text-white"
      >
        {{ title }}
      </p>
    </div>
  </button>
</template>
