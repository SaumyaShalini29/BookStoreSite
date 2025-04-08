import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={`flex justify-between items-center max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
      ${sticky ? "shadow-md bg-base-300 dark:bg-slate-700 dark:text-white" : "dark:bg-slate-800 dark:text-white"}`}>
      
      {/* Left Section */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold cursor-pointer">BookStore</Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="text-black dark:text-white">Home</Link></li>
          <li><Link to="/course" className="text-black dark:text-white">Course</Link></li>
          <li><Link to="/contact" className="text-black dark:text-white">Contact</Link></li>
          <li><Link to="/about" className="text-black dark:text-white">About</Link></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-4">
        {/* Creative text element */}
        <div className="hidden md:block text-sm font-semibold italic text-gray-600 dark:text-gray-300">
          🚀 Fueling minds, one book at a time!
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="swap swap-rotate">
          {theme === "light" ? (
            <svg className="h-7 w-7 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Z" />
            </svg>
          ) : (
            <svg className="h-7 w-7 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36A10.14,10.14,0,1,0,22,14.05Z" />
            </svg>
          )}
        </button>

        {/* Login Button */}
        <button onClick={handleLoginClick} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:bg-slate-900">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
