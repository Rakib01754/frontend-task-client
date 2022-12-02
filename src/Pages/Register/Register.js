import React from 'react';
import { Outlet } from 'react-router-dom';
import image from '../../assets/login-register.png'

const Register = () => {
    return (
        <div className="flex flex-wrap w-full">
            <div className="w-1/2 p-8">
                <img className="hidden w-full md:block" src={image} alt='' />
            </div>
            <div className="flex flex-col w-full md:w-1/2 shadow-2xl min-h-screen my-4 p-4">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center font-bold">
                        SignUp Form
                    </p>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Register;