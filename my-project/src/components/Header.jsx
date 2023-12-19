import React, { useContext } from 'react';
import Logo from '../media/Logo.png';
import Home from '../media/Home/Home.png';
import Info from '../media/Info/Info.png';
import Projects from '../media/Projects/Projects.png';
import Mail from '../media/Mail/icons8-mail-100.png';
import Facebook from '../media/Facebook/icons8-facebook-100.png';
import LinkedIn from '../media/LinkedIn/icons8-linkedin-500.png';
import Github from '../media/Github/icons8-github-500.png';
import ReactSwitch from "react-switch";
import { ThemeContext } from '../App';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="w-full h-[80px] px-6 flex justify-between items-center bg-[#3B60E4] text-[#f3f4f6] font-Kanit">
            <div className="w-52 h-full flex items-center">
                <a href="">
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            {/* Menu */}
            <div>
                <ul className="flex place-items-center hidden md:flex">
                    <li className="flex items-center">
                        <div className='flex gap-4 place-items-center pr-4'>
                            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                        </div>
                        <a href="">
                            <img className="pr-2 h-5" src={Home} alt="" />
                        </a>
                        <a href="#home">  
                            Home
                        </a>
                    </li>
                    <li className="pl-12 flex items-center">
                        <a href="">
                            <img className="pr-2 h-5" src={Info} alt="" />
                        </a>
                        <a href="#about">About</a>
                    </li>
                    <li className="pl-12 pr-6 flex items-center">
                        <a href="">
                        <img className="pr-2 h-5" src={Projects} alt="" />
                        </a>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
            {/* BurgerMenu */}

            {/* MobileMenu */}

            {/* Socials */}
            <div className='flex fixed flex-col top-[35%] left-0 pl-2 mt-6'>
                <div className='h-full rounded-2xl bg-color6'>
                    <ul>
                        <li>
                            <a href="mailto:maltismikk@gmail.com">
                                <img className="w-12 mb-2" src={Mail}/> 
                            </a>
                        
                            <a href="https://www.facebook.com/p/Mikk-Maltis-100009786704562/" target="_blank" rel="noopener noreferrer">
                                <img className="w-12 mb-2" src={Facebook}/>
                            </a>

                            <a href="https://www.linkedin.com/in/mikk-maltis-132742268/?originalSubdomain=ee" target="_blank" rel="noopener noreferrer">
                                <img className="w-12 mb-2" src={LinkedIn}/>
                            </a>

                            <a href="https://github.com/MikkMaltis" target="_blank" rel="noopener noreferrer">
                                <img className="w-12 mb-2" src={Github}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;