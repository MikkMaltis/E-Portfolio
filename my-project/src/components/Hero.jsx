import React from 'react';
import MyPicture from '../media/MyPicture/Mikupoiss.jpg';

function Hero() {
    return (
        <div className="w-full px-6 py-12 flex justify-start font-Cabin">
            <div className="rounded p-8 w-96 ml-28 bg-color5">
                <h1 className="text-4xl text-center">Hello, I am Mikk.<br /> <br /> Im a web developer.</h1>
                <div className="flex justify-center">
                    <button className="mt-6 rounded relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-color1 font-medium text-color6 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-color6 before:duration-100 before:ease-linear hover:bg-color6 hover:text-color1 hover:shadow-color1 hover:before:border-[25px]">
                        <span className="relative z-10">
                            Get in touch
                        </span>
                    </button>
                </div>
            </div>
            <div className='flex justify-end w-full pr-4'>
                <div className="bg-color5 h-[650px] w-[485px] relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={MyPicture} alt="" />
                </div>
                <div>
                    
                </div>
            </div>

        </div>
    );
}

export default Hero;