// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["normalize.css/normalize.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/main.scss" as *;',
        },
      },
    },
  },
});
