import React, { useState } from 'react'
import { MdOutlineEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/auth/login', { email, password }, config);
    console.log(res.data.token);
    localStorage.setItem('token',res.data.token);
    navigate("/home");
    setEmail('');
    setPassword('');
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
          <div className="relative my-3">
            <input
              type="email"
              required
              name='email'
              onChange={(e) => setEmail(e.target.value)}
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
              minLength={5}
              maxLength={8}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
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
        </form>
      </div>
    </div>
  )
}

export default Login;


