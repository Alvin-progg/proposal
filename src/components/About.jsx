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
    <section className='w-full overflow-hidden h-[660px] bg-serv-1 my-10 flex justify-center items-center'>
      <div className='h-[460px] w-full flex justify-center my-auto'>
        <div className='w-[770px] mx-4'>
            <div className='w-[746px] flex-col flex gap-6'>
              <h2 className='flex items-center text-hover-600 gap-4 font-light'><AiOutlineMinus className='font-semibold'/> WHO WE ARE</h2>
            <h2 className='font-semibold text-4xl'>Hire the Best Web and Mobile App Developers For Your Project</h2>
            <p className='text-textGray-700'>Expertise helps Blueket tackle the world's most difficult challenges. Blueket provides digital products for worldwide brands on the web, mobile, and linked platforms. Expertise helps Blueket tackle the world's most difficult challenges. Blueket provides digital products for worldwide brands on the web, mobile, and linked platforms.</p>
            <p className='text-textGray-700'>Expertise helps Blueket tackle the world's most difficult challenges. Blueket provides digital products for worldwide brands on the web.</p>
            <div className='flex w-[746px] h-[64px] gap-5'>
            <a href="#" aria-label="Get Started with our services" className="relative inline-flex gap-2 sm:gap-3 p-3 sm:p-4 px-4 sm:px-6 md:px-8 bg-bg-500 text-text items-center rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group text-sm sm:text-base md:text-lg font-semibold">
              <span className="relative z-10 flex gap-2 sm:gap-3 items-center">
                Get Started 
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-bg-600 to-bg-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <button aria-label='watch video' className='flex items-center gap-1.5 cursor-pointer' onClick={openModal}>
              <div className='bg-bg rounded-full p-2'><FaPlay className='text-bg-500 text-5xl p-3'/></div>
              <p className='text-textGray-700'>Watch Video</p>
            </button>
            </div>
          </div>
        </div>
        
        <div className='h-[418px] flex items-center justify-center gap-5'>
          <img src={Office1} alt="Office pic" loading='lazy' className='rounded-2xl w-[237px]' />
          <img src={Office2} alt="Office pic2" loading='lazy' className='mt-20 rounded-2xl w-[237px]'/>
        </div>
      </div>
      
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 w-full h-full " onClick={handleBackdropClick}>
            <button 
              onClick={closeModal} 
              className="absolute top-8 right-8 text-text hover:text-gray-300 transition-colors z-10 bg-bg/20 rounded-full p-3 hover:bg-bg/30"
            >
              <LuX className='text-2xl' />
            </button>
            
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
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