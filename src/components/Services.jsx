import React from 'react'
import {ClientList} from '../constants/clients.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Services = () => {
  return (
    <section className='h-screen w-screen'>
        <div className='mx-20'> 
            <Swiper
            spaceBetween={10}
            slidesPerView={6}
            centeredSlides={true}
            loop={true}
            autoplay={{delay: 1000,disableOnInteraction: false,
            }}
            pagination={{clickable: true,}}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper">
                {
                    ClientList.map((client) =>(
                        <SwiperSlide
                            key={client.id}
                            className="flex items-center justify-center mt-10"
                        >
                            <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center w-48 h-16 min-w-48 min-h-16">
                                <img
                                    src={client.img}
                                    alt="lazy"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
    )
}
export default Services;