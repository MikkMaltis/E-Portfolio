import React from 'react';
import MyPicture from '../media/MyPicture/Haapsalu.jpg';

function Hero() {
    return (
        <div className='flex justify-center'>
            <div className="px-6 py-12 font-Kanit max-w-xl flex justify-center">
                <div className='md:flex block'>
                    <div className='rounded-2xl p-8 w-96 ml-28 bg-[url("https://images.unsplash.com/photo-1575722290270-626b0208df99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'>
                        <h1 className="text-4xl text-center text-[#9c9faa]"><span className='text-[#e4d7d7]'>Hello, I am Mikk.</span><br /> <br /> Im a web developer.</h1>
                        <div className="flex justify-center">
                            <a href="mailto:maltismikk@gmail.com">
                                <button className="mt-6 rounded relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#84837e] font-medium text-color6 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-color6 before:duration-100 before:ease-linear hover:bg-color6 hover:text-[#84837e] hover:shadow-[#84837e] hover:before:border-[25px]">
                                    <span className="relative z-10">
                                        Get in touch
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='group md:ml-0 ml-28'>
                        <div className="bg-color5 h-[625px] w-[485px] relative overflow-hidden rounded-2xl transition-all duration-500 [transition-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <img className='object-cover shadow-xl w-full h-full' src={MyPicture} alt="" />
                            <div className='absolute inset-0 h-full w-full rounded-xl bg-color4/50 text-center text-color5 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                Hello! <br /> Welcome to my portfolio.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;