import React, { useState } from 'react'
import { MdOutlineEmail, MdLock } from "react-icons/md";
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null
  });

  const { email, password, error } = data;


  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setData({ ...data, error: "Email is required" });
      return
    }
    if (!password) {
      setData({ ...data, error: "Password is required" });
      return
    }
    if (password.length < 5 || password.length > 8) {
      setData({ ...data, error: "Password must be 5 - 8 characters" });
      return
    }
    try {
      setData({ ...data, error: null });
      const res = await axios.post('https://localhost:5000/auth/login', { email, password }, config);
      localStorage.setItem('token', res.data.token);
      navigate("/home");
      setData({ ...data, email: '', password: '' });
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }

  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex md:pb-12 flex-wrap lg:items-center text-white">
      <div className="w-11/12 md:w-1/2 bg-[url('./src/assets/login.png')] bg-contain bg-center bg-no-repeat h-[38rem] mt-10">
      </div>

      <div className="w-full md:w-1/2">
        <div className='flex items-center justify-between flex-wrap gap-3 px-7 my-7'>
          <img src="./src/assets/logo.png" alt="" className='w-48' />
          <h1 className='text-5xl text-blue-400'>
            <span className='text-blue-800'>Login </span>
            Here!
          </h1>
        </div>

        <form className="px-16">
          {error ? <p className=' text-red-500'>{error}</p> : null}
          <div className="relative my-3">
            <input
              type="email"
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
              minLength={5}
              maxLength={8}
              name='password'
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
              onClick={handleLogin}
              className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 w-full p-2 rounded-md">Login</button>
          </div>
          <p className='text-black'>Don't have an account <Link className='text-blue-400 underline' to='/signup'>register</Link></p>
        </form>
        
      </div>
    </div>
  )
}

export default Login;


