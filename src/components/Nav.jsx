import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineExitToApp } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen,setIsOpen] = useState(false)



  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    
      <header className='m-0 p-0 relative'>
        {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
        <nav className={`flex justify-center items-center p-10 h-[5vw]  fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-white/30 shadow-sm" : "bg-transparent" && "text-black : text-white"} `}>
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
                <button className="bg-indigo-500 text-white p-4 rounded-full hover:bg-orange-600" aria-label="get in touch"  onClick={toggleSidebar}><FaPhone /></button>
                <a href="#" className="relative flex gap-2 p-4 px-6 bg-orange-500 text-white items-center rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"  aria-label="Get Started with our services"   >
                  <span className='relative z-10 flex gap-2 items-center'>Get Started <CgArrowTopRight /></span> 
                  <div className='absolute inset-0 bg-gradient-to-b from-orange-700 to-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out'></div>
                </a>
            </div>
        </nav>

        <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='items-center m-5 gap-5 justify-between flex'>
              <h3 className='text-2xl'> BLUEKET</h3>
              <button aria-label='exit sidebar' onClick={toggleSidebar}><MdOutlineExitToApp className='text-2xl' /></button>
          </div>
          <div>
            <h2>Get In Touch</h2>
            <h3>Please fill out the form below if you have a plan or project in mind that you'd like to share with us.</h3>
          </div>
          <div>
            <h3>We're Available 24/7. Call Now.</h3>
              <p className='flex items-center'><FaPhoneSquareAlt /> 91 123 4567 890</p>
              <p className='flex items-center'><FaPhoneSquareAlt /> 91 123 4567 890</p>
          </div>
          <div>
            <h3>Send Us an Email:</h3>
              <p className='flex items-center'><MdEmail /> hr@yourwebsite.com</p>
              <p className='flex items-center'><MdEmail /> hr@yourwebsite.com</p>
          </div>
          <div>
            <h3>Follow Us:</h3>
            <ul className='flex items-center'>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>









      </header>
        


    );
};

export default Nav;
