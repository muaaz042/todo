import React, { useEffect } from 'react';
import AOS from 'aos';


const Card = ({ span, title, description, icon }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div data-aos='fade-up' className='grid lg:grid-cols-2 grid-cols-1 rounded-3xl bg-white shadow-2xl md:p-8 p-2 w-full border-2 border-blue-600'>
            <div className='p-2 sm:p-10 flex flex-col flex-wrap sm:gap-10 gap-4'>
                <h1 className='lg:text-4xl text-2xl font-semibold'><span className='text-blue-400'>{span} </span>{title}</h1>
                <p className='text-justify'>{description}</p>
            </div>
            <div className='rounded-xl overflow-hidden w-full h-[22rem] md:h-full'>
                <div className='w-full h-full bg-blue-400 flex justify-center items-center text-[10rem] hover:scale-125 duration-300'>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Card;