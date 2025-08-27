import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import google from '../assets/review/google.png'

// Import your Reviews data
import { Reviews } from "../constants/review";

const CarouselReview = () => {
  return (
    <div className="my-8 sm:my-10 lg:my-12 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center items-center w-full">
      <Swiper
        spaceBetween={2}
        navigation={false}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper h-auto min-h-[360px] sm:min-h-[400px] lg:min-h-[450px] w-full"
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        allowTouchMove={true}
        freeMode={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 2 },
          640: { slidesPerView: 1.5, spaceBetween: 4 },
          768: { slidesPerView: 2, spaceBetween: 6 },
          1024: { slidesPerView: 2.5, spaceBetween: 8 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
      >
        {Reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-full py-1">
            <div className="bg-bg1-100 border border-bg1-200 rounded-xl shadow-md p-4 sm:p-6 h-full flex flex-col max-w-md mx-auto">
              <div className="flex items-center mb-3 sm:mb-4">
                <img
                  src={review.img}
                  alt={`${review.name} - Client`}
                  loading="lazy"
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-base sm:text-lg lg:text-xl text-gray-800">{review.name}</h2>
                  <h3 className="text-xs sm:text-sm lg:text-base text-gray-600">{review.occupation}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm sm:text-base lg:text-base mb-3 sm:mb-4 flex-grow leading-relaxed">{review.disc}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <img src={google} alt="Google icon" loading="lazy" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 24 24">
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