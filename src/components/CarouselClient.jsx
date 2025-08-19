import React from 'react'
import {ClientList} from '../constants/clients.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const CarouselClient = () => {
  return (
    <div className='max-w-7xl mx-auto px-8 mt-10 w-full'>
      <Swiper
        spaceBetween={10}
        navigation={false}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{ 
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-32"
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        allowTouchMove={true}
        freeMode={false}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
        }}
      >
        {ClientList.map((client) => (
          <SwiperSlide
            key={client.id}
            className="flex items-center justify-center"
          >
            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center w-full h-20 bg-white hover:shadow-md transition-shadow duration-300">
              <img
                src={client.img}
                alt={`${client.name || 'Client'} logo`}
                className="max-w-full max-h-full object-contain"
                loading='lazy'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselClient;