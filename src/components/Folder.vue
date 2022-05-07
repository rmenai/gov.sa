<script setup lang="ts">
defineProps({
  title: { type: String, default: "" },
  big: { type: Boolean, default: false },
});
</script>

<template>
  <button class="group">
    <div
      class="flex h-[50px] w-[80px] flex-col items-center justify-center gap-2 pt-20 pb-20"
    >
      <img
        v-if="big"
        src="/images/folder_big.png"
        alt="Big folder"
        width="80px"
        height="50px"
      />
      <img
        v-else
        src="/images/folder_small.png"
        alt="Small folder"
        width="80px"
        height="50px"
      />
      <p
        class="group-hover:(bg-yellow-500 text-black) text-header-sm rounded-md px-1 pt-0 text-sm text-white"
      >
        {{ title }}
      </p>
    </div>
  </button>
</template>
