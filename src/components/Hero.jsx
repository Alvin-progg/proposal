import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { CgArrowTopRight } from "react-icons/cg";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative flex justify-center items-center bg-[url(./assets/slider-2.jpg)] bg-cover bg-center">
      
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="flex flex-col justify-center items-start w-full max-w-7xl mx-auto relative z-10 text-text px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-4 sm:gap-6 md:gap-8">

        <p className="text-hover-400 flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          <AiOutlineMinus className="text-lg sm:text-xl md:text-2xl" /> 
          Creative Agency 
        </p>


        <h1 className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-text max-w-4xl">
          We Build Global Experience That Customers Love.
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text max-w-2xl leading-relaxed">
          A full-service digital marketing firm that specialises in human-centered experiences. We bring companies and people together
        </p>

        <div className="mt-2 sm:mt-4 md:mt-6">
          <a 
            href="#" 
            aria-label="Get Started with our services" 
            className="relative inline-flex gap-2 sm:gap-3 p-3 sm:p-4 px-4 sm:px-6 md:px-8 bg-bg-500 text-text items-center rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group text-sm sm:text-base md:text-lg font-semibold"
          >
            <span className="relative z-10 flex gap-2 sm:gap-3 items-center">
              Get Started 
              <CgArrowTopRight />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-bg-600 to-bg-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
