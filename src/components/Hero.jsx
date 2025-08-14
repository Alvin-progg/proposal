import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { CgArrowTopRight } from "react-icons/cg";
const Hero = () => {
  return (
    <section className='h-screen w-screen relative justify-center flex items-center bg-[url(./assets/slider-2.jpg)] bg-cover bg-center '>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className='flex flex-col justify-start w-[50vw] relative z-10 text-white  px-8 gap-8 md:-ml-[13vw]'>
            <p className='text-orange-700 flex items-center gap-4 text-xl' ><AiOutlineMinus /> Creative Agency </p>
            <h1 className='font-bold text-5xl max-lg:text-6xl lg:w-[30vw] text-white   '>We Build Global  Experience That  Customers Love.</h1>
            <p className='text-xl text-white'>A full-service digital marketing firm that specialises in human-centered experiences. We bring  companies and people together</p>
            <div>
                <a href="#"  aria-label="Get Started with our services" className="inline-flex gap-2 p-4 px-6 bg-indigo-500 text-white items-center rounded-4xl hover:bg-orange-600 w-auto ">Get Started <CgArrowTopRight /></a>
            </div>
        </div>


    </section>
  )
}

export default Hero