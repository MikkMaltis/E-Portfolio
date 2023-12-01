import React, { useState } from 'react';
import Logo from '../media/Logo.png';
import Home from '../media/Home/Home.png';
import Info from '../media/Info/Info.png';
import Projects from '../media/Projects/Projects.png';


const Header = () => {
    return (
        <div className="w-full h-[80px] px-6 flex justify-between items-center bg-color1 text-gray-100">
            <div className="w-52 h-full flex items-center">
                <a href="">
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            {/* Menu */}
            <div>
                <ul className="flex place-items-center hidden md:flex">
                    <li className="flex items-center">
                        <a href="">
                            <img className="pr-2 h-5" src={Home} alt="" />
                        </a>
                        <a href="">Home</a>
                    </li>
                    <li className="pl-12 flex items-center">
                        <a href="">
                            <img className="pr-2 h-5" src={Info} alt="" />
                        </a>
                        <a href="">About</a>
                    </li>
                    <li className="pl-12 pr-6 flex items-center">
                        <a href="">
                        <img className="pr-2 h-5" src={Projects} alt="" />
                        </a>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </div>
            {/* BurgerMenu */}

            {/* MobileMenu */}


        </div>
    );
}

export default Header;