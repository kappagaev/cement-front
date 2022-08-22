import { Box, Button, Card } from '@mui/material'
import React from 'react'
import './MyFinances.scss'
export const MyFinances = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <div className='finances'>
          <div className='finances__title'>Мої фінанси</div>
          <div className='finances__title'>Доступна сума до відвантаженя</div>
          <div className='finances__sum'>1 394 333</div>
          <div className='finances__last-income'>
            Останні надходження: <br /> 11-06-21: <br /> + 150 403 грн згідно рахунку № 433214324425{' '}
            <br /> + 150 705 грн згідно рахунку № 443414324466
          </div>
          <div className='finances__navigation'>
            <div className='finances__navigation-button'>
              <Button variant='contained' color='secondary'>
                1 протермінований рахунок
              </Button>
            </div>
            <div className='finances__navigation-button'>
              <Button variant='contained' color='primary'>
                Детальніше
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Card>
  )
}
