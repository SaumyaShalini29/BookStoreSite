import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  console.log("✅ Signup Component Rendered");

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);
      console.log(data);

      if (res.data) {
        toast.success("Signup Successfully!");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        
        // Show alert after successful signup
        alert("Signup successful! Redirecting to login page...");

        // Redirect to login page
        navigate("/login");
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || "Signup failed"));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              {...register("fullname", { required: "Full Name is required" })}
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Signup Button (Pink) */}
          <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-700">
            Signup
          </button>
        </form>

        {/* Login Link (Styled Like Login Page) */}
        <p className="mt-2 text-center text-black">
          Already registered?  
          <Link to="/login" className="underline text-blue-500 cursor-pointer ml-1">Login</Link>
        </p>

        {/* Back to Home Button */}
        <button 
          onClick={() => navigate("/")}
          className="w-full mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Signup;  