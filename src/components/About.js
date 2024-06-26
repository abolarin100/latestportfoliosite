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
                        As a passionate Frontend Engineer with years of experience in writing clean and reusable code, I am skilled in creating intuitive, user-friendly interfaces. I can seamlessly integrate REST APIs in my application. I have experience working in an agile environment and collaborating with designers, back-end developers, and project managers to ensure seamless integration of all components. I am also passionate about staying up-to- date with the latest trends and best practices in software development, and regularly attend conferences and workshops to expand my knowledge. I can add immense value with skills and capacities while experiencing personal and professional growth.<br /><br />
                           
                        </p>
                       
                        {/* <button className="btn" onClick={downloadResume}>Donwload CV</button> */}
                    </div>

                </div>
            </div>


        </section>
    );
}

export default About;
