export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie('auth')
    if(!cookie.value) return abortNavigation()
    if(cookie.value && (to.path.startsWith('/auth'))) return navigateTo('/dashboard')

})
