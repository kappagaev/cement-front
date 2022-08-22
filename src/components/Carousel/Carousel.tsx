import React from 'react'
import { Slide } from '../../services/slider'
import './Carousel.scss'
import { SlideCard } from './SlideCard'

interface Props {
  slides: Slide[]
}
export const Carousel = ({ slides }: Props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  return (
    <div className='carousel'>
      {slides.map((slide, index) => {
        return (
          <div
            className={`carousel__item ${index === 1 ? 'carousel__item--active' : ''}`}
            key={index}
          >
            <SlideCard slide={slide} />
          </div>
        )
      })}
    </div>
  )
}
