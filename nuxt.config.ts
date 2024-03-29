import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   css: ["vuetify/lib/styles/main.sass"],
   build: {
     transpile: ["vuetify","chart.js"],
   },
   vite: {
     define: {
       "process.env.DEBUG": false,
     },
   },
})
