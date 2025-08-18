import React, { useState, useEffect } from 'react';
import { FaPhone, FaPhoneSquareAlt, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineExitToApp, MdEmail } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowBackIosNew } from "react-icons/md";
import logoWhite from '../assets/logo-white.svg';
import logoBlack from '../assets/logo-black.svg';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleNav = () => {
    setisMobileNavOpen(!isMobileNavOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="m-0 p-0 relative">
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      <nav
        className={`flex justify-between items-center px-3 py-3 h-auto fixed top-0 left-0 w-full z-50 transition-all duration-500 
        sm:px-6 sm:py-4 xl:px-10 xl:justify-center xl:gap-20
        ${scrolled ? "backdrop-blur-md bg-bg-50/30 shadow-sm text-text-black" : "bg-transparent text-text"}`}
      >
        <a href="#" className="flex-shrink-0">
          <img 
            src={!scrolled ? logoWhite : logoBlack} 
            alt="Logo" 
            loading='lazy' 
            className="h-6 sm:h-8 lg:h-10" 
          />
        </a>

        <ul className="hidden xl:flex items-center gap-6 text-lg xl:gap-8 xl:text-xl">
          <li><a href="#" className="hover:text-hover-500 transition-colors">Demo</a></li>
          <li><a href="#" className="hover:text-hover-500 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-hover-500 transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-hover-500 transition-colors">Portfolio</a></li>
          <li><a href="#" className="hover:text-hover-500 transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-hover-500 transition-colors">Contact Us</a></li>
        </ul>

        <div className="flex items-center gap-1 sm:gap-3">
          <button 
            className="bg-bg-500 text-text p-2 sm:p-3 rounded-full hover:bg-hover-600 transition-all duration-300 flex-shrink-0" 
            aria-label="Get in touch"  
            onClick={toggleSidebar}
          >
            <FaPhone className="text-xs sm:text-sm lg:text-base" />
          </button>

          <a 
            href="#" 
            className="relative flex items-center justify-center gap-1 bg-hover-500 text-text rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex-shrink-0
              px-2 py-1.5 text-xs min-w-[70px]
              sm:px-3 sm:py-2 sm:text-sm sm:min-w-[90px] sm:gap-2
              md:px-4 md:py-3 md:text-base md:min-w-[120px]
              lg:px-6 lg:py-3 lg:text-lg lg:min-w-[140px]"
            aria-label="Get Started with our services"
          >
            <span className="relative z-10 flex items-center gap-1 sm:gap-2 font-medium">
              Get Started 
              <CgArrowTopRight className="hidden sm:block text-sm md:text-lg lg:text-xl" />
            </span> 
            <div className="absolute inset-0 bg-gradient-to-b from-hover-700 to-hover-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          </a>

          <button 
            aria-label='Open navigation menu' 
            className='text-lg sm:text-xl xl:hidden flex-shrink-0 p-1' 
            onClick={toggleNav}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-4xl bg-bg-50 text-text-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mx-5 mt-3 p-5 justify-center items-center flex-col">
          <div className="items-center gap-5 justify-between flex">
            <img src={logoBlack} alt="logo" loading='lazy' className='h-10' />
            <button aria-label="Close sidebar" onClick={toggleSidebar}>
              <MdOutlineExitToApp className="text-3xl" />
            </button>
          </div>
          <div className='mt-10 gap-5 flex-col py-3'>
            <h2 className="text-2xl">Get In Touch</h2>
            <h3 className='font-light'>Please fill out the form below if you have a plan or project in mind that you'd like to share with us.</h3>
          </div>
          <div className='my-10 flex-col gap-5'>
            <h3 className='font-light'>We're Available 24/7. Call Now.</h3>
            <p className="flex items-center gap-2"><FaPhoneSquareAlt className='text-xl' /> 91 123 4567 890</p>
            <p className="flex items-center gap-2"><FaPhoneSquareAlt className='text-xl' /> 91 123 4567 890</p>
          </div>
          <div>
            <h3 className='font-light mb-3'>Send Us an Email:</h3>
            <p className="flex items-center gap-2"><MdEmail className='text-xl' /> hr@yourwebsite.com</p>
            <p className="flex items-center gap-2"><MdEmail className='text-xl' /> info@yourwebsite.com</p>
          </div>
          <div className='my-10 py-3 h-auto flex-col'>
            <h3 className='font-light'>Follow Us</h3>
            <ul className="flex items-center gap-4 text-2xl mt-5 text-gray-600">
              <li><a href="" className='hover:text-hover-600'><FaTwitter /></a></li>
              <li><a href="" className='hover:text-hover-600'><FaFacebookF /></a></li>
              <li><a href="" className='hover:text-hover-600'><IoLogoYoutube /></a></li>
              <li><a href="" className='hover:text-hover-600'><FaLinkedinIn /></a></li>
              <li><a href="" className='hover:text-hover-600'><IoLogoInstagram /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <nav className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white text-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <button 
            onClick={toggleNav} 
            className='flex justify-end w-full mb-8'
            aria-label="Close navigation menu"
          >
            <MdArrowBackIosNew className="text-3xl" />
          </button>
          <ul className='flex flex-col'>
            <li className='border-b border-gray-200 py-4'>
              <a href="" className="text-lg font-medium hover:text-hover-500 transition-colors">Demo</a>
            </li>
            <li className='border-b border-gray-200 py-4'>
              <a href="" className="text-lg font-medium hover:text-hover-500 transition-colors">About Us</a>
            </li>
            <li className='border-b border-gray-200 py-4'>
              <a href="" className="text-lg font-medium hover:text-hover-500 transition-colors">Services</a>
            </li>
            <li className='border-b border-gray-200 py-4'>
              <a href="" className="text-lg font-medium hover:text-hover-500 transition-colors">Portfolio</a>
            </li>
            <li className='border-b border-gray-200 py-4'>
              <a href="" className="text-lg font-medium hover:text-hover-500 transition-colors">Blog</a>
            </li>
            <li className='border-b border-gray-200 py-4'>
              <a href="" className="text-lg font-medium hover:text-hover-500 transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;