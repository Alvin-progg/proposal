import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

const Portfolio = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='flex justify-between  p-8 mx-72 max-lg:flex-col max-lg:justify-center'>
        <div className='flex-col flex gap-6 justify-start '>
          <h2 className='text-5xl font-semibold '>Latest Projects</h2>
          <a href="#" aria-label='view projects' className='flex items-center hover:text-hover2-600 '> View all Projects <CgArrowTopRight /> </a>
        </div>
        <div className='h-[90px] w-[570px]'>
          <h3 className='text-textGray-700'>Blueket overcomes challenges, achieves results, and adds value to our clients and partners. Take a look at some of our clients' success stories. Take a look at some of our clients' success stories.</h3>
        </div>
      </div>
    </section>
  )
}

export default Portfolio