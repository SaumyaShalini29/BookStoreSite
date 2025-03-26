import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Course from "./components/Course";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./Contact/Contact";
import About from "./About/About";
import PaidCourses from "./pages/PaidCourses";
import Dashboard from "./components/Dashboard";
import { Toaster } from "react-hot-toast";
// 🔒 Protected Route Component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("Users"); // Check if user is logged in
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🔒 Protected Route for Paid Courses */}
        <Route path="/paid" element={<ProtectedRoute element={<PaidCourses />} />} />
      </Routes>
    </div>
  );
}

export default App;
