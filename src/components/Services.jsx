import React from 'react'
import CarouselClient from './CarouselClient'


const Services = () => {
  return (
    <section className='w-full h-auto '>
        <CarouselClient/>
        

        <div className='mx-auto w-[50vw] items-center justify-center mt-20'>
            <div className='p-5 flex-col items-center justify-center gap-10 px-3'>
                <h2 className='text-4xl justify-center-safe flex mb-5 font-bold '>Service We Provide</h2>
                <h3 className='justify-center-safe flex'>Blueket overcomes challenges, achieves results, and adds value to our clients and partners.</h3>
                <h3 className='justify-center-safe flex'>Take a look at some of our clients' success stories.</h3>
                
            </div>
            
        </div>


    </section>
  )
}

export default Services;