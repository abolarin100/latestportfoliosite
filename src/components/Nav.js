import React, {useState, useRef} from 'react';
// import {gsap} from 'gsap'
import '../css/Nav.css'
// import {Link} from 'react-router-dom'

const Nav = () => {




    return (
<>

<div className='div'>
            <nav className='navbar'>


        <input type="checkbox" id='check' />
        <label htmlFor="check" className='menu-btn'>
		<i class="fa fa-bars" aria-hidden="true"></i>
		

        </label> 

          <a href="#home" className="nav__link">Home</a>
          <a href="#about" className="nav__link">About</a>
          <a href="#projects" className="nav__link">Projects</a>
          <a href="#contact" className="nav__link">Contact</a>
        </nav>
        </div>
           
</>

        





    



    );
}

export default Nav;
