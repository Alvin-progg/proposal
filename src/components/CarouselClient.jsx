import React from 'react'
import {ClientList} from '../constants/clients.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay , Navigation } from 'swiper/modules';
const CarouselClient = () => {
  return (
    <div className='max-w-7xl mx-auto overflow-hidden px-8 mt-10 w-full '> 
            <Swiper
                
                rewind={true}
                spaceBetween={10}
                navigation={false}
                slidesPerView="5"
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false , }}
                modules={[Autoplay , Navigation]}
                className="mySwiper"
                >
                {ClientList.map((client) =>(
                    <SwiperSlide
                        key={client.id}
                        className="flex items-center justify-center mt-10 !w-48"
                    >
                        <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center w-48 h-16">
                            <img
                                src={client.img}
                                alt="client logo"
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