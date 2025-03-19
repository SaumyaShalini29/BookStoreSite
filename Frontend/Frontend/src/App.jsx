import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Course from './components/Course';
import Signup from './components/signup';

function App() {
  console.log("App component is rendering!"); // ✅ Debugging log

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
