import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    setIsLoggedIn(true); // Set login state to true after successful login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">Login</h2>

        {isLoggedIn && (
          <div className="text-green-500 text-center mt-2">✅ Successfully logged in!</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="block text-black dark:text-white" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "This field is required" })}
              className="w-full px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-700"
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-black dark:text-white" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: "This field is required" })}
              className="w-full px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-700"
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </div>

          <button type="submit" className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
            Login
          </button>

          <p className="mt-2 text-center text-black dark:text-white">
            Not registered?  
            <Link to="/signup" className="underline text-blue-500 cursor-pointer ml-1">Signup</Link>
          </p>
        </form>

        {/* Paid Courses Button (Only Visible After Login) */}
        {isLoggedIn && (
          <div className="mt-4 text-center">
            <Link to="/paid">
              <button className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200">
                Go to Paid Courses
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
