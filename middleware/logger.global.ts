export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Route middleware', to, from)
})
