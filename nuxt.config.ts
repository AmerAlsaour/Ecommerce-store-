// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "swiper/swiper-bundle.css",
    "~/assets/css/main.css",
  ],
  app: {
    head: {
      title: "Developer Test Store",
      meta: [
        {
          name: "description",
          content: "A modern e-commerce store built with Nuxt 3 and Bootstrap",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@pinia/nuxt"],
});
