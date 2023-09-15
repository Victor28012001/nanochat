import React from 'react';
import whiteStar from '../Images/white-star.png'
import blueStar from '../Images/blue-star.png';

function Pricing() {

    
    return (
        <section className='flex flex-col gap-10 items-center justify-center mt-12'>
            <div className="flex gap-0 justify-center items-center w-2/5  rounded-lg  h-[3rem] max-[1174px]:w-1/2 max-[768px]:w-[70%] max-[500px]:w-[80%] max-[400px]:w-[95%]">
                <input type="submit" className="bg-[#1B72FC] rounded-lg  w-1/2  h-full outline-none text-center  cursor-pointer  text-[#ffffff] relative left-3" value="Monthy" />
                <input type="submit" className="bg-[#DAEBFF] rounded-lg  w-1/2  h-full outline-none cursor-pointer text-center text-[#1B72FC] border-[#1B72FC]  " value="Yearly" />
            </div>
            <div className='flex gap-20 flex-wrap items-center justify-center'>

                <div className=' border border-[#1B72FC] w-72 h-96 rounded-md flex items-center flex-col gap-5 justify-center bg-[#1B72FC] text-[white]'>
                    <div className='flex justify-center'>
                        <img src={whiteStar} className='' />
                    </div>
                    <div className=''>
                        <ul className='flex flex-col justify-center items-start text-sm leading-10'>
                            <li >Unlimited</li>
                            <li>Unlimited</li>
                            <li>Unlimited Chats</li>
                            <li>Unlimited Agents</li>
                            <li>Monthly</li>
                        </ul>
                        <p className='text-[1.5rem] font-bold'>Free</p>
                    </div>
                    <a href="" className='border-2 border-[white] py-2 px-5 text-[white]'>Get Started</a>
                </div>

                <div className=' border border-[#1B72FC] w-72 h-96 rounded-md flex items-center flex-col gap-5 justify-center '>
                    <div className='flex justify-center gap-4'>
                        <img src={blueStar} className='' />
                        <img src={blueStar} className='' />
                    </div>
                    <div className=''>
                        <ul className='flex flex-col justify-center items-start text-sm leading-10'>
                            <li >Unlimited</li>
                            <li>Unlimited</li>
                            <li>Unlimited Chats</li>
                            <li>Unlimited Agents</li>
                            <li><span className='text-[2rem]'>$29.</span><span>55</span></li>
                            <li>Monthly</li>
                        </ul>
                    </div>
                    <a href="" className='border-2 bg-[#1B72FC] py-2 px-5 text-[white]'>Get Started</a>
                </div>

                <div className=' border-2 border-[#1B72FC] w-72 h-96 rounded-md flex items-center flex-col gap-5 justify-center'>
                    <div className='flex justify-center relative gap-10'>
                        <img src={blueStar} className='absolute bottom-2' />
                        <img src={blueStar} className='' />
                        <img src={blueStar} className='' />
                    </div>
                    <div className=''>
                        <ul className='flex flex-col justify-center items-start text-sm leading-10 '>
                            <li >Unlimited</li>
                            <li>Unlimited</li>
                            <li>Unlimited Chats</li>
                            <li>Unlimited Agents</li>
                            <li><span className='text-[2rem]'>$29.</span><span>55</span></li>
                            <li>Monthly</li>
                        </ul>

                    </div>
                    <a href="" className=' bg-[#1B72FC] py-2 px-5 text-center self-center text-[white]'>Get Started</a>

                </div>


            </div>
        </section>
    );

}

export default Pricing;