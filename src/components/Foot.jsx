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
        <section className='w-full h-[90vh] overflow-hidden'>
            <div>
                <div className='flex'>
                    <div>
                        <img src={logoBlacks} alt="logo Black" />
                        <div>
                            <p>Career</p>
                            <a href="#" className='flex'><img src={career} alt="career icon" loading='lazy' /> We're Hiring</a>
                        </div>
                        <div>
                            <p>Follow us</p>
                            <ul className='flex gap-1.5'>
                                <li><a href=""><FaTwitter /></a></li>
                                <li><a href=""><FaFacebookF /></a></li>
                                <li><a href=""><FaYoutube /></a></li>
                                <li><a href=""><FaLinkedin /></a></li>
                                <li><a href=""><FaInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <div>
                                <div className='flex items-center gap-2.5'>
                                    <img src={india} alt="india flag" loading='lazy' className='w-[32px] h-[29px]' />
                                    <p>India</p>
                                </div>
                                <div>
                                    <p>Tom Extension, 1st Block 2nd Cross, Yello circle, Jaipur, Rajasthan 12345</p>
                                    <ul>
                                        <li><a href="#"><BsFillTelephoneFill />91 123 4567 890</a></li>
                                        <li><a href="#"><FaEnvelope />info@yourwebsite.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2.5'>
                                    <img src={us} alt="india flag" loading='lazy' className='w-[32px] h-[29px]' />
                                    <p>USA</p>
                                </div>
                                <div>
                                    <p>Tom Extension, 1st Block 2nd Cross, Yello circle, Jaipur, Rajasthan 12345</p>
                                    <ul>
                                        <li><a href="#"><BsFillTelephoneFill />91 123 4567 890</a></li>
                                        <li><a href="#"><FaEnvelope />info@yourwebsite.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className='flex'>
                            <li><a href="#"><img src={award1} alt="Award icon" /></a></li>
                            <li><a href="#"><img src={award2} alt="Award icon" /></a></li>
                            <li><a href="#"><img src={award3} alt="Award icon" /></a></li>
                            <li><a href="#"><img src={award4} alt="Award icon" /></a></li>
                            <li><a href="#"><img src={award5} alt="Award icon" /></a></li>
                            <li><a href="#"><img src={award6} alt="Award icon" /></a></li>

                        </ul>
                    </div>
                </div>
                <div className='flex my-20'>
                    <div>
                        <h2>Company Links</h2>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Technologies</h2>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Our Services</h2>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>On demand Solutions</h2>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <h3>© 2022 All Rights Reserved By <a href="#">Separateweb</a></h3>
                    <ul className='flex gap-1.5'>
                        <li><a href="#">Sitemap</a></li>
                        <GoDotFill />
                        <li><a href="#">Privacy Policy</a></li>
                        <GoDotFill />
                        <li><a href="#">Terms of Use
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Foot