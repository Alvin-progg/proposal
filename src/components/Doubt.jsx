import React from 'react'
import DoubtIcon from '../assets/icons/doubt.svg'
import { AiOutlineMinus } from "react-icons/ai";
const Doubt = () => {
    return (
        <section className='flex w-full justify-center '>
            <img src={DoubtIcon} alt="Doubt Icon" loading='lazy' className='h-[530px] w-[530px]' />
            <div>
                <div className='flex flex-col gap-3.5'>
                    <p className='flex items-center text-bg2-600 gap-3.5 '>
                        <AiOutlineMinus />
                        Have a Doubt?
                    </p>
                    <h2 className='font-semibold text-4xl'>Frequently Asked Question</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Doubt