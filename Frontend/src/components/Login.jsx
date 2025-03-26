import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:4001/user/login", data);
      console.log("Server Response:", res.data); // Debugging log

      if (res.data.token) {
        toast.success("Login Successful!");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/paid"); // ✅ Redirecting to /paid
      } else {
        console.error("Token missing in response. Login denied!");
        toast.error("Login failed: No token received.");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data);
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-black dark:text-white">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700"
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-black dark:text-white">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700"
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Signup Link */}
          <p className="mt-2 text-center">
            Not registered?
            <Link to="/signup" className="underline text-blue-500 cursor-pointer ml-1">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
