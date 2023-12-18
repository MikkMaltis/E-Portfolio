import React from 'react';
import MyPicture from '../media/MyPicture/Mikupoiss.jpg';

function Hero() {
    return (
        <div className='flex justify-center'>
            <div className="px-6 py-12 font-Kanit max-w-xl flex justify-center">
                <div className="rounded-2xl p-8 w-96 ml-28 bg-[#bb9f9f]">
                    <h1 className="text-4xl text-center text-color8">Hello, I am Mikk.<br /> <br /> Im a web developer.</h1>
                    <div className="flex justify-center">
                        <a href="mailto:maltismikk@gmail.com">
                            <button className="mt-6 rounded relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#E4BF3B] font-medium text-color6 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-color6 before:duration-100 before:ease-linear hover:bg-color6 hover:text-[#E4BF3B] hover:shadow-[#E4BF3B] hover:before:border-[25px]">
                                <span className="relative z-10">
                                    Get in touch
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex justify-end w-full pr-4'>
                    <div className="bg-color5 h-[625px] w-[485px] relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
                        <img src={MyPicture} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;