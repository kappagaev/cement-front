import React from 'react'
import './Slide.scss'
import { Slide } from '../../services/slider'
import { Button, Card, Paper } from '@mui/material'

interface Props {
  slide: Slide
}
export const SlideCard = ({ slide }: Props) => {
  return (
    <div className='slide'>
      <img className='slide__image' src={slide.image_filepath} />
      <div className='slide__caption'>
        <h2 className='slide__title'>{slide.title}</h2>
        <p className='slide__subtitle'>{slide.subtitle}</p>
      </div>
    </div>
  )
}
