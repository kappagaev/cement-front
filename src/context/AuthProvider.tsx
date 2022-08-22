import jwtDecode from 'jwt-decode'
import React, { useEffect, useMemo } from 'react'
import { refreshTokens, authorize } from '../services/auth'

export interface Tokens {
  accessToken: string
  refreshToken: string
}

interface AuthContextData {
  singin: (email: string, password: string) => Promise<boolean>
  logout(): void

  logged: boolean
  data: any
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

export const useAuth = () => React.useContext(AuthContext)

interface Props {
  children: React.ReactNode | React.ReactNode[]
}
export const AuthProvider = ({ children }: Props) => {
  const [logged, setLogged] = React.useState(localStorage.getItem('accessToken') !== null)
  const [data, setData] = React.useState({})
  function logout() {
    setData({})
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    setLogged(false)
  }

  async function singin(email: string, password: string) {
    try {
      const { accessToken, refreshToken } = await authorize(email, password)
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      setData(jwtDecode(accessToken))
      setLogged(true)
      return true
    } catch {
      setLogged(false)
      return false
    }
  }
  return (
    <AuthContext.Provider
      value={{
        singin,
        logout,
        logged,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
