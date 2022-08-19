import { useAuth } from '@/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  // この middleware が設定されている場合は要ログイン
  const { loginUser } = useAuth()
  if (!loginUser.value && to.path !== '/login') {
    const path = '/login'
    return { path }
  }
})