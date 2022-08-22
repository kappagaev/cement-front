import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import { NotificationProvider } from './context/NotificationProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import { Home } from './pages/Home/Home'

const queryClient = new QueryClient({})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <CssBaseline />
              <Routes>
                <Route path='/' element={<App />}>
                  <Route path='/' element={<Home />} />
                </Route>

                <Route path='/login' element={<Login />} />
              </Routes>
              <ReactQueryDevtools initialIsOpen />
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </NotificationProvider>
  </React.StrictMode>,
)
