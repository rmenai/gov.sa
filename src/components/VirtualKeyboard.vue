<template>
  <div ref="keyboard" class="flex h-full w-full flex-wrap pl-6 pt-4 opacity-0">
    <VirtualKey
      v-for="(key, i) in keyboardKeys"
      :key="key"
      :name="key.name"
      :key-code="key.key"
      :code="key.code"
      :padding="
        i === 37 ? 'ml-2' : i === 13 ? 'ml-4' : i === 25 ? 'ml-8' : 'ml-0'
      "
    />
  </div>
  <div
    ref="spacebar"
    class="mb-6 flex w-full items-center justify-center opacity-0"
  >
    <VirtualKey :spacebar="true" />
  </div>
</template>

<script lang="ts">
import keyboardData from "~/composables/data/keyboard";
import { animate } from "~/composables/animations/keyboard";
import { ended } from "~/composables/animations/home";

export default {
  data() {
    return {
      keyboardKeys: keyboardData,
    };
  },
  mounted: function () {
    window.addEventListener("keydown", this.handleKeyDown);
    if (this.$route.path !== "/" || !ended) {
      animate(this.$refs.keyboard, this.$refs.spacebar);
    } else {
      this.$refs.keyboard.style.opacity = 1;
      this.$refs.spacebar.style.opacity = 1;
    }
  },
  unmounted: function () {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown: function (event: KeyboardEvent) {
      if (!event.isTrusted && !(event.code === "allow")) {
        return;
      }

      const key = this.keyboardKeys.find((key) => key.key === event.key);
      if (key) {
        const el = document.getElementById(`key-${key.code}`);
        if (el) {
          el.click();
        }

        if (key.key === "Shift") {
          const el = document.getElementById("key-17");
          el.click();
        }
      } else if (event.key === " ") {
        const el = document.getElementById("key-32");
        el.click();
      }
    },
  },
};
</script>
