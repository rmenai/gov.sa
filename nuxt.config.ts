import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  buildModules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@intlify/nuxt3",
    "nuxt-windicss",
  ],
  modules: ["@nuxtjs/color-mode"],
  build: { transpile: ["three"] },
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
    },
  },

  css: ["assets/css/base.scss"],
  // @ts-ignore
  colorMode: { classSuffix: "" },
  intlify: {
    localeDir: "locales",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      globalInjection: true,
    },
  },
});
