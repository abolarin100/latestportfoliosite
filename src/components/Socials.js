import React from 'react';
import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter,} from 'react-icons/fa' ;


const Socials = () => {
    return (
        <div className='home__socials justify-center lg:justify-start'>
            <a href='https://github.com/abolarin100' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/jeremiah-atoyebi-b55884132
' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            <a href='https://instagram.com/abolarin_1?igshid=MjEwN2IyYWYwYw==
' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>
            <a href='https://twitter.com/iam_abolarin' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTwitter />
            </a>
            

        </div>
    );
};

export default Socials;
