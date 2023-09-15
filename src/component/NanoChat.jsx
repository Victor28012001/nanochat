import React from "react";
import pics from "../Images/logo.png";

function NanoChat(props){
    
    return(
        <ul className="flex gap-3 items-center max-[768px]:col-start-1 max-[768px]:col-end-2  max-[768px]:row-start-1 max-[768px]:row-end-2">
        <img src={pics} className='w-10 h-10' />
        <ul className="flex flex-col">
            <li className="text-[#17106B] font-bold text-2xl max-[600px]:text-base">
                Nano
            </li>
            <li className="text-[#3592FF] font-bold text-xl max-[600px]:text-sm">
                Chat
            </li>
        </ul>
    </ul>
    );
}

export default NanoChat;