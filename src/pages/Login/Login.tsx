import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationsOverlay } from '../../components/NotificationsOverlay'
import { useAuth } from '../../context/AuthProvider'
import { useLoginForm } from '../../hooks/form/useLoginForm'

export const Login = () => {
  const { handleSubmit, handleChange, values } = useLoginForm()
  const { logged, logout } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (logged) {
      navigate('/')
    }
  }, [logged])
  return (
    <Container maxWidth='md'>
      <NotificationsOverlay />

      <Grid container justifyContent={'center'} spacing={2}>
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Paper
            elevation={2}
            sx={{
              padding: '24px',
              borderRadius: '20px',
              paddingTop: '60px',
              marginTop: '80px',
              paddingBottom: '30px',
            }}
          >
            <Box sx={{ marginBottom: '1.5rem' }}>
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ marginBottom: '1.5rem' }}>
                  <Typography>Вітаємо! Будь ласка, введіть ваші дані авторизації.</Typography>
                </FormControl>
                <FormControl sx={{ marginBottom: '1.5rem' }} fullWidth={true}>
                  <TextField
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    label='Пошта'
                    variant='outlined'
                    type='email'
                  />
                </FormControl>
                <FormControl sx={{ marginBottom: '1.5rem' }} fullWidth={true}>
                  <TextField
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    variant='outlined'
                    label='Пароль'
                    type='password'
                  />
                </FormControl>
                <FormControl sx={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                  <Button type='submit' variant='contained' color='primary'>
                    Увійти
                  </Button>
                </FormControl>
              </form>
            </Box>

            <Divider />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
