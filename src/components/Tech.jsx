import React from "react";
import CarouselTech from "./CarouselTech";

const Tech = () => {
  return (
    <section className="w-full min-h-[611px] mt-8 sm:mt-10 lg:mt-13 bg-bg1-100 overflow-hidden justify-center flex relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="rounded-b-full h-[200px] w-[400px] sm:h-[220px] sm:w-[450px] lg:h-[250px] lg:w-[500px] bg-blue-700 absolute top-0  sm:block"></div>
      
      <div className="z-10 flex flex-col justify-center items-center w-full max-w-6xl">
        <div className="z-10 flex flex-col text-center w-full max-w-4xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold py-3 mb-4 sm:mb-6 leading-tight">
            Our Workplace Technologies
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed px-4">
            Our Workplace Technologies section of the Human Resources Department's website.
          </h3>
          <p className="text-textGray-600 font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-4">
            Our Workplace Technologies Center is focused on working with business leaders to help them maximize their productivity, reduce costs and meet social needs in the 21st century. Our Workplace Technologies Center is focused on working with business leaders to help them maximize their productivity, reduce costs and meet social needs in the 21st century.
          </p>
        </div>
        
        <div className="w-full mb-8 sm:mb-12 lg:mb-16">
          <CarouselTech />
        </div>
        
        <div className="h-[60px] w-[120px] sm:h-[70px] sm:w-[140px] lg:h-[85px] lg:w-[170px] bg-bg2-600 rounded-t-full -mb-16 sm:-mb-20 lg:-mb-26"></div>
      </div>
    </section>
  );
};

export default Tech;