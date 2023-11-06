// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
    API_I: process.env.API_I,
    public: {
      apiBase: `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`
    }
  }
})
