// Home.js
import React from 'react';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Attendance from './pages/Attendance';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/Admin" element={<Admin />} /> */}
          <Route path="/" element={<Teacher />} />
          {/* <Route path="/pages/Student" element={<Student />} /> */}
          <Route path="/pages/Attendance" element={<Attendance />} />
          <Route path="/pages/Teacher" element={<Teacher />} />
        </Routes>
       {/* <Teacher /> */}
       {/* <Attendance /> */}
      </div>
    </Router>


  );
}

export default App;