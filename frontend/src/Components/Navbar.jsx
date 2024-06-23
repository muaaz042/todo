import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center border border-black w-full px-10'>
      <section className='flex items-center gap-4'>
        <Link to={"/"}>
          <img className='h-12 w-36 m-5' src="./src/assets/logo.png" alt="logo" />
        </Link>
      </section>
      <FiMenu
        onClick={() => setMenu(true)}
        className="text-3xl cursor-pointer md:hidden"
      />
      <section className='flex justify-center items-center gap-4'>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md">Login</button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md">Signup</button>
      </section>

      <div
        className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all ${isMenu ? "-translate-y-0" : "-translate-y-full"
          }`}
      >
        <section className="bg-white h-auto flex-col p-8 gap-4 z-50 flex w-full">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="text-3xl mt-0 mb-4 cursor-pointer absolute right-5 top-4"
          />
          <div className='flex justify-center flex-col gap-3 items-center'>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-80 p-2 rounded-md">Login</button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-80 p-2 rounded-md">Signup</button>
          </div>

        </section>
      </div>

      {/* <section className='flex justify-center items-center gap-4 drop-shadow-xl'>
        <p>Welcome, <span className='font-bold font-mono'>Muaaz Ahmad</span></p>
        <Link to="/updateProfile" className='hover:text-blue-400'>Update Profile</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md">Log out</button>
      </section> */}
    </div>
  )
}

export default Navbar;
