import React, { useState } from 'react';
import logo from '../media/Logo.png';
import home from '../media/Home/Home.png';
import info from '../media/Info/Info.png';
import projects from '../media/Projects/Projects.png';
import { burgermenu, cross } from '../media/Burgir/';

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] px-6 flex justify-between items-center bg-color1 text-gray-100">
            <div className="w-52 h-full flex items-center">
                <a href="">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            {/* Menu */}
            <div>
                <ul className="flex place-items-center hidden md:flex">
                    <li className="flex items-center">
                        <a href="">
                            <img className="pr-2 h-5" src={home} alt="" />
                        </a>
                        <a href="">Home</a>
                    </li>
                    <li className="pl-12 flex items-center">
                        <a href="">
                            <img className="pr-2 h-5" src={info} alt="" />
                        </a>
                        <a href="">About</a>
                    </li>
                    <li className="pl-12 pr-6 flex items-center">
                        <a href="">
                        <img className="pr-2 h-5" src={projects} alt="" />
                        </a>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </div>
            {/* BurgerMenu */}
            <div onClick={handleClick} className="md:hidden flex items-center z-10">
                {!nav ? <burgermenu /> : <cross />}
            </div>
            {/* MobileMenu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#252725e3] flex flex-col justify-center items-center'}>
                <li className="py-4 text-4xl">Home</li>
                <li className="py-4 text-4xl">About</li>
                <li className="py-4 text-4xl">Projects</li>
            </ul>

        </div>
    );
}

export default Header;