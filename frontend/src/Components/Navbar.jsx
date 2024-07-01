import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import axios from "axios";
import { BACKEND_URL } from "../../constants";

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [logoRoute, setLogoRoute] = useState("/");
  axios.defaults.withCredentials = true;

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const res = await axios.get(`${BACKEND_URL}/auth`, {
        headers: { Authorization: `notes ${token}` },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
      setLogoRoute("/home");
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    setMenu(false);
  };

  return (
    <div className="flex justify-between items-center w-full lg:px-10 md:px-10 sm:px-8 px-4 shadow-lg">
      <section className="flex items-center gap-4">
        <Link to={logoRoute}>
          <img className="h-12 w-36 my-5" src="./logo.svg" alt="logo" />
        </Link>
      </section>
      <FiMenu
        onClick={() => setMenu(true)}
        className="text-3xl cursor-pointer md:hidden"
      />
      {user ? (
        <section className="md:flex justify-center items-center gap-4 drop-shadow-xl hidden">
          <p>
            Welcome, <span className="font-bold font-mono">{user.name}</span>
          </p>
          <Link to="/updateProfile" className="hover:text-blue-400 underline">
            Update Profile
          </Link>
          <button
            onClick={logOut}
            className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md"
          >
            Log out
          </button>
        </section>
      ) : (
        <section className="md:flex justify-center items-center gap-4 hidden">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md"
          >
            Signup
          </button>
        </section>
      )}
      <div
        className={`fixed h-full w-screen z-40 lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all ${
          isMenu ? "-translate-y-0" : "-translate-y-full"
        }`}
      >
        <section className="bg-white h-auto flex-col p-8 gap-4 z-50 flex w-full">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="text-3xl mt-0 mb-4 cursor-pointer absolute right-2 top-2"
          />
          {user ? (
            <div className="flex flex-col justify-center items-center gap-4 drop-shadow-xl">
              <p>
                Welcome,{" "}
                <span className="font-bold font-mono">{user.name}</span>
              </p>
              <Link
                to="/updateProfile"
                onClick={() => {
                  setMenu(false);
                }}
                className="hover:text-blue-400 underline"
              >
                Update Profile
              </Link>
              <button
                onClick={logOut}
                className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-20 p-2 rounded-md"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex justify-center flex-col gap-3 items-center">
              <button
                onClick={() => {
                  navigate("/login");
                  setMenu(false);
                }}
                className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-64 p-2 rounded-md"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setMenu(false);
                }}
                className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 self-center w-64 p-2 rounded-md"
              >
                Signup
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
