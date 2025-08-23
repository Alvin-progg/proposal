import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Reviews } from "../constants/review";

const CarouselReview = () => {
  return (
    <div className=" mt-10   w-max-7xl  mx-5">
      <Swiper
        spaceBetween={0}
        navigation={false}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[375px]"
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        allowTouchMove={true}
        freeMode={false}
        /**
                  breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
        }} */
      >
        {Reviews.map((review) => (
            <SwiperSlide>
              <div className="flex">
                <img src={review.img} alt="Client" loading="lazy " className="h-[120px] w-[120px]" />
                <div className="flex flex-col">
                  <h2>{review.name}</h2>
                  <h3>{review.occupation}</h3>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselReview;
