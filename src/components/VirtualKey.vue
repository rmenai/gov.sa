<template>
  <button
    v-if="!spacebar"
    :id="`key-${code}`"
    ref="key"
    class="text-header-md group flex h-[30px] w-[34px] items-center justify-center rounded-lg font-normal text-cyan-300"
    :class="padding"
    tabindex="-1"
    @click="press"
  >
    {{ name }}
  </button>
  <button
    v-else
    :id="`key-${code}`"
    ref="key"
    class="border-thick border-1 h-[18px] w-8/12"
    tabindex="-1"
    @click="press"
  ></button>
</template>

<script lang="ts">
import { animate } from "~/composables/animations/button";

export default {
  props: {
    name: { type: String, default: "" },
    keyCode: { type: String, default: " " },
    code: { type: Number, default: 32 },
    padding: { type: String, default: "pl-0" },
    spacebar: { type: Boolean, default: false },
  },
  methods: {
    press(event) {
      event.target.blur();
      animate(this.$refs.key);

      if (event.isTrusted) {
        window.dispatchEvent(
          new KeyboardEvent("keydown", { key: this.keyCode })
        );
      }
    },
  },
};
</script>
