import React from 'react'
import DoubtIcon from '../assets/icons/doubt.svg'
import { AiOutlineMinus } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
const Doubt = () => {
    return (
        <section className='flex w-full justify-center '>
            <div className='flex justify-center my-10 gap-3.5'>
                <img src={DoubtIcon} alt="Doubt Icon" loading='lazy' className='h-[530px] w-[530px]' />
                <div>
                    <div className='flex flex-col gap-3.5'>
                        <p className='flex items-center text-bg2-600 gap-3.5 '>
                            <AiOutlineMinus />
                            Have a Doubt?
                        </p>
                        <h2 className='font-semibold text-4xl'>Frequently Asked Question</h2>
                    </div>
                    <div className='my-6'>
                        <div>
                            <h2 className='flex gap-2.5 items-center text-xl'><MdKeyboardArrowDown/> Why do I need a mobile-friendly website?</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Doubt