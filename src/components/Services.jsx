import React from 'react'
import CarouselClient from './CarouselClient'


const Services = () => {
  return (
    <section className='w-full h-auto '>
        <CarouselClient/>
        

        <div className='mx-auto w-[50vw] items-center justify-center mt-20'>
            <div className='p-5 flex-col items-center justify-center gap-10'>
                <h2 className='text-5xl '>Service We Provide</h2>
                <p>Blueket overcomes challenges, achieves results, and adds value to our clients and partners. Take a look at some of our clients' success stories.</p>
            </div>
            
        </div>


    </section>
  )
}

export default Services;