import axios, { AxiosRequestConfig } from 'axios'
import { refreshTokens } from '../services/auth'

export const cementApi = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
cementApi.interceptors.request.use((config: AxiosRequestConfig) => {
  // if Authorization header is not set, set it
  config.headers = { ...config.headers }
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  }

  return config
})
cementApi.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !error.request.responseURL.endsWith('api/auth/refresh')
    ) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        return Promise.reject(error)
      }
      const refreshedTokens = await refreshTokens(refreshToken)
      if (!refreshedTokens) {
        return Promise.reject(error)
      }
      localStorage.setItem('accessToken', refreshedTokens.accessToken)
      localStorage.setItem('refreshToken', refreshedTokens.refreshToken)
      originalRequest.headers.Authorization = `Bearer ${refreshedTokens.accessToken}`
      return cementApi(originalRequest)
    }
    return Promise.reject(error)
  },
)
