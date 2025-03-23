import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/user/signup", data);
      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      navigate("/login"); // Redirect to login after signup
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">Create an Account</h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-black dark:text-white">Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 text-black dark:text-white"
              {...register("name", { required: "This field is required" })}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-black dark:text-white">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 text-black dark:text-white"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-black dark:text-white">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 text-black dark:text-white"
              {...register("password", { required: "This field is required" })}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {/* Signup Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 duration-200">
            Signup
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="mt-4 text-center text-black dark:text-white">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="underline text-blue-500">
            Login
          </button>
        </p>

        {/* Theme Toggle */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            {theme === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;  