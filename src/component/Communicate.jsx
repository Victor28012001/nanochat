import React from 'react';
import imgVector from '../Images/Vector1.png';

function Communicate() {
    return (
        <section className="text-center h-64 flex flex-col items-center justify-center gap-3 mt-10 max-[768px]:mt-24">
        <ul className='text-[#17106B] font-extrabold text-3xl leading-[3rem] max-[768px]:text-2xl max-[430px]:text-xl text-center'>
            <li>Communicate With your Clients in <br/>
            Real time With Our</li>
        </ul>
        <ul className="grid grid-rows-2 justify-center place-items-center content-center  h-28">
            <ul className="flex flex-col align-center justify-around">
                <li className='font-extrabold text-[#3592FF] text-3xl max-[768px]:text-2xl max-[430px]:text-xl'>Live Chat</li>
                <li className='text-center'><img src={imgVector} className='w-32 max-[768px]:w-24 ' alt='vector1'  /></li>
            </ul>
            <li><a href="" className="text-white text-lg font-bold max-[600px]:text-base px-3 py-2 bg-[#3592FF] rounded-lg">Get Started</a></li>
        </ul>
    </section>
    );
}
export default Communicate;
