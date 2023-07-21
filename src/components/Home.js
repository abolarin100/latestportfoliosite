import React from 'react';
import '../css/Home.css'
import Typewriter from 'typewriter-effect'
import Me from '../assets/Jeremiah.jpeg'

import Socials from './Socials';

const Home = () => {
    return (
        <section className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className='home__img' width='120' />
            <h1 className="home__name">Jeremiah Atoyebi</h1>
            <span className="home__education">
            <span className="txt-rotate color" style={{ display: "inline-flex" }}>
								<Typewriter
									className="color"
									options={{ strings: [" Welcome to my portfolio website", " You can reach out to me via any of my social media handles below "], autoStart: true, loop: true, changeDelay: 0.01 }}
								/>
							</span>
            </span>

            <Socials />

            <a href="#contact" className="btn"> Contact Me</a>

            {/* <ScrollDown /> */}
        </div>

        {/* <Shapes /> */}
    </section>
    );
}

export default Home;
