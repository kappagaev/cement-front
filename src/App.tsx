import { Button, Container, Toolbar, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { NotificationsOverlay } from './components/NotificationsOverlay'
import { useAuth } from './context/AuthProvider'
import { useNotification } from './context/NotificationProvider'
import './App.scss'
export const App = () => {
  const { addNotification } = useNotification()
  const { logged, logout } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!logged) {
      navigate('/login')
    }
  }, [logged])
  return (
    <>
      <NotificationsOverlay />
      <Header />
      <Toolbar
        sx={{
          margin: '16px',
          ['@media (max-width:900px)']: {
            margin: '12px',
          },
        }}
      />
      <Outlet />
    </>
  )
}

export default App
