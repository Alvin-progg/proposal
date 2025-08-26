import React from "react";
import CarouselClient from "./CarouselClient";
import AppIcon from "../assets/icons/app.png";
import ContentIcon from "../assets/icons/content.png";
import ShopIcon from "../assets/icons/online-shop.png";
import UX from "../assets/icons/ux-design.png";

const Services = () => {
  return (
    <section className="w-full h-[831px] ">
      <CarouselClient />

      <div className="  items-center justify-center mt-20 ">
        <div className="p-5 flex-col items-center justify-center text-wrap gap-10 px-3 lg:w-[60vw] sm:mx-auto  ">
          <h2 className=" justify-center-safe flex mb-5 font-bold text-2xl py-4 sm:text-4xl ">
            Service We Provide
          </h2>
          <h3 className="justify-center-safe flex font-light  text-center  mx-auto w-[375px] sm:w-[540px] lg:w-[641px] max-sm:text-sm max-sm:w-[320px]  ">
            Blueket overcomes challenges, achieves results, and adds value to
            our clients and partners.Take a look at some of our clients' success
            stories.
          </h3>
        </div>
      </div>

      <div className=" grid grid-1  md:grid-cols-2 md:grid-rows-2  sm:grid-rows-2 mx-auto lg:flex sm:grid-cols-2 max-sm:flex-col justify-center items-center lg:m-10 gap-14 max-md:mt-14 sm:mx-15 md:mx-30">
        <div className="h-[286px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-serv-1 ">
          <div className="flex items-center justify-center itemce h-[120px] rounded-4xl mx-auto -mt-10  bg-bg w-[120px] drop-shadow-2xl ">
            <img
              src={AppIcon}
              alt="App dev"
              loading="lazy"
              className="h-[64px] w-[64px]"
            />
          </div>
          <div className="text-center gap-10 p-2 py-10 justify-center flex-col items-center ">
            <h2 className="font-semibold text-xl w-[156px] mx-auto mb-4">
              App Development
            </h2>
            <p className="font-light  ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="h-[286px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-serv-2 ">
          <div className="flex items-center justify-center itemce h-[120px] rounded-3xl mx-auto -mt-10  bg-bg w-[120px] drop-shadow-2xl">
            <img
              src={UX}
              alt="App UI"
              loading="lazy"
              className="h-[64px] w-[64px]"
            />
          </div>
          <div className="text-center gap-5  p-2 py-10 justify-center flex-col items-center">
            <h2 className="font-semibold text-xl  w-[156px] mx-auto mb-4">
              Web Development
            </h2>
            <p className="font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="h-[286px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-serv-3 ">
          <div className="flex items-center justify-center itemce h-[120px] rounded-3xl mx-auto -mt-10  bg-bg w-[120px] drop-shadow-2xl ">
            <img
              src={ContentIcon}
              alt="content"
              loading="lazy"
              className="h-[64px] w-[64px]"
            />
          </div>
          <div className="text-center gap-5  p-2 py-10 justify-center flex-col items-center">
            <h2 className="font-semibold text-xl  w-[156px] mx-auto mb-4">
              Content Marketing
            </h2>
            <p className="font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="h-[286px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-serv-4 ">
          <div className="flex items-center justify-center itemce h-[120px] rounded-3xl mx-auto -mt-10  bg-bg w-[120px] drop-shadow-2xl">
            <img
              src={ShopIcon}
              alt="Shop"
              loading="lazy"
              className="h-[64px] w-[64px]"
            />
          </div>
          <div className="text-center gap-5 flex-col mt-5 p-2 py-5 justify-center items-center">
            <h2 className="font-semibold text-xl  w-[156px] mx-auto text-text mb-4">
              eCommerce Development
            </h2>
            <p className="font-light text-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
