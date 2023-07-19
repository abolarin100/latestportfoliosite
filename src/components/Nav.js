import React from 'react';
import '../css/Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='navbar'>
          <a href="#home" className="nav__link">Home</a>
          <a href="#about" className="nav__link">About</a>
          <a href="#projects" className="nav__link">Projects</a>
          <a href="#contact" className="nav__link">Contact</a>
        </nav>
        </div>
    );
}

export default Nav;
