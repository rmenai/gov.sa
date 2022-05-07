import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  theme: {
    fontSize: {
      xs: "6pt",
      sm: ["7.5pt", "11pt"],
      base: ["8pt", "12pt"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
    },
    extend: {
      fontFamily: {
        terminator: ["Terminator"],
        inconsolata: ["Inconsolata", "sans-serif"],
      },
    },
  },
  shortcuts: {
    "border-thick": "rounded-md border-2 border-cyan-300",
    "border-thin": "border-1 border-cyan-400/25",
    "text-terminator": "font-terminator text-sm text-cyan-300",
    "text-inconsolata": "font-inconsolata text-sm text-white",
    "text-header-sm": "text-xs font-light uppercase leading-tight",
    "text-header-md": "text-base uppercase font-semibold",
    "flex-header-sm": "flex items-center justify-center gap-1",
    "flex-header-md": "flex items-center justify-center gap-2",
    "text-body": "text-sm text-bold tracking-wide",
  },
});
