import React from 'react'
import SVG from 'react-inlinesvg'
import closeButton from '../assets/svgs/plus-lg.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../assets/css/imageSlider.css'
import { Pagination } from 'swiper/modules'

export default function ImageSlider ({ images, onClose }) {
  return (
    <div className='image-slider'>
      <div className='image-slider-close' onClick={onClose}>
        <SVG className='close-icon' src={closeButton} />
      </div>
      <div className='slider-container'>
        <Swiper
          loop={true}
          grabCursor={true}
          navigation={false}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={2}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt='' className='image-slide' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
