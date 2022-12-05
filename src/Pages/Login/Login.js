import React, { useContext } from 'react';
import image from '../../assets/login-register.png'
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Succesfull')
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }
    return (

        <div className="flex flex-wrap w-full">
            <div className="w-1/2 p-8">
                <img className="hidden w-full md:block" src={image} alt='' />
            </div>
            <div className="flex flex-col w-full md:w-1/2 shadow-2xl min-h-screen my-4 p-4">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center font-bold">
                        Log In Form
                    </p>
                    <form onSubmit={handleLogin} className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <input type="email" name='email' className="flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Email Address" required />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4 mb-12">
                            <div className="flex relative ">
                                <input type="password" name='password' className=" flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write Password" required />
                            </div>
                            <p className='text-sm mt-2'>Your Password Must Be 8 Characters</p>
                        </div>
                        <button type="submit" className="w-[50%] mx-auto rounded-lg px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in bg-[#3B8BEA] shadow-md hover:text-white hover:bg-[#1678CB] focus:outline-none focus:ring-2">
                            <span className='flex items-center justify-center'>
                                Log In <FaArrowRight className='ml-3' />
                            </span>
                        </button>
                    </form>
                    <div className="pt-12 pb-12 text-center">
                        <p>
                            Don&#x27;t have an account?
                            <Link to="/register" className="font-semibold text-[#1678CB] capitalize ml-3">
                                SIGNUP HERE!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;