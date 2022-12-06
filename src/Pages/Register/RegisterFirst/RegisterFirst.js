import React, { useContext, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const RegisterFirst = () => {
    const { setFirstName, setLastName } = useContext(AuthContext)
    const [firstName, setFirstNameFromInput] = useState('')
    const [lastName, setLastNamFromInput] = useState('')



    setFirstName(firstName)
    setLastName(lastName)

    return (
        <div className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" onChange={(e) => setFirstNameFromInput(e.target.value)} name='firstName' className="flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write First Name" />
                </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">

                    <input type="text" onChange={(e) => setLastNamFromInput(e.target.value)} name='lastName' className="flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Last Name" />
                </div>
            </div>
            {
                (firstName?.length === 0 || lastName?.length === 0) ?
                    <button className='btn w-[50%] mx-auto' disabled >Next</button>
                    :
                    <button type="submit" className="w-[50%] mx-auto rounded-lg px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in bg-[#3B8BEA] shadow-md hover:text-white hover:bg-[#1678CB] focus:outline-none focus:ring-2">
                        <Link to='registersecond' className='flex items-center justify-center'>
                            Next Step <FaArrowRight className='ml-3' />
                        </Link>
                    </button>
            }
            <div className="pt-12 pb-12 text-center">
                <p>
                    Already have an account?
                    <Link to="/login" className="font-semibold text-[#1678CB] capitalize ml-3">
                        LOGIN HERE!
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default RegisterFirst;