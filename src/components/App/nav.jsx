import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <ul className="container container--space-around">
      <Link to="/">
        <li className="navbar__item">Tasks</li>
      </Link>
      <Link to="/Add">
        <li className="navbar__item">Add</li>
      </Link>
    </ul>
  </nav>
);

export { Nav };
