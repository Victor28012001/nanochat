// import './Nav.css';
import iconImage from '../Images/arrow.png';
import NanoChat from './NanoChat';
// import Dropdown from './Dropdownmenu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (

        <header className="flex  items-center justify-between w-full px-5 py-5  z-50 bg-[white] max-[768px]:fixed">

            <NanoChat />
            <div className='relative w-full h-full flex justify-between items-center'>
                <span className='hidden absolute max-[768px]:inline text-2xl right-0 bottom-1rem text-[#17106B] cursor-pointer max-[768px]:text-xl' onClick={toggleDropdown}>&#9776;</span>
                {isOpen && (
                    <div className=" w-48 bg-[#3592FF] rounded-md shadow-lg  top-20 right-5 h-72 z-10 fixed">
                        <ul className="w-full h-full flex  flex-col items-center justify-center gap-10">
                            <li className='text-[white] text-lg font-bold max-[600px]:text-base'><Link to="">Our Products</Link></li>
                            <li className='text-[white] text-lg font-bold max-[600px]:text-base'><Link to="/MonthlyPricing">Pricing</Link></li>
                            <li className='text-[white] text-lg font-bold max-[600px]:text-base'><Link to="/SignIn">Login</Link> </li>
                            <li className='text-white text-lg font-bold max-[600px]:text-base '><Link to="/SignUp">Get Started</Link></li>
                        </ul>
                    </div>
                )}
            </div>
            <nav className='flex'>
                <ul className='flex gap-10 text-base  max-[768px]:hidden  w-[30rem] justify-end'>
                    <ul className='flex items-center gap-1 cursor-pointer '>
                        <li className='text-[#17106B] text-lg font-bold max-[600px]:text-base'><Link to="">Our Products</Link></li>
                        <img src={iconImage} alt="arrow" className="h-2 w-2" />
                    </ul> 
                    <ul className='flex items-center gap-1  cursor-pointer'>
                        <li className='text-[#17106B] text-lg font-bold max-[600px]:text-base'><Link to="/MonthlyPricing">Pricing</Link></li>
                        <img src={iconImage} alt="arrow" className="h-2 w-2 " />
                    </ul>
                    <ul className='flex items-center cursor-pointer'>
                        <li className='text-[#17106B] text-lg font-bold max-[600px]:text-base'><Link to="/SignIn">Login</Link> </li>
                    </ul>
                    <ul className='flex cursor-pointer'>
                        <li className='text-white text-lg font-bold max-[600px]:text-base py-2 px-2  bg-[#3592FF] rounded-lg'><Link to="/SignUp">Get Started</Link></li>
                    </ul>
                    
                </ul>
                {/* <Dropdown/> */}
            </nav>
        </header>


    );
};

export default Header;
