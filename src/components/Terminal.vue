<template>
  <div class="grid-row-2 grid grid-cols-4 gap-x-12 px-8 py-4">
    <Folder title="Github Stream" :big="true" />
    <div class="col-span-3 overflow-hidden">
      <ClientOnly>
        <div class="text-header-sm border-b-1 mb-2 border-dashed normal-case">
          Last Login: {{ today }} on llvm992
        </div>
      </ClientOnly>
      <div class="text-body whitespace-nowrap">
        <ClientOnly>
          <span>encom-sh:encom_root$ </span>
          <span id="command" class="opacity-75">{{ input }}</span>
        </ClientOnly>
        <span ref="cursor" class="h-full bg-cyan-300">&nbsp;</span>
      </div>
    </div>
    <Folder title="Test Stream" />
    <Folder title="Wikipedia" />
    <Folder title="Bitcoin" />
    <Folder title="Unknown" />
  </div>
</template>

<script lang="ts">
import terminalData from "assets/data/terminal.json";
import { animate } from "~/composables/animations/cursor";

export default {
  data() {
    return {
      allowed_characters: terminalData.allowed_characters,
      input: "",
      animation: null,
    };
  },
  computed: {
    today() {
      const date = new Date(Date.now());
      return new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "medium",
      }).format(date);
    },
  },
  mounted: function () {
    window.addEventListener("keydown", this.handleKeyDown);
    this.animation = animate(this.$refs.cursor);
  },
  unmounted: function () {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown: function (event: KeyboardEvent) {
      this.animation.restart();
      switch (event.key) {
        case "Enter":
          this.input = "";
          break;
        case "Backspace":
          this.input = this.input.slice(0, -1);
          break;
        case "Escape":
          this.input = "";
          break;
        case " ":
          if (this.input.slice(-1) !== " ") {
            this.input += " ";
          }
          break;
        default:
          if (this.allowed_characters.includes(event.key)) {
            this.input += event.key;
          }
      }
    },
  },
};
</script>
