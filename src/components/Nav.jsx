import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineExitToApp } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        className={`flex justify-center items-center p-10 h-[5vw] fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? "backdrop-blur-md bg-bg-50/30 shadow-sm text-text-black" : "bg-transparent text-text "}`}
      >
        {/* Logo */}
        <a href="#" className="text-3xl">BLUEKET</a>

        {/* Links */}
        <ul className="flex gap-7 text-xl mx-20">
          <li><a href="#" className="flex gap-1 items-center">Demo</a></li>
          <li><a href="#" className="flex gap-1 items-center">About us</a></li>
          <li><a href="#" className="flex gap-1 items-center">Services</a></li>
          <li><a href="#" className="flex gap-1 items-center">Portfolio</a></li>
          <li><a href="#" className="flex gap-1 items-center">Blogs</a></li>
          <li><a href="#" className="flex gap-1 items-center">Contact Us</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-10 text-xl">
          {/* Call button */}
          <button 
            className="bg-bg-500 text-text p-4 rounded-full hover:bg-hover-600" 
            aria-label="get in touch"  
            onClick={toggleSidebar}
          >
            <FaPhone />
          </button>

          {/* Get Started button */}
          <a 
            href="#" 
            className="relative flex gap-2 p-4 px-6 bg-hover-500 text-text items-center rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            aria-label="Get Started with our services"
          >
            <span className="relative z-10 flex gap-2 items-center">
              Get Started <CgArrowTopRight />
            </span> 
            <div className="absolute inset-0 bg-gradient-to-b from-hover-700 to-hover-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          </a>
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
    </header>
  );
};

export default Nav;
