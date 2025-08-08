import React from 'react';

const Header: React.FC = () => (
  <header>
    <h1>Lara Ismael</h1>
    <nav aria-label="main-navigation">
      <ul>
        <li>
          <a href="about">About</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
