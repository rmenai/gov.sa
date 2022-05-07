import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt", "nuxt-windicss"],
  modules: ["@nuxtjs/color-mode"],
  build: {
    transpile: ["three"],
  },

  css: ["assets/css/base.scss"],
  colorMode: { classSuffix: "" },
});
