import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => (
  <nav>
    <NavLink to="/" className="logo">
      Logo
    </NavLink>

    <ul>
      <li>
        <NavLink to="/rockets">Rockets</NavLink>
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
