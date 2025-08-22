import React from "react";
import techStacks from '../constants/techStacks.js'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const CarouselTech = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10 w-full">
      <Swiper
        spaceBetween={10}
        navigation={false}  
        slidesPerView={7}
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
      >
        {techStacks.map((tech) => (
          <SwiperSlide
            key={tech.id}
            className="flex items-center justify-center"
          >
            <div className="  p-4 flex items-center justify-center w-full h-20 flex-col">
              <img
                src={tech.icon}
                alt={`${tech.name || "Client"} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
              <p>{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTech;
