import { Button, Card, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'
import { Table } from '../../components/Table/Table'
import { useAuth } from '../../context/AuthProvider'
import { useNotification } from '../../context/NotificationProvider'
import { MyFinances } from './MyFinances'

export const Home = () => {
  const slides = [
    {
      id: '1',
      image_filepath:
        'https://i.picsum.photos/id/10/1200/400.jpg?hmac=CjKFa3jcR4LYZhh4V4U-Gy19zJwQ6HJuUonOX99v7Vw',
      title: 'Привіт!',
      subtitle: 'Вітаємо в нашому магазині!',
    },
    {
      id: '2',
      image_filepath:
        'https://i.picsum.photos/id/13/1200/400.jpg?hmac=NiK0O1KBLHxizG7OyBw5ncjFOmQZMUiULdo3rnvWSro',
      title: 'Привіт 3!',
      subtitle: 'Вітаємо в нашому магазині 2!',
    },
    {
      id: '3',
      image_filepath:
        'https://i.picsum.photos/id/11/1200/400.jpg?hmac=ccJLfrMtNOqRf1O75nz6R1DBMS-fpW4ZFJAVXPXJHTo',
      title: 'Привіт 3!',
      subtitle: 'Вітаємо в нашому магазині 2!',
    },
    {
      id: '4',
      image_filepath:
        'https://i.picsum.photos/id/12/1200/400.jpg?hmac=ggF2Emki9BMSJwWBi1A7Whlg0Ap74jVFKDM62pml1gE',
      title: 'Привіт 3!',
      subtitle: 'Вітаємо в нашому магазині 2!',
    },
    {
      id: '5',
      image_filepath:
        'https://i.picsum.photos/id/190/1200/400.jpg?hmac=kWdF3Ti1E0dyO7YanHSovZywSpAZZIl492NgTFE3URE',
      title: 'Привіт 3!',
      subtitle: 'Вітаємо в нашому магазині 2!',
    },
  ]
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Carousel slides={slides} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MyFinances />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant='h4' sx={{ marginBottom: '20px' }}>
              Мої замовлення
            </Typography>
            <Table
              columns={[
                'Номер замовлення',
                'Дата замовлення',
                'Сума замовлення',
                'Статус замовлення',
                'Деталі',
              ]}
              rows={[
                [
                  '1',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
                [
                  '2',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
                [
                  '3',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
                [
                  '4',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
                [
                  '5',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
                [
                  '6',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
                [
                  '7',
                  '2021-10-10',
                  '1000',
                  'Оплачено',
                  <Button variant='contained' color='primary'>
                    Деталі
                  </Button>,
                ],
              ]}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Link to={'/login'}>login</Link>
        </Grid>
      </Grid>
    </Container>
  )
}
