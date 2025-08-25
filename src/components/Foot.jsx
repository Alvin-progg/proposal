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
        <section className='w-full h-[92vh] overflow-hidden flex justify-center flex-col  bg-bg1-100'>
            
                <div className='flex justify-between   mx-66  '>
                    <div className='flex flex-col justify-between'>
                        <img src={logoBlacks} alt="logo Black" />
                        <div className='flex flex-col gap-3'>
                            <p>Career</p>
                            <a href="#" className='flex items-center justify-center gap-2 py-3 px-2 border-dashed border border-border-600 rounded-2xl '><img src={career} className='h-[32px] w-[32px]' alt="career icon" loading='lazy' /> We're Hiring!</a>
                        </div>
                        <div className='text-textGray-600 flex flex-col gap-4'>
                            <p >Follow us</p>
                            <ul className='flex gap-3 text-2xl '>
                                <li><a href=""><FaTwitter /></a></li>
                                <li><a href=""><FaFacebookF /></a></li>
                                <li><a href=""><FaYoutube /></a></li>
                                <li><a href=""><FaLinkedin /></a></li>
                                <li><a href=""><FaInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[660px] flex flex-col gap-10'>
                        <div className='flex gap-10'>
                            <div className='w-[303px] flex flex-col gap-8'>
                                <div className='flex items-center gap-5'>
                                    <img src={india} alt="india flag" loading='lazy' className='w-[32px] h-[29px]' />
                                    <p>India</p>
                                </div>
                                <div className='flex flex-col gap-6 text-textGray-600'>
                                    <p>Tom Extension, 1st Block 2nd Cross, Yello circle, Jaipur, Rajasthan 12345</p>
                                    <ul>
                                        <li><a href="#" className='flex items-center gap-1.5'><BsFillTelephoneFill />91 123 4567 890</a></li>
                                        <li><a href="#" className='flex items-center gap-1.5'><FaEnvelope />info@yourwebsite.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-[303px] flex flex-col gap-8'>
                                <div className='flex items-center gap-5'>
                                    <img src={us} alt="us flag" loading='lazy' className='w-[32px] h-[29px]' />
                                    <p>USA</p>
                                </div>
                                <div className='flex flex-col gap-6 text-textGray-600'>
                                    <p>Tom Extension, 1st Block 2nd Cross, Yello circle, Jaipur, Rajasthan 12345</p>
                                    <ul>
                                        <li><a href="#" className='flex items-center gap-1.5'><BsFillTelephoneFill />91 123 4567 890</a></li>
                                        <li><a href="#" className='flex items-center gap-1.5'><FaEnvelope />info@yourwebsite.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className='flex gap-8'>
                            <li><a href="#"><img src={award1} alt="Award icon" className='h-[70px] w-[81px]'  /></a></li>
                            <li><a href="#"><img src={award2} alt="Award icon" className='h-[70px] w-[81px]' /></a></li>
                            <li><a href="#"><img src={award3} alt="Award icon" className='h-[70px] w-[81px]' /></a></li>
                            <li><a href="#"><img src={award4} alt="Award icon" className='h-[70px] w-[81px]' /></a></li>
                            <li><a href="#"><img src={award5} alt="Award icon" className='h-[70px] w-[81px]' /></a></li>
                            <li><a href="#"><img src={award6} alt="Award icon" className='h-[70px] w-[81px]' /></a></li>

                        </ul>
                    </div>
                </div>
                <div className='flex my-30 justify-between '>
                    <div>
                        <h2>Company Links</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Media Coverage</a></li>
                            <li><a href="#">Referral Program</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Client Testimonials</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Technologies</h2>
                        <ul>
                            <li><a href="#">React JS</a></li>
                            <li><a href="#">Laravel</a></li>
                            <li><a href="#">CodeIgniter</a></li>
                            <li><a href="#">Node JS</a></li>
                            <li><a href="#">WordPress</a></li>
                            <li><a href="#">Magento</a></li>
                            <li><a href="#">ReactJS</a></li>
                            <li><a href="#">KnockoutJs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Our Services</h2>
                        <ul>
                            <li><a href="#">Web Application</a></li>
                            <li><a href="#">Mobile App Development</a></li>
                            <li><a href="#">Microsoft Development</a></li>
                            <li><a href="#">Front End Development</a></li>
                            <li><a href="#">eCommerce Development</a></li>
                            <li><a href="#">Cross-platform App</a></li>
                            <li><a href="#">Opensource Development</a></li>
                            <li><a href="#">UI/UX Design</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>On Demand Solutions</h2>
                        <ul>
                            <li><a href="#">Taxi App</a></li>
                            <li><a href="#">Healthcare App</a></li>
                            <li><a href="#">Live Streaming App</a></li>
                            <li><a href="#">Live Streaming App</a></li>
                            <li><a href="#">ELearning App</a></li>
                            <li><a href="#">eWallet App Solutions</a></li>
                            <li><a href="#">Fantasy Sports App</a></li>
                            <li><a href="#">Grocery Delivery App</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between '>
                    <h3>© 2022 All Rights Reserved By <a href="#">Separateweb</a></h3>
                    <ul className='flex gap-1.5 items-center'>
                        <li><a href="#">Sitemap</a></li>
                        <GoDotFill />
                        <li><a href="#">Privacy Policy</a></li>
                        <GoDotFill />
                        <li><a href="#">Terms of Use
                        </a></li>
                    </ul>
                </div>
            
        </section>
    )
}

export default Foot