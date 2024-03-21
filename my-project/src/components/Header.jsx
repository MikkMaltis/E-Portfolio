import React, { useContext, useState} from 'react';
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="w-full h-[80px] sm:px-6 lg:px-8 px-6 flex justify-between items-center bg-[#2b3d7f] text-[#f3f4f6] font-Kanit">
            <div className="w-52 h-full flex items-center">
                <a href="">
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            {/* Regular Menu */}
            <div>
                <div className='hidden lg:block'>
                        <ul className="flex place-items-center">
                    <li className="flex items-center">
                        <div className='flex gap-4 place-items-center pr-5'>
                            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                        </div>
                        <a href="#home">
                            <img className="pr-2 h-5" src={Home} alt="" />
                        </a>
                        <a href="#home">  
                            Home
                        </a>
                    </li>
                    <li className="flex items-center pl-12">
                        <a href="#about">
                            <img className="pr-2 h-5" src={Info} alt="" />
                        </a>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="flex items-center hover:bg-[#202020] pl-12 pr-6 ">
                        <a href="#projects">
                        <img className="pr-2 h-5" src={Projects} alt="" />
                        </a>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                </ul>
                </div>

                
                {/* Hamburger menu */}
                <div className='z-50 lg:hidden' style={{ zIndex: 1000 }}>
                <button onClick={toggleMenu} className='group'>
                    <div className='flex flex-col space-y-1'>
                        <div className='w-6 h-1 bg-color5'></div>
                        <div className='w-6 h-1 bg-color5'></div>
                        <div className='w-6 h-1 bg-color5'></div>
                    </div>
                    {/* Mobile menu */}
                    <ul className={`bg-[#252525] w-screen pb-10 absolute right-0 duration-150 flex flex-col space-y-3 justify-end ${isMenuOpen ? 'top-0' : '-top-full'}`}>
                    <button className='px-10 py-8 relative ml-auto'>
                        <div className='w-6 h-1 rotate-45 absolute bg-color5'></div>
                        <div className='w-6 h-1 -rotate-45 absolute bg-color5'></div>
                    </button>
                    <li className="flex items-center pl-12 hover:bg-[#202020]">
                        <a href="#home">
                            <img className="pr-2 h-5" src={Home} alt="" />
                        </a>
                        <a href="#home">  
                            Home
                        </a>
                    </li>
                    <li className="pl-12 flex items-center py-4 hover:bg-[#202020]">
                        <a href="#about">
                            <img className="pr-2 h-5" src={Info} alt="" />
                        </a>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="pl-12 pr-6 flex items-center hover:bg-[#202020]">
                        <a href="#projects">
                        <img className="pr-2 h-5" src={Projects} alt="" />
                        </a>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                </ul>
                </button>
                </div>

            </div>
            {/* Socials */}
            <div className='flex fixed flex-col top-[35%] left-0 pl-2 mt-6 hidden lg:block'>
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