import React, { useState } from 'react'
import DoubtIcon from '../assets/icons/doubt.svg'
import { AiOutlineMinus } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Collapsible } from '../constants/collapsible';

const Doubt = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const faqData = Collapsible;

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className='flex w-full justify-center items-center overflow-hidden min-h-[80vh] max-lg:min-h-auto py-10 max-lg:py-8'>
            <div className='flex justify-center my-10 max-lg:my-6 gap-10 max-lg:gap-6 max-md:flex-col max-md:items-center px-6 max-lg:px-4'>
                <img src={DoubtIcon} alt="Doubt Icon" loading='lazy' className='h-[530px] w-[530px] max-lg:h-[400px] max-lg:w-[400px] max-md:h-[300px] max-md:w-[300px] max-sm:h-[250px] max-sm:w-[250px]' />

                <div className='max-md:w-full max-md:max-w-2xl'>
                    <div className='flex flex-col gap-3.5 max-md:text-center'>
                        <p className='flex items-center text-bg2-600 gap-3.5 max-md:justify-center'>
                            <AiOutlineMinus />
                            Have a Doubt?
                        </p>
                        <h2 className='font-semibold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>Frequently Asked Question</h2>
                    </div>

                    <div className='my-6 max-md:my-4'>
                        {faqData.map((item, index) => (
                            <div key={index} className='border-b border-gray-200 py-4 max-md:py-3'>
                                <button
                                    aria-label='collapsible button'
                                    onClick={() => toggleItem(index)}
                                    className='w-full text-left'
                                >
                                    <h2 className='flex gap-3.5 items-center text-xl max-lg:text-lg max-md:text-base'>
                                        <MdKeyboardArrowDown
                                            className={`transform transition-transform duration-300 flex-shrink-0 ${activeIndex === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                        {item.question}
                                    </h2>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index
                                            ? 'max-h-96 opacity-100 mt-4'
                                            : 'max-h-0 opacity-0 mt-0'
                                        }`}
                                >
                                    <div className='flex items-center justify-center w-full max-w-[600px] max-lg:max-w-[500px] max-md:max-w-full pl-10 max-md:pl-6 max-sm:pl-4'>
                                        <p className='text-base max-md:text-sm leading-relaxed'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doubt