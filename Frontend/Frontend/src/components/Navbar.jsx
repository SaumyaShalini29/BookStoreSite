import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const element = document.documentElement;
    theme === "dark" ? element.classList.add("dark") : element.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><Link to="/" className="text-black dark:text-white">Home</Link></li>
      <li><Link to="/course" className="text-black dark:text-white">Course</Link></li>
      <li><Link to="/contact" className="text-black dark:text-white">Contact</Link></li>
      <li><Link to="/about" className="text-black dark:text-white">About</Link></li>
    </>
  );

  return (
    <div className={`flex justify-between items-center max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
      ${sticky ? "shadow-md bg-base-300 dark:bg-slate-700 dark:text-white" : "dark:bg-slate-800 dark:text-white"}
    `}>
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-900 dark:text-white rounded-box z-50 mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold cursor-pointer">BookStore</Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-5">
        <label className="input dark:bg-slate-800 dark:text-white">
          <svg className="h-[1em] opacity-50 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" className="text-black dark:text-white dark:bg-slate-800" />
        </label>

        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="synthwave" />
          <svg className="swap-off h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Z" />
          </svg>
          <svg className="swap-on h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36A10.14,10.14,0,1,0,22,14.05Z" />
          </svg>
        </label>

        {/* Login Button */}
        <button onClick={() => document.getElementById("my_modal_3").showModal()} className="bg-black text-white px-2 py-2 rounded-md hover:bg-gray-800 dark:bg-slate-900">
          Login
        </button>
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
