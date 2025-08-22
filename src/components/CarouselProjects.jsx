import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Projects } from "../constants/project.js";

const CarouselProjects = () => {
  return (
    <div className=" mt-10   w-max-7xl  mx-5">
      <Swiper
        spaceBetween={0}
        navigation={false}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[466px]"
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
        {Projects.map((project) => (
          <SwiperSlide id={project.id} className=" ">
            <img
              src={project.img}
              alt="Project"
              loading="lazy"
              className="h-[364px] w-[364px] rounded-2xl "
            />
            <h2 className="py-3 text-xl font-semibold">{project.title}</h2>
            <p className="text-textGray-600">{project.disc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProjects;
