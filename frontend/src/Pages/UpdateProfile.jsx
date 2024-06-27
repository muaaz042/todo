import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser, FaArrowLeft } from "react-icons/fa";
import { MdOutlineEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import axios from 'axios';

const UpdateProfile = () => {
    axios.defaults.withCredentials = true;
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        plainTextPassword: '',
    });
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }
            const res = await axios.get("http://localhost:5000/auth/getUser", {
                headers: { Authorization: `notes ${token}` }
            });
            setUserData(res.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser();
        } else {
            navigate('/login');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:5000/auth/updateUser', userData, {
                headers: { Authorization: `notes ${localStorage.getItem('token')}` }
            });
            navigate('/home');
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <div className='flex justify-center items-center h-[38rem]'>
            <div className='flex flex-col gap-8 lg:w-1/3 md:w-2/3 w-4/5 mx-5 border-2 border-blue-300 p-5 shadow-xl rounded-3xl'>
                <div className='flex justify-between sm:justify-center md:justify-between gap-5 items-center px-10 relative'>
                    <FaArrowLeft
                        onClick={() => {
                            navigate('/home')
                        }}
                        className='absolute left-0 text-xl hover:fill-blue-300' />
                    <div className='rounded-full border-2 border-blue-300 hover:bg-blue-300 flex justify-center items-center'>
                        <FaUser className='text-3xl m-4' />
                    </div>
                    <h1 className='lg:text-2xl md:text-2xl text-lg font-mono font-bold'>Update your profile</h1>
                </div>
                <form className="w-full">
                    <div className="relative my-3">
                        <input
                            type="text"
                            required
                            value={userData.name}
                            name='name'
                            onChange={handleChange}
                            className='outline-blue-800 border-2 text-black font-mono focus:border-background w-full p-2 rounded-md'
                            placeholder="Full name"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <FaRegUser className="h-4 w-4 text-gray-400" />
                        </span>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="email"
                            required
                            value={userData.email}
                            name='email'
                            onChange={handleChange}
                            className='outline-blue-800 border-2 text-black font-mono focus:border-background w-full p-2 rounded-md'
                            placeholder="Email"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <MdOutlineEmail className="h-4 w-4 text-gray-400" />
                        </span>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="password"
                            required
                            value={userData.plainTextPassword}
                            minLength={5}
                            maxLength={8}
                            name='plainTextPassword'
                            onChange={handleChange}
                            className='outline-blue-800 border-2 text-black font-mono focus:border-background w-full p-2 rounded-md'
                            placeholder="Password"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <MdLock className="h-4 w-4 text-gray-400" />
                        </span>
                    </div>


                    <div className="flex items-center justify-center md:justify-start my-3">
                        <button
                            onClick={handleUpdate}
                            className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 w-full p-2 rounded-md">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;