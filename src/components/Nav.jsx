import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { CgArrowTopRight } from "react-icons/cg";
import { useState, useEffect } from "react";

const [scrolled, setScrolled] = useState(false);
useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const Nav = () => {
  return (
    <nav className='className={`flex justify-center items-center p-10 h-[10vw] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/30 shadow-sm" : "bg-transparent"}`} '>
        <a href="#" className='font-bold text-3xl'>BLUEKET</a>
        <ul className='flex gap-7 text-xl   mx-20'>
            <li className=''><a href="#" className='flex gap-1 items-center'>Demo <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>About us <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Services <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Portfolio <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Blogs <span><RiArrowDownWideFill /></span></a></li>
            <li className=''><a href="#" className='flex gap-1 items-center'>Contact Us <span><RiArrowDownWideFill /></span></a></li>
        </ul>
        <div className='flex items-center  gap-10 text-xl'>
            <button className='bg-blue-500 text-white p-4 rounded-full hover:bg-orange-600  ' aria-label='get in touch'><FaPhone /></button>
            <a href="#" className='flex gap-2 p-4 px-6 bg-orange-500 text-white items-center rounded-4xl hover:bg-orange-600' >Get Started <CgArrowTopRight /></a>
        </div>

        
    </nav>
  )
}

export default Nav