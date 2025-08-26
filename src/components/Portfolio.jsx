import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
import CarouselProjects from './CarouselProjects';

const Portfolio = () => {
  return (
    <section className='w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 max-w-7xl mx-auto py-8 lg:py-16'>
        <div className='flex flex-col gap-4 lg:gap-6 w-full lg:w-auto'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight'>Latest Projects</h2>
          <a 
            href="#" 
            aria-label='view projects' 
            className='flex items-center hover:text-hover2-600 gap-1.5 text-sm sm:text-base transition-colors duration-200 w-fit'
          > 
            View all Projects <CgArrowTopRight className="text-lg" /> 
          </a>
        </div>
        <div className='w-full lg:w-[570px] lg:max-w-[570px]'>
          <h3 className='text-textGray-700 text-sm sm:text-base leading-relaxed'>
            Blueket overcomes challenges, achieves results, and adds value to our clients and partners. Take a look at some of our clients' success stories. Take a look at some of our clients' success stories.
          </h3>
        </div>
      </div>
      <CarouselProjects/>
    </section>
  )
}

export default Portfolio