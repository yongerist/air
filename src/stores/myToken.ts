import { defineStore } from 'pinia'

export const useTokenStore = defineStore('myToken', () => {
  const token = ref(window.localStorage.getItem('token') || '')
  function saveToken(newToken: string) {
    token.value = newToken
    window.localStorage.setItem('token', newToken)
  }
  return { token, saveToken }
})
