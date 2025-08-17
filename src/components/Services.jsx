import React from 'react'
import CarouselClient from './CarouselClient'
import AppIcon from '../assets/icons/app.png'
import ContentIcon from '../assets/icons/content.png'
import ShopIcon from '../assets/icons/online-shop.png'
import UX from '../assets/icons/ux-design.png'


const Services = () => {
  return (
    <section className='w-full h-auto '>
        <CarouselClient/>
        

        <div className='  items-center justify-center mt-20 '>
            <div className='p-5 flex-col items-center justify-center text-wrap gap-10 px-3 lg:w-[60vw] sm:mx-auto '>
                <h2 className=' justify-center-safe flex mb-5 font-bold text-2xl py-4 sm:text-4xl '>Service We Provide</h2>
                <h3 className='justify-center-safe flex font-light  text-center  '>Blueket overcomes challenges, achieves results, and adds value to our clients and partners.Take a look at some of our clients' success stories.</h3>
            </div>
            
        </div>

        <div className='row flex max-sm:flex-col justify-center items-center my-10 gap-14'>
          <div className='h-[285px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-hover-400 '>
              <div className='flex items-center justify-center itemce h-[120px] rounded-4xl mx-auto -mt-10  bg-bg w-[120px] '><img src={AppIcon} alt="App dev" loading='lazy' className='h-[64px] w-[64px]' /></div>
              <div className='text-center gap-10 p-2 py-10 '>
                <h2 className='font-semibold text-xl w-[156px] mx-auto'>App Development</h2>
                <p className='font-light  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              
          </div>
            <div className='h-[285px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-hover-400 '>
              <div className='flex items-center justify-center itemce h-[120px] rounded-3xl mx-auto -mt-10  bg-bg w-[120px]'><img src={UX} alt="App dev" loading='lazy' className='h-[64px] w-[64px]' /></div>
              <div className='text-center gap-5 flex-col p-2 py-10'>
                <h2 className='font-semibold text-xl  w-[156px] mx-auto'>Web Development</h2>
                <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
              
          </div>
                    <div className='h-[285px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-hover-400 '>
              <div className='flex items-center justify-center itemce h-[120px] rounded-3xl mx-auto -mt-10  bg-bg w-[120px]'><img src={ContentIcon} alt="App dev" loading='lazy' className='h-[64px] w-[64px]' /></div>
              <div className='text-center gap-5 flex-col p-2 py-10'>
                <h2 className='font-semibold text-xl  w-[156px] mx-auto'>Content Marketing</h2>
                <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              
          </div>
                    <div className='h-[285px] w-[286px] text-center items-center flex-col  justify-center rounded-2xl bg-hover-400 '>
              <div className='flex items-center justify-center itemce h-[120px] rounded-3xl mx-auto -mt-10  bg-bg w-[120px]'><img src={ShopIcon} alt="App dev" loading='lazy' className='h-[64px] w-[64px]' /></div>
              <div className='text-center gap-5 flex-col mt-5 p-2 py-5'>
                <h2 className='font-semibold text-xl  w-[156px] mx-auto text-text'>E Commerce Development</h2>
                <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              
          </div>
        </div>


    </section>
  )
}

export default Services;