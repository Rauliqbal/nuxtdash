import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families :{
      "Poppins": true
    }
  }
});