
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();
  console.log(user)
  if (user && to.fullPath === '/') return navigateTo("/home");
  if (!user && to.fullPath !== '/') return navigateTo('/');
})