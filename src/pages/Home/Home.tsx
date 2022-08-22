import { Button, Card, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'
import { useAuth } from '../../context/AuthProvider'
import { useNotification } from '../../context/NotificationProvider'

export const Home = () => {
  const slides = [
    {
      id: '1',
      image_filepath: 'https://via.placeholder.com/1200x400',
      title: 'Привіт!',
      subtitle: 'Вітаємо в нашому магазині!',
    },
    {
      id: '2',
      image_filepath: 'https://via.placeholder.com/1200x400',
      title: 'Привіт 3!',
      subtitle: 'Вітаємо в нашому магазині 2!',
    },
  ]
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card>
            <Carousel slides={slides} />
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>test</Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Link to={'/login'}>login</Link>
        </Grid>
      </Grid>
    </Container>
  )
}
