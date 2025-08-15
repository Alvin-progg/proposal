import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa6";

import { CgArrowTopRight } from "react-icons/cg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [phone,setPhone] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    
      <header className='m-0 p-0 relative'>
        <nav className={`flex justify-center items-center p-10 h-[5vw]  fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/30 shadow-sm" : "bg-transparent" && "text-black : text-white"} `}>
            <a href="#" className=" text-3xl">BLUEKET</a>
            <ul className="flex gap-7 text-xl mx-20">
                <li><a href="#" className="flex gap-1 items-center">Demo </a></li>
                <li><a href="#" className="flex gap-1 items-center">About us </a></li>
                <li><a href="#" className="flex gap-1 items-center">Services </a></li>
                <li><a href="#" className="flex gap-1 items-center">Portfolio</a></li>
                <li><a href="#" className="flex gap-1 items-center">Blogs </a></li>
                <li><a href="#" className="flex gap-1 items-center">Contact Us </a></li>
            </ul>
            <div className="flex items-center gap-10 text-xl">
                <button className="bg-indigo-500 text-white p-4 rounded-full hover:bg-orange-600" aria-label="get in touch"><FaPhone /></button>
                <a href="#" className="relative flex gap-2 p-4 px-6 bg-orange-500 text-white items-center rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"  aria-label="Get Started with our services"   >
                  <span className='relative z-10 flex gap-2 items-center'>Get Started <CgArrowTopRight /></span> 
                  <div className='absolute inset-0 bg-gradient-to-b from-orange-700 to-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out'></div>
                </a>
            </div>
        </nav>


      </header>
        


    );
};

export default Nav;
