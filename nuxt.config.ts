// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss", "nuxt-vuefire", "dayjs-nuxt"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  ssr: false,
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG),
  },
});
