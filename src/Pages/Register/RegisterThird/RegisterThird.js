import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const RegisterThird = () => {
    const navigate = useNavigate()
    const { userDetails, signUp } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('')

    const handleFormSubmit = (e) => {
        setPasswordError('')
        e.preventDefault()
        const form = e.target
        const password = form.password.value;
        if (!/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}$/.test(password)) {
            setPasswordError('Please Create A Strong Password With UpperCase, LowerCase, Number And Minimum 8 Characters');
            return;
        }
        signUp(userDetails?.email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Registration Successfull')
                updateProfile(user, {
                    displayName: userDetails.fullName
                })
                    .then(() => {
                        // Profile updated!
                        const date = new Date().toLocaleDateString()
                        saveUserToDb(userDetails, password, date)
                        toast.success('Profile Updated')
                    }).catch((error) => {
                        // An error occurred
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                    });
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)

            })
        form.reset()
    }
    const saveUserToDb = (userDetails, password, date) => {
        const registerData = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            phone: userDetails.phone,
            email: userDetails.email,
            password,
            date
        }
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: userDetails.email }),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // set localStorage
                        localStorage.setItem('token', data.token)
                    })
                navigate('/')
                console.log(data)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="password" name='password' className="flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Write A Password" required />
                </div>
            </div>
            <p className='text-red-600'>{passwordError}</p>
            <div className='flex items-center mt-4'>
                <Link to='../registersecond' className='font-bold text-gray-500'>Back</Link>
                <button type="submit" className="w-[50%] mx-auto rounded-lg px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in bg-[#3B8BEA] shadow-md hover:text-white hover:bg-[#1678CB] focus:outline-none focus:ring-2">
                    <span className='flex items-center justify-center'> Sign Up <FaArrowRight className='ml-3' /></span>
                </button>
            </div>
        </form>
    );
};

export default RegisterThird;