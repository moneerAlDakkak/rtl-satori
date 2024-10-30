// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo"],
  ogImage: {
    fonts: [
      "Cairo:400",
      "Cairo:700",
      {
        name: "Baysan",
        weight: 400,
        path: "/fonts/Baysan/regular.woff",
      },
      {
        name: "Baysan",
        weight: 800,
        path: "/fonts/Baysan/bold.woff",
      },
    ],
  },
});
