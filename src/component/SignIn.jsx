import React from "react";
import assetImg from '../Images/asset.png';
// import Communicate from "./Communicate";

function SignIn() {

    return (
        <div className="mt-24">

            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="flex gap-0 justify-center items-center w-1/3 border-2 border-[#1B72FC] rounded-md">
                    <input type="text" className="bg-[#DAEBFF] rounded-sm  w-1/2  h-10 outline-none text-center placeholder-[#1B72FC]" placeholder="Get started" />
                    <input type="text" className="bg-[#1B72FC] rounded-sm rounded-l-none w-1/2  h-10 outline-none  text-center placeholder-[#ffffff] " placeholder="Sign in" />
                </div>
                <div className="w-1/3 flex flex-col">
                    <label for='email' className="text-[#1B72FC] font-bold">Email</label>
                    <input type="text" className="bg-[#DAEBFF] rounded-md w-full h-10 outline-none px-2" />
                </div>
                <div className="w-1/3 flex flex-col">
                    <label for='email' className="text-[#1B72FC] font-bold">Password</label>
                    <input type="text" className="bg-[#DAEBFF] rounded-md w-full h-10 outline-none px-2" />
                </div>

                <input type="submit" className="text-[white] rounded-md w-1/3 h-10 outline-none px-2 bg-[#1B72FC] cursor-pointer" value='Sign In' />
                <div className=" text-[#1B72FC] w-1/3 text-right"><a href=''>Forgot password?</a></div>

            </div>
            <div className="relative  h-96 mb-16 mt-16">
                <img src={assetImg} className="absolute right-0" />
            </div>
        </div>
    );
}

export default SignIn;