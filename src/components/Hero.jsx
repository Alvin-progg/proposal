import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { CgArrowTopRight } from "react-icons/cg";
const Hero = () => {
  return (
    <section className='h-screen w-screen  justify-center flex items-center '>
        <div className='flex flex-col justify-start w-[50vw] mx-auto px-8 gap-10'>
            <span className='text-orange-700 flex items-center gap-4'><AiOutlineMinus /> Creative Agency </span>
            <h1 className='font-bold text-5xl'>We Are a Bunch of Future <br /> Holders, Making the Digital <br /> World Better.</h1>
            <p>A full-service digital marketing firm that specialises in human-centered experiences. We bring <br /> companies and people together</p>
            <div>
                <a href="#"  aria-label="Get Started with our services" className="inline-flex gap-2 p-4 px-6 bg-indigo-500 text-white items-center rounded-4xl hover:bg-orange-600 w-auto ">Get Started <CgArrowTopRight /></a>
            </div>
        </div>
    </section>
  )
}

export default Hero