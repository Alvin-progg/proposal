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
        <section className='flex w-full justify-center items-center overflow-hidden h-[80vh]'>
            <div className='flex justify-center my-10 gap-10 '>
                <img src={DoubtIcon} alt="Doubt Icon" loading='lazy' className='h-[530px] w-[530px]' />

                <div>
                    <div className='flex flex-col gap-3.5'>
                        <p className='flex items-center text-bg2-600 gap-3.5'>
                            <AiOutlineMinus />
                            Have a Doubt?
                        </p>
                        <h2 className='font-semibold text-4xl'>Frequently Asked Question</h2>
                    </div>

                    <div className='my-6'>
                        {faqData.map((item, index) => (
                            <div key={index} className='border-b border-gray-200 py-4'>
                                <button
                                    aria-label='collapsible button'
                                    onClick={() => toggleItem(index)}
                                    className='w-full text-left'
                                >
                                    <h2 className='flex gap-3.5 items-center text-xl'>
                                        <MdKeyboardArrowDown
                                            className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
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
                                    <div className='flex items-center justify-center w-[600px] pl-10'>
                                        <p>
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