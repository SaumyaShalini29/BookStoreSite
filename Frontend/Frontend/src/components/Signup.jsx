import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const modalRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <dialog ref={modalRef} className="border-2 p-6 rounded-md shadow-lg bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white">
              ✕
            </Link>
            <h3 className="font-bold text-lg text-center">Signup</h3>

            {/* Name Input */}
            <div className="mt-4 space-y-2">
              <label className="block text-black dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-800"
                {...register("Name", { required: "This field is required" })}
              />
              {errors.Name && <span className="text-sm text-red-500">{errors.Name.message}</span>}
            </div>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <label className="block text-black dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-800"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <label className="block text-black dark:text-white" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-800"
                {...register("password", { required: "This field is required" })}
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            {/* Signup Button */}
            <div className="mt-4 flex flex-col items-center">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="mt-2 text-black dark:text-white">
                Have an Account?
                <Link to="/" className="underline text-blue-500 cursor-pointer ml-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
