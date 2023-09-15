import React from 'react';
// import NanoChat from './NanoChat';
import pics from "../Images/footer-logo.png";
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'
const Footer = () => {

    return (
        <footer className=''>
            <div className='grid justify-center place-items-center content-center grid-rows-1 grid-cols-4 text-[white]
             bg-[#3B8CF7] py-10 mt-10 border-t-8 border-[#17106B] max-[768px]:grid-rows-2 max-[768px]:grid-cols-2  
            '>
                <ul className='leading-8'>
                    <li><a href='' className='font-extrabold'>Product</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href=''>API integration</a></li>
                    <li><a href=''>Application</a></li>
                    <li><a href=''>Vitual Assitant</a></li>
                </ul>
                <ul className='leading-8 '>
                    <li><a href='' className='font-extrabold'>About Us</a></li>
                    <li><a href=''>Team</a></li>
                    <li><a href=''>Developers</a></li>
                    <li><a href=''>Terms of Service</a></li>
                    <li><a href=''>Privacy Policy </a></li>
                    <li><a href=''>Contact Us</a></li>

                </ul>
                <ul className='leading-8 '>
                    <li><a href='' className='font-extrabold'>Product</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href=''>API integration</a></li>
                    <li><a href=''>Application</a></li>
                    <li><a href=''>Vitual Assitant</a></li>
                </ul>
<div className='flex flex-col items-center gap-8'>
                <ul className="flex gap-3 items-center max-[768px]:col-start-1 max-[768px]:col-end-2  max-[768px]:row-start-1 max-[768px]:row-end-2">
                    <img src={pics} className='w-10 h-10' />
                    <ul className="flex flex-col">
                        <li className="text-[white] font-bold text-2xl max-[600px]:text-base">
                            Nano
                        </li>
                        <li className="text-[white] font-bold text-xl max-[600px]:text-sm">
                            Chat
                        </li>
                    </ul>

                </ul>
                <div className='flex gap-2'>
                    <img src={facebook} alt="" className='w-5 h-5' />
                    <img src={twitter} alt="" className='w-5 h-5' />
                    <img src={instagram} alt="" className='w-5 h-5' />
                </div>

                </div>
            </div>
            <ul className='bg-[#3B8CF7] h-20 relative w-full'>
                <li className='bg-[white] h-1 w-3/4 absolute left-[50%] top-0 translate-x-[-50%]'></li> <br />
                <li className='absolute left-[50%]  translate-x-[-50%] text-[white]'>Nano chat @ <time>2023</time></li>
            </ul>
        </footer>
    );
};

export default Footer;