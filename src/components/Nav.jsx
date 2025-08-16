import React, { useState, useEffect } from 'react';
import { FaPhone, FaPhoneSquareAlt, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineExitToApp, MdEmail } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowBackIosNew } from "react-icons/md";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNavOpen , setisMobileNavOpen] = useState(false);

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
      {/* Sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Navbar */}
      <nav
        className={`flex justify-between xl:justify-center items-center p-10 h-[5vw] fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? "backdrop-blur-md bg-bg-50/30 shadow-sm text-text-black" : "bg-transparent text-text "}`}
      >
        {/* Logo */}
        <a href="#" className="text-xl sm:text-3xl">BLUEKET</a>

        {/* Links */}
        <ul className="hidden xl:flex gap-7 text-xl mx-20  ">
          <li><a href="#" className="flex gap-1 items-center">Demo</a></li>
          <li><a href="#" className="flex gap-1 items-center">About us</a></li>
          <li><a href="#" className="flex gap-1 items-center">Services</a></li>
          <li><a href="#" className="flex gap-1 items-center">Portfolio</a></li>
          <li><a href="#" className="flex gap-1 items-center">Blogs</a></li>
          <li><a href="#" className="flex gap-1 items-center">Contact Us</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3 sm:gap-10 text-{10px} sm:text-xl ">
          {/* Call button */}
          <button 
            className="bg-bg-500 text-text p-3 rounded-full hover:bg-hover-600" 
            aria-label="get in touch"  
            onClick={toggleSidebar}
          >
            <FaPhone />
          </button>

          {/* Get Started button */}
          <a 
            href="#" 
            className="relative flex gap-2 p-1  sm:px-6 sm:py-3  py-2 rounded-full bg-hover-500 text-text items-center   overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            aria-label="Get Started with our services"
          >
            <span className="relative z-10 flex gap-2  text-sm sm:text-xl items-center">
              Get Started <CgArrowTopRight />
            </span> 
            <div className="absolute inset-0 bg-gradient-to-b from-hover-700 to-hover-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          </a>
          <button aria-label='open nav bar for mobile ' className='sm:text-3xl text-xl xl:hidden flex' onClick={toggleNav}><GiHamburgerMenu /></button>
        </div>
        
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xl bg-bg-50 text-text-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mx-5 mt-3 p-5 justify-center items-center flex-col ">
          <div className="items-center  gap-5 justify-between flex">
            <h3 className="text-2xl">BLUEKET</h3>
            <button aria-label="exit sidebar" onClick={toggleSidebar}>
              <MdOutlineExitToApp className="text-3xl" />
            </button>
          </div>
          <div className='mt-10 gap-5 flex-col py-3 '>
            <h2 className="text-2xl ">Get In Touch</h2>
            <h3 className='font-light'>Please fill out the form below if you have a plan or project in mind that you'd like to share with us.</h3>
          </div>
          <div className='my-10  flex-col py-5'>
            <h3 className='font-light'>We're Available 24/7. Call Now.</h3>
            <p className="flex items-center gap-2"><FaPhoneSquareAlt className='text-xl' /> 91 123 4567 890</p>
            <p className="flex items-center gap-2 "><FaPhoneSquareAlt className='text-xl'  /> 91 123 4567 890</p>
          </div>
          <div>
            <h3 className='font-light mb-3'>Send Us an Email:</h3>
            <p className="flex items-center gap-2"><MdEmail className='text-xl' /> hr@yourwebsite.com</p>
            <p className="flex items-center gap-2"><MdEmail className='text-xl' /> info@yourwebsite.com</p>
          </div>
          <div className='my-10 py-3 h-auto flex-col'>
            <h3 className='font-light '>Follow Us</h3>
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

        {/** NAv bar for mobile */}
        <nav className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white text-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button onClick={toggleNav} className='flex justify-end w-full -ml-10 my-5  '>
              <MdArrowBackIosNew className="text-3xl ml-auto" />
            </button>
            <ul className='flex-col'>
              <li className='border-y-1 border-border-400 p-2 text-xl'><a href="">Demo</a></li>
              <li className='border-b-1 border-border-400 p-2 text-xl'><a href="" >About us</a></li>
              <li className='border-b-1 border-border-400 p-2 text-xl'><a href="">Services</a></li>
              <li className='border-b-1 border-border-400 p-2 text-xl'><a href="">Portfolio</a></li>
              <li className='border-b-1 border-border-400 p-2 text-xl'><a href="">Blogs</a></li>
              <li className='border-b-1 border-border-400 p-2 text-xl'><a href="">Contact Us</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Nav;
