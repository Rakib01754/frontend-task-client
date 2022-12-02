import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RegisterSecond = () => {
    return (
        <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="tel" className="flex-1 appearance-none border-b-2 border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Mobile Number" />
                </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                    <input type="email" className=" flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Email Address" />
                </div>
            </div>
            <button type="submit" className="w-[50%] mx-auto rounded-lg px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in bg-[#3B8BEA] shadow-md hover:text-white hover:bg-[#1678CB] focus:outline-none focus:ring-2">
                <Link to='../registerthird' className='flex items-center justify-center'> Next Step <FaArrowRight className='ml-3' /></Link>
            </button>
        </form>
    );
};

export default RegisterSecond;