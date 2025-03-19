import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const modalRef = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    modalRef.current.close();  // Close modal after submission
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Open Modal Button */}
      <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => modalRef.current.showModal()}>
        Open Modal
      </button>

      {/* Modal Dialog */}
      <dialog ref={modalRef} className="modal border-2 rounded-md p-6 bg-white text-black dark:bg-gray-900 dark:text-white shadow-lg">
        <div className="modal-box relative">
          {/* Close Button */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white" onClick={() => modalRef.current.close()}>
            ✕
          </button>

          <h3 className="font-bold text-lg text-center">Login</h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-black dark:text-white" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: "This field is required" })}
                className="w-full px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-800"
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-black dark:text-white" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: "This field is required" })}
                className="w-full px-3 py-2 border rounded-md outline-none text-black dark:text-white dark:bg-gray-800"
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            {/* Submit & Signup Link */}
            <div className="flex flex-col items-center">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="mt-2 text-black dark:text-white">
                Not registered?
                <Link to="/signup" className="underline text-blue-500 cursor-pointer ml-1">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
