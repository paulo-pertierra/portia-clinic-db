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
    config: {"apiKey":"AIzaSyA9q_NY1_VUe8uzDuleU__vKq-zB0lRK8E","authDomain":"fernandez-clinic-dev.firebaseapp.com","projectId": "fernandez-clinic-dev","storageBucket":"fernandez-clinic-dev.appspot.com","messagingSenderId":"920081821723","appId":"1:920081821723:web:db56daab5a10010f86c8be","measurementId":"G-79MET1JWVH"},
  },
});
