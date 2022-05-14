<script setup lang="ts">
import { emulateCommand } from "~/composables/animations/typing";

const props = defineProps({
  title: { type: String, default: "" },
  big: { type: Boolean, default: false },
  folder: { type: String, default: ".." },
  file: { type: String, default: "unknown.exe" },
  disabled: { type: Boolean, default: false },
});

function clicked() {
  emulateCommand([..."cd", " ", ...props.folder]).finished.then(() => {
    emulateCommand([..."ls"]).finished.then(() => {
      emulateCommand([..."run", " ", ...props.file]);
    });
  });
}
</script>

<template>
  <button :disabled="disabled" class="group" @click="clicked">
    <div
      class="flex h-[50px] w-[80px] flex-col items-center justify-center gap-2 pt-20 pb-20"
      :class="[disabled ? 'opacity-50' : 'opacity-100']"
    >
      <img
        v-if="big"
        src="/images/folder_big.png"
        alt="Big folder"
        width="95"
        height="63"
      />
      <img
        v-else
        src="/images/folder_small.png"
        alt="Small folder"
        width="80"
        height="49"
      />
      <p
        class="text-header-sm rounded-md px-1 pt-0 text-sm text-white"
        :class="[disabled ? '' : 'group-hover:(bg-yellow-500 text-black)']"
      >
        {{ title }}
      </p>
    </div>
  </button>
</template>
