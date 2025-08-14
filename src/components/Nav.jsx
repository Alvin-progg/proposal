import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { CgArrowTopRight } from "react-icons/cg";

const Nav = () => {
  return (
    <nav className='flex justify-between m-10 items-center'>
        <a href="#" className='font-bold'>BLUEKET</a>
        <ul className='flex gap-7'>
            <li className=''><a href="#" className='flex gap-1 items-center'>Demo <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>About us <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Services <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Portfolio <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Blogs <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Contact Us <span><RiArrowDownWideFill /></span></a></li>
        </ul>
        <div className='flex items-center  gap-10'>
            <button className='bg-blue-500 text-white p-3 rounded-full'><FaPhone /></button>
            <a href="#" className='flex gap-2 items-center'>Get Started <span><CgArrowTopRight /></span></a>
        </div>

        
    </nav>
  )
}

export default Nav