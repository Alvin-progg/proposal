import React from 'react'
import CarouselClient from './CarouselClient'


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

        <div>
            <div>
              <div className=''>
                <img src="./assets/slider-2.jpg" alt="app-png" loading='lazy'  className='bg-bg rounded-2xl h-10 w-10'/>
                <h2>App Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium labore iste aliquid. Amet labore error incidunt qui voluptatem suscipit culpa, dolore ab omnis nemo assumenda aliquid laboriosam, in ex.</p>
              </div>
            </div>
        </div>


    </section>
  )
}

export default Services;