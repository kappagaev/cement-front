import axios from 'axios'
import { cementApi } from '../api/cementApi'
import { Tokens } from '../context/AuthProvider'

export const refreshTokens = async (refreshToken: string) => {
  try {
    const { data } = await axios.post(
      'http://localhost:3333/api/auth/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    )
    if (data.status === 401) {
      return null
    }
    return data as Tokens
  } catch (error) {
    return null
  }
}

export const authorize = async (email: string, password: string) => {
  try {
    const { data: tokens } = await cementApi.post('/auth/local/signin', { email, password })
    return tokens
  } catch (error) {
    return null
  }
}
