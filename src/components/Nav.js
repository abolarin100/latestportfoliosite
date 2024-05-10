import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import LG from '../assets/logo 2.svg';
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolling, setScrolling] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setScrolling(false);
        } else {
            setScrolling(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };

    // Function to navigate to specific pages with smooth scrolling
    const navigateToPage = (path) => {
        const element = document.getElementById(path.substring(1)); // Assuming IDs are the same as paths
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(path);
        }
        setNav(false); // Close the menu after navigation
    };

    return (
        <div className={`bg-[#e1e3e7] z-50000000 fixed w-full flex justify-between py-2 sm:py-2 md:py-0 lg:py-0 px-2 sm:px-4 md:px-4 lg:px-16 items-center shadow-md border-b border-[#A7AEB91A] bg-opacity-100 opacity-100 
    `}
        >
            <img src={LG} alt="" className='home__img relative left-4 top-2' width='40' height='40' />

            {/* Visible on md and larger screens */}
            <div className='hidden lg:flex  flex-row justify-between  '>
                <ul className='flex flex-row mr-28 px-4 space-x-8  lg:mr-28 md:mr-16'>
                <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l text-black py-8 px-2'
                        
                    >
                       <a href="./"  >Home</a>
                    </li>
                    <li
                       className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                        
                    >
                       <a href="#about"  >About</a>
                    </li>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                      
                    >
                        <a href="#skills"  >Skills</a>
                    </li>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                        
                    >
                       <a href="#projects"  >Projects</a> 
                    </li>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                        
                    >
                       <a href="#contact"  >Contact</a>
                    </li>
                </ul>
            </div>

            {/* Toggleable menu for all screen sizes */}
            <HiMenuAlt3
                onClick={handleNav}
                className='z-20 text-gray-500 cursor-pointer lg:hidden'
                size={25}
            />

            <div
                className={
                    nav
                        ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
                        : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
                }
            >
                <ul className='flex flex-col fixed w-full h-full space-y-4 items-center justify-start mt-12'>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l text-white py-8 px-2'
                        
                    >
                       <a href="#home"  >Home</a>
                    </li>
                    <li
                       className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                        
                    >
                       <a href="#about"  >About</a>
                    </li>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                      
                    >
                        <a href="#skills"  >Skills</a>
                    </li>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                        
                    >
                       <a href="#projects"  >Projects</a> 
                    </li>
                    <li
                        className='hover:text-blue-500 hover:cursor-pointer text-l py-8 px-2'
                        
                    >
                       <a href="#contact"  >Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
