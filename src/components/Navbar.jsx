import React from 'react';
import attendeeLogo from '../assets/Attendee_nobg.png';
import { NavLink } from 'react-router-dom'; // Import NavLink for active styling

const Navbar = () => {
  const activeStyle = { color: 'white', textDecoration: 'none' };
  const noActiveStyle = { color: 'lightgray', textDecoration: 'none' };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-none text-white">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={attendeeLogo} alt="Attendee Logo" width="40" height="34" style={{ marginTop: '7px' }} />
          Attendee
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <NavLink className="nav-link" to="../pages/Home" style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="../pages/Admin" style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>
              Admin
            </NavLink> */}
            <NavLink className="nav-link" to="../pages/Teacher" style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>
              Teacher
            </NavLink>
            {/* <NavLink className="nav-link" to="../pages/Student" style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>
              Student
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
