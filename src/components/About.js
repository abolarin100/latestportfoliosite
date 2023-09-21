import React from 'react';
import Me from '../assets/Jeremiah.jpeg'
import '../css/About.css'

const About = () => {
    return (
        <section className="about container section" id="about">
        <h2 className="section__title">About Me </h2>

        <div className="about__container grid">
            <img src={Me} alt="" className='about__img' />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                    As a passionate Frontend Developer with years of experience in writing clean and reusable code, I am skilled in creating intuitive, user-friendly interfaces. I can seamlessly integrate REST APIs in my projects and interact with any Database or Library. I have experience collaborating with designers, back-end developers, and project managers to ensure seamless integration of all components. I am also passionate about staying up-to-date with the latest trends and best practices in web development, and regularly attend conferences and workshops to expand my knowledge. I can add immense value with skills and capacities while experiencing personal and professional growth.<br /><br />
                        Here are a few technologies I have been working with recently:
                    </p>
                    <ul className="about__list">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>Html</li>
                        <li>Bootstrap</li>
                        <li>Git&GitHub</li>
                        <li>Firebase</li>
                        <li>Vuejs</li>
                        <li>MongoDb</li>
                        <li>ExpressJs</li>
                        <li>NodeJs</li>
                    </ul>
                    {/* <button className="btn" onClick={downloadResume}>Donwload CV</button> */}
                </div>

            </div>
        </div>

        
    </section>
    );
}

export default About;
