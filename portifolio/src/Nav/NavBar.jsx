import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">ArthurJs</a>
      </div>
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleSidebar}>Início</a></li>
          <li><a href="#about" onClick={toggleSidebar}>Sobre</a></li>
          <li><a href="#skills" onClick={toggleSidebar}>Habilidades</a></li>
          <li><a href="#projects" onClick={toggleSidebar}>Projetos</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contato</a></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;