import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Course from './components/Course';
import Login from "./components/Login";
import Signup from './components/signup';
import Contact from './Contact/Contact';
import About from './About/About';
import PaidCourses from "./pages/PaidCourses";

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/paid" element={<PaidCourses />} />
      </Routes>
    </div>
  );
}

export default App;





