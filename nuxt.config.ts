// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/ionic",
    "@nuxtjs/tailwindcss",
    "nuxt-vuefire"
  ],
  ssr: false,
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  vuefire: {
    auth: {
      enabled: true
    },
    config: JSON.parse(process.env.FIREBASE_CONFIG as string)
  }
});
