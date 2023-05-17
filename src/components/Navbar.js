import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => (
  <nav>
    <div className="logos">
      <img className="logo-img" src="/planet3.png" alt="logo" />
      <h1 className="logo">Space Travelers &apos; Hub</h1>
    </div>

    <ul>
      <li>
        <NavLink className="active" to="/rockets">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profiles">My profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
