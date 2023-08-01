import React from 'react';
import Da from '../assets/image/davolayebi.jpg'
import Ga from '../assets/image/gadget.jpg'
import Ha from '../assets/image/health.jpg'
import Ja from '../assets/image/jobsite.png'
import La from '../assets/image/loginform.jpg'
import '../css/Projects.css'

const Projects = () => {
    return (
        <div>
            <section className="services container section" id='projects'>
            <h2 className="section__title">My Projects</h2>

            <div className="services__container grid">
                
                        <div className="services__card">
               

                            <a href='https://myhealthblog.vercel.app/' target='_blank' className="services__title">
                                
                                <img src={Ha}  alt="" />
                                {/* My Health Blog */}

                            </a>
                            
                            
                        </div>
                        <div className="services__card">
               
                            <a href='https://davolayebi.vercel.app/' target='_blank' className="services__title">
                               <img src={Da} alt="" />
                                {/* Davolayebi Nigeria Limited */}
                                </a>   
                           
                        </div>
                        <div className="services__card">
               
                            <a href='https://myjobsite.vercel.app/' target='_blank' className="services__title">
                               
                            <img src={Ja} alt="" />
                                {/* My Job Site */}
                                </a>

                        </div>
                        <div className="services__card">
               
                            <a href='https://gadgetbyjerry.vercel.app/' target='_blank' className="services__title">
                                
                            <img src={Ga} alt="" />
                                {/* Gadgets by Jerry */}
                                </a>
                          
                            
                        </div>
                        <div className="services__card">
               
                            <a href='https://login-form-js-abolarin100.vercel.app/' target='_blank' className="services__title">
                                
                            <img src={La} alt="" />
                                {/* Login Form */}
                                </a>

                            
                        </div>
                    
             </div>
        </section>
        </div>
    );
}

export default Projects;
