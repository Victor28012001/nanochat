import React from "react";
import { useState } from 'react';
import assetImg from '../Images/asset.png';
import Layout from '../component/Layout';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../Images/Background.png';
import Signup from "../routes/Signup";
// import 'tailwindcss/tailwind.css';

function SignUp() {
    const location = useLocation();
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = () => {
        setIsRegistered(true);
    };
    return (
        <>
            {!isRegistered ? (
                <Layout>
                    <div className=" mt-40  bg-cover bg-center h-100 w-100" style={{ backgroundImage: `url(${backgroundImage})` }}>

                        <div className="flex flex-col gap-10 justify-center items-center ">
                            <div className="flex gap-0 justify-center items-center w-[50%]  rounded-lg  h-[3rem] max-[1174px]:w-1/2 max-[768px]:w-[70%] max-[500px]:w-[80%] max-[400px]:w-[95%]">
                                <Link to="/SignUp" className="bg-[#1B72FC] rounded-lg  w-1/2  h-full outline-none text-center  cursor-pointer  text-[#ffffff] relative left-2"><input type="submit" className="h-full cursor-pointer" value="Get Started" /> </Link>
                                <Link to="/SignIn" className="bg-[#DAEBFF] rounded-lg  w-1/2  h-full outline-none cursor-pointer text-center text-[#1B72FC] border-[#1B72FC]"><input type="submit" className="h-full cursor-pointer" value="Sign In" /> </Link>
                            </div>
                            <div className="w-[50%] flex flex-col  max-[1174px]:w-1/2 max-[768px]:w-[68%] max-[500px]:w-[77%] max-[400px]:w-[93%]">
                                <label for='email' className="text-[#1B72FC] font-bold ">Email</label>
                                <input type="text" className="bg-[#DAEBFF] rounded-md  outline-none px-2  h-[3rem] max" />
                            </div>
                            <div className="w-[50%]  flex flex-col  max-[1174px]:w-1/2 max-[768px]:w-[68%] max-[500px]:w-[77%] max-[400px]:w-[93%]">
                                <label for='password' className="text-[#1B72FC] font-bold">Password</label>
                                <input type="text" className="bg-[#DAEBFF] rounded-md w-full h-[3rem] outline-none px-2  " />
                            </div>

                            <input type="submit" className="text-[white] rounded-md w-[49%]  h-[3rem] outline-none px-2 bg-[#1B72FC] cursor-pointer  max-[1174px]:w-1/2 max-[768px]:w-[68%] max-[500px]:w-[77%] max-[400px]:w-[93%]" value='Sign Up' onClick={handleRegister} />
                            <div className=" text-[#1B72FC]  text-right w-[49%]"><a href=''>Forgot password?</a></div>

                        </div>
                        <div className="relative  h-96 mb-16 mt-16">
                            <img src={assetImg} className="absolute right-0" />
                        </div>
                    </div>
                </Layout>
                ):(<Signup />)}
        </>
    );
}

export default SignUp;