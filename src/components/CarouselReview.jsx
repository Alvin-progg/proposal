import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import google from '../assets/review/google.png'

// Import your Reviews data
import { Reviews } from "../constants/review";

const CarouselReview = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-5">
      <Swiper
        spaceBetween={20}
        navigation={false}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[450px]"
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        allowTouchMove={true}
        freeMode={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
        }}
      >
        {Reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-full ">
            <div className="bg-bg1-100 border border-bg1-200 rounded-lg shadow-lg p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <img
                  src={review.img}
                  alt={`${review.name} - Client`}
                  loading="lazy"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-lg text-gray-800">{review.name}</h2>
                  <h3 className="text-sm text-gray-600">{review.occupation}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 flex-grow leading-relaxed">{review.disc}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <img src={google} alt="google icon" loading="lazy" className="h-[40px] w-[40px]" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselReview;