import React from 'react';
import '../css/Home.css'
import Me from '../assets/Jeremiah.jpeg'

import Socials from './Socials';

const Home = () => {
    return (
        <section className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className='home__img' width='120' />
            <h1 className="home__name">Jeremiah Atoyebi</h1>
            <span className="home__education">Welcome to my portfolio website.</span>

            <Socials />

            <a href="#contact" className="btn"> Contact Me</a>

            {/* <ScrollDown /> */}
        </div>

        {/* <Shapes /> */}
    </section>
    );
}

export default Home;
