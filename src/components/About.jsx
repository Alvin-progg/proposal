import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import Office1 from '../assets/common/office-3.jpg'
import Office2 from '../assets/common/office-4.jpg'
import { LuX } from "react-icons/lu";
import { useState } from 'react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className='w-full min-h-[660px] bg-serv-1 my-10 flex justify-center items-center overflow-x-hidden px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-7xl flex justify-center items-center py-8 lg:py-16'>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12'>
          
          <div className='w-full lg:w-1/2 max-w-2xl'>
            <div className='flex flex-col gap-4 sm:gap-6'>
              <h2 className='flex items-center text-hover-600 gap-2 sm:gap-4 font-light text-sm sm:text-base'>
                <AiOutlineMinus className='font-semibold text-lg sm:text-xl' /> 
                WHO WE ARE
              </h2>
              
              <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight'>
                Hire the Best Web and Mobile App Developers For Your Project
              </h2>
              
              <div className='space-y-4'>
                <p className='text-textGray-700 text-sm sm:text-base leading-relaxed'>
                  Expertise helps Blueket tackle the world's most difficult challenges. Blueket provides digital products for worldwide brands on the web, mobile, and linked platforms. Expertise helps Blueket tackle the world's most difficult challenges. Blueket provides digital products for worldwide brands on the web, mobile, and linked platforms.
                </p>
                <p className='text-textGray-700 text-sm sm:text-base leading-relaxed'>
                  Expertise helps Blueket tackle the world's most difficult challenges. Blueket provides digital products for worldwide brands on the web.
                </p>
              </div>
              
              <div className='flex  sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pt-4'>
                <a 
                  href="#" 
                  aria-label="Get Started with our services" 
                  className="relative inline-flex gap-2 sm:gap-3 py-3 px-6 sm:py-4 sm:px-8 bg-bg-500 text-text items-center rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group text-sm sm:text-base font-semibold whitespace-nowrap"
                >
                  <span className="relative z-10 flex gap-2 sm:gap-3 items-center">
                    Get Started
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-600 to-bg-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </a>
                
                <button 
                  aria-label='watch video' 
                  className='flex items-center gap-2 cursor-pointer group' 
                  onClick={openModal}
                >
                  <div className='bg-bg rounded-full p-2 group-hover:scale-105 transition-transform duration-200'>
                    <FaPlay className='text-bg-500 text-3xl sm:text-4xl lg:text-5xl p-2 sm:p-3' />
                  </div>
                  <p className='text-textGray-700 text-sm sm:text-base'>Watch Video</p>
                </button>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className='relative flex items-center justify-center gap-3 sm:gap-5'>
              <img 
                src={Office1} 
                alt="Office environment showcasing our workspace" 
                loading='lazy' 
                className='rounded-2xl w-32 h-48 sm:w-48 sm:h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 xl:w-72 xl:h-[420px] object-cover shadow-lg' 
              />
              <img 
                src={Office2} 
                alt="Modern office space and team collaboration" 
                loading='lazy' 
                className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 rounded-2xl w-32 h-48 sm:w-48 sm:h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 xl:w-72 xl:h-[420px] object-cover shadow-lg' 
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 w-full h-full" onClick={handleBackdropClick}>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-text hover:text-gray-300 transition-colors z-10 bg-bg/20 rounded-full p-2 sm:p-3 hover:bg-bg/30"
          >
            <LuX className='text-xl sm:text-2xl' />
          </button>

          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden mx-4">
            <iframe
              src={`https://www.youtube.com/embed/Aty3TV4Yn4I?autoplay=1&rel=0`}
              title="YouTube video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default About