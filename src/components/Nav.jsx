import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { CgArrowTopRight } from "react-icons/cg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    
    <header>
        <nav className={`flex justify-center items-center p-10 h-[10vw] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/30 shadow-sm" : "bg-transparent"}`}>
            <a href="#" className="font-bold text-3xl">BLUEKET</a>
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
                <a href="#" className="flex gap-2 p-4 px-6 bg-orange-500 text-white items-center rounded-4xl hover:bg-orange-600"  aria-label="Get Started with our services"   >Get Started <CgArrowTopRight /></a>
            </div>
        </nav>
    </header>

    );
};

export default Nav;
