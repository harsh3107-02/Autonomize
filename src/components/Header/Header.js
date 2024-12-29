import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>GitHub Explorer</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
