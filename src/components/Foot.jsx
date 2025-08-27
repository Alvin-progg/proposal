import React from 'react'
import logoBlacks from '../assets/logo-black.svg'
import career from '../assets/icons/career.png'
import { FaYoutube, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import india from '../assets/country/in.svg';
import us from '../assets/country/us.svg';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import award1 from '../assets/award/award-badge-1.png';
import award2 from '../assets/award/award-badge-2.png';
import award3 from '../assets/award/award-badge-3.png';
import award4 from '../assets/award/award-badge-5.png';
import award5 from '../assets/award/award-badge-6.png';
import award6 from '../assets/award/award-badge-7.png';
import { GoDotFill } from "react-icons/go";

const Foot = () => {
    return (
        <section className='w-full min-h-[92vh] max-lg:min-h-auto overflow-hidden flex justify-center flex-col bg-bg1-100'>

            <div className='flex justify-between max-lg:flex-col max-lg:gap-8 mx-66 max-lg:mx-8 max-md:mx-4 mt-10'>
                
                <div className='flex flex-col justify-between max-lg:gap-8'>
                    <img src={logoBlacks} alt="logo Black" className='max-lg:w-40' />
                    
                    <div className='flex flex-col gap-3'>
                        <p>Career</p>
                        <a href="#" className='flex items-center justify-center gap-2 py-3 px-2 border-dashed border border-border-600 rounded-2xl text-textGray-600 transition-all duration-300 hover:text-bg2-600 hover:border-bg2-600 max-lg:w-fit'><img src={career} className='h-[32px] w-[32px]' alt="career icon" loading='lazy' /> We're Hiring!</a>
                    </div>
                    
                    <div className='text-textGray-600 flex flex-col gap-4'>
                        <p>Follow us</p>
                        <ul className='flex gap-3 text-2xl'>
                            <li><a href=""><FaTwitter className='hover:text-bg2-400 transition-all duration-300' /></a></li>
                            <li><a href=""><FaFacebookF className='hover:text-bg2-400 transition-all duration-300' /></a></li>
                            <li><a href=""><FaYoutube className='hover:text-bg2-400 transition-all duration-300' /></a></li>
                            <li><a href=""><FaLinkedin className='hover:text-bg2-400 transition-all duration-300' /></a></li>
                            <li><a href=""><FaInstagram className='hover:text-bg2-400 transition-all duration-300' /></a></li>
                        </ul>
                    </div>
                </div>
                
                <div className='w-[660px] max-lg:w-full flex flex-col gap-10'>
                    <div className='flex gap-10 max-md:flex-col max-md:gap-8'>
                        <div className='w-[303px] max-lg:w-full flex flex-col gap-8 text-textGray-600'>
                            <div className='flex items-center gap-5'>
                                <img src={india} alt="india flag" loading='lazy' className='w-[32px] h-[29px]' />
                                <p className='text-xl'>India</p>
                            </div>
                            <div className='flex flex-col gap-6 text-textGray-600'>
                                <p>Tom Extension, 1st Block 2nd Cross, Yello circle, Jaipur, Rajasthan 12345</p>
                                <ul>
                                    <li><a href="#" className='flex items-center gap-2 hover:text-bg2-400 transition-all duration-300'><BsFillTelephoneFill />91 123 4567 890</a></li>
                                    <li><a href="#" className='flex items-center gap-2 hover:text-bg2-400 transition-all duration-300'><FaEnvelope />info@yourwebsite.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-[303px] max-lg:w-full flex flex-col gap-8 text-textGray-600'>
                            <div className='flex items-center gap-5'>
                                <img src={us} alt="us flag" loading='lazy' className='w-[32px] h-[29px]' />
                                <p className='text-xl'>USA</p>
                            </div>
                            <div className='flex flex-col gap-6 text-textGray-600'>
                                <p>Tom Extension, 1st Block 2nd Cross, Yello circle, New York, Usa 95356</p>
                                <ul>
                                    <li><a href="#" className='flex items-center gap-2 hover:text-bg2-400 transition-all duration-300'><BsFillTelephoneFill />91 123 4567 890</a></li>
                                    <li><a href="#" className='flex items-center gap-2 hover:text-bg2-400 transition-all duration-300'><FaEnvelope />info@yourwebsite.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <ul className='flex gap-8 max-md:gap-4 max-md:flex-wrap max-md:justify-center'>
                        <li><a href="#"><img src={award1} alt="Award icon" className='h-[70px] w-[81px] max-md:h-[60px] max-md:w-[70px]' /></a></li>
                        <li><a href="#"><img src={award2} alt="Award icon" className='h-[70px] w-[81px] max-md:h-[60px] max-md:w-[70px]' /></a></li>
                        <li><a href="#"><img src={award3} alt="Award icon" className='h-[70px] w-[81px] max-md:h-[60px] max-md:w-[70px]' /></a></li>
                        <li><a href="#"><img src={award4} alt="Award icon" className='h-[70px] w-[81px] max-md:h-[60px] max-md:w-[70px]' /></a></li>
                        <li><a href="#"><img src={award5} alt="Award icon" className='h-[70px] w-[81px] max-md:h-[60px] max-md:w-[70px]' /></a></li>
                        <li><a href="#"><img src={award6} alt="Award icon" className='h-[70px] w-[81px] max-md:h-[60px] max-md:w-[70px]' /></a></li>
                    </ul>
                </div>
            </div>
            
            <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 my-15 max-lg:my-10 justify-between mx-66 max-lg:mx-8 max-md:mx-4 border-y border-border-300 py-20 max-lg:py-10 gap-8 max-lg:gap-6'>
                <div className='flex flex-col gap-4 text-textGray-600'>
                    <h2 className=''>Company Links</h2>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">About Us</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Contact Us</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Careers</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Our Team</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Media Coverage</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Referral Program</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Case Studies</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Client Testimonials</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 text-textGray-600'>
                    <h2>Technologies</h2>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">React JS</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Laravel</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">CodeIgniter</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Node JS</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">WordPress</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Magento</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">ReactJS</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">KnockoutJs</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 text-textGray-600'>
                    <h2>Our Services</h2>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Web Application</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Mobile App Development</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Microsoft Development</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Front End Development</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">eCommerce Development</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Cross-platform App</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Opensource Development</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">UI/UX Design</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 text-textGray-600'>
                    <h2>On Demand Solutions</h2>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Taxi App</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Healthcare App</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Live Streaming App</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">ELearning App</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">eWallet App Solutions</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Fantasy Sports App</a></li>
                        <li><a href="#" className="relative font-light transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Grocery Delivery App</a></li>
                    </ul>
                </div>
            </div>
            
            <div className='flex justify-between max-md:flex-col max-md:gap-4 max-md:text-center mx-66 max-lg:mx-8 max-md:mx-4 text-textGray-600 items-center'>
                <h3>© 2022 All Rights Reserved By <a href="#" className="relative transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Separateweb</a></h3>
                <ul className='flex gap-1.5 items-center max-md:justify-center'>
                    <li><a href="#" className="relative transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Sitemap</a></li>
                    <GoDotFill />
                    <li><a href="#" className="relative transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Privacy Policy</a></li>
                    <GoDotFill />
                    <li><a href="#" className="relative transition-all duration-500 hover:text-bg2-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-bg2-500 after:to-bg2-300 after:transition-all after:duration-500 hover:after:w-full">Terms of Use</a></li>
                </ul>
            </div>

        </section>
    )
}

export default Foot