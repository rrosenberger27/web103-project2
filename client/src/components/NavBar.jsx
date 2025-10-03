import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

const NavBar = () => {

  return (
    <nav className='navbar'>
      <h1>Sports Tracker</h1>

    <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
    </div>
      
    </nav>
  );
};

export default NavBar;