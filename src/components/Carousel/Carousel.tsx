import React, { ReactElement, useRef } from 'react'
import { Slide } from '../../services/slider'
import './Carousel.scss'
import { SlideCard } from './SlideCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Card } from '@mui/material'

interface Props {
  slides: Slide[]
}
export const Carousel = ({ slides }: Props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    if (currentSlide + 1 == slides.length) {
      setCurrentSlide(0)
      return
    }
    setCurrentSlide(currentSlide + 1)
  }
  const prevSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(slides.length - 1)
      return
    }
    setCurrentSlide(currentSlide - 1)
  }

  return (
    <Card sx={{ height: '100%' }}>
      <div className='carousel'>
        <div className='carousel__controls'>
          <div className='carousel__arrow carousel__arrow--left' onClick={prevSlide}>
            <ArrowBackIosIcon className='carousel__arrow-icon' />
          </div>
          <div className='carousel__arrow carousel__arrow--right' onClick={nextSlide}>
            <ArrowForwardIosIcon className='carousel__arrow-icon' />
          </div>
        </div>
        {slides.map((slide, index) => {
          return (
            <div
              className={`carousel__item  ${
                index === currentSlide ? 'carousel__item--active' : ''
              }`}
              key={index}
            >
              <SlideCard slide={slide} />
            </div>
          )
        })}
      </div>
    </Card>
  )
}
