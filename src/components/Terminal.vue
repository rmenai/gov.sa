<template>
  <div class="grid-row-2 grid grid-cols-4 gap-x-12 px-8 py-4">
    <Folder
      title="Affaire résolue"
      folder="cases"
      file="solved_cases.exe"
      :big="true"
    />
    <div
      class="disable-scrollbars col-span-3 h-40 overflow-y-auto overflow-x-hidden"
    >
      <ClientOnly>
        <div class="text-header-sm border-b-1 mb-1 border-dashed normal-case">
          Last Login: {{ today }} on llvm992
        </div>
      </ClientOnly>
      <div ref="terminal" class="text-body whitespace-nowrap">
        <div>
          <span>
            encom-sh:<span class="text-cyan-300">{{ currentDir }}</span
            >$
          </span>
          <span id="command" class="opacity-75">{{ input }}</span>
          <span ref="cursor" class="h-full bg-cyan-300">&nbsp;</span>
        </div>
      </div>
    </div>
    <Folder title="Affaire 37324" folder="cases" file="case_37324.exe" />
    <Folder title="Affaire 37325" folder="cases" file="case_37325.exe" />
    <Folder title="?@HPEa&rN8" :disabled="true" />
    <Folder title="Inconnu" />
  </div>
</template>

<script lang="ts">
import terminalData from "~/composables/data/terminal";
import { animate } from "~/composables/animations/cursor";
import { animateExit } from "~/composables/animations/exit";

export default {
  data() {
    return {
      allowed_characters: terminalData.allowed_characters,
      files: terminalData.files,
      currentDir: "~",
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
    this.$refs.cursor.style.opacity = 1;
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
          this.parseCommand(this.input);
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
    parseCommand: function (command: String) {
      const terminal = this.$refs.terminal;
      let output = ">>error: ";

      switch (command) {
        case "ls":
          output = this.listDirectory();
          break;
        case "clear":
          // Delete all children of terminal expect the last one.
          while (terminal.childNodes.length > 1) {
            terminal.removeChild(terminal.firstChild);
          }
          return;
        default:
          if (command.startsWith("cd ")) {
            output = this.changeDirectory(command.slice(3));
          } else if (command.startsWith("run ")) {
            output = this.runFile(command.slice(4));
          } else {
            output = ">>error: Command not found";
          }
      }

      const wrapper = document.createElement("div");

      // Set wrapper html.
      wrapper.innerHTML = `<span>encom-sh:<span class="text-cyan-300">${this.currentDir}</span>$
                           </span><span class="opacity-75"> ${command}</span>
                           <div class="pl-4"> ${output} </div>`;
      terminal.insertBefore(wrapper, terminal.lastChild);

      // Make sure to scroll to the bottom of the terminal.
      terminal.parentElement.scrollTop = terminal.parentElement.scrollHeight;
    },
    listDirectory: function () {
      const directory = [];
      if (this.currentDir === "~") {
        // Get all the file names in the root directory.
        directory.push(...this.files.map((file) => file.name));
      } else {
        // Get all the file names in the current directory.
        const currentDir = this.files.find(
          (file) => file.name === this.currentDir
        );
        if (currentDir) {
          directory.push(...currentDir.files.map((file) => file.name));
        }
      }

      const elements = [];
      for (const file of directory) {
        // Check if it is the first element.
        if (elements.length === directory.length - 1) {
          elements.push(`<div>└─ ${file}</div>`);
        } else {
          elements.push(`<div>├─ ${file}</div>`);
        }
      }

      return elements.join("");
    },
    changeDirectory: function (directory: String) {
      // Strip directory from slash at the end.
      if (directory.slice(-1) === "/") {
        directory = directory.slice(0, -1);
      }

      if (directory === "..") {
        // Go back to the parent directory.
        this.currentDir = "~";
      } else {
        // Check if the directory exists.
        const dir = this.files.find((file) => file.name === directory);
        if (dir && dir.folder) {
          this.currentDir = dir.name;
        } else {
          return ">>error: Not a directory";
        }
      }
      return (
        ">> Changed directory to <span class='text-cyan-300'>" +
        this.currentDir +
        "</span>"
      );
    },
    runFile: function (filename: String) {
      // Check if the file exists.
      const dir =
        this.files.find((file) => file.name === this.currentDir) || this.files;

      let file;
      if (dir.folder) {
        file = dir.files.find((file) => file.name === filename);
      } else {
        file = dir.find((file) => file.name === filename);
      }
      if (file) {
        let route = "";
        switch (file.name) {
          case "unknown.exe":
            route = "/unknown";
            break;
          case "solved_cases.exe":
            route = "https://fr.wikipedia.org/wiki/Tueur_du_Zodiaque";
            break;
          case "case_37324.exe":
            route = "/cases/37324";
            break;
          case "case_37325.exe":
            route = "/cases/37325";
            break;
        }

        // Switch to the route.
        animateExit().finished.then(() => {
          if (route.startsWith("https://")) {
            window.location.href = route;
          } else {
            this.$router.push(route);
          }
        });

        return ">> Route switched";
      }
      return ">>error: File not found";
    },
  },
};
</script>
