import React from 'react';
import '../css/Projects.css'

const Projects = () => {
    return (
        <div>
            <section className="services container section" id='projects'>
            <h2 className="section__title">My Projects</h2>

            <div className="services__container grid">
                
                        <div className="services__card">
               

                            <a href='https://myhealthblog.vercel.app/' className="services__title">
                                
                                <img src="" alt="" />
                                My Health Blog

                            </a>
                            
                            
                        </div>
                        <div className="services__card">
               
                            <a href='https://davolayebi.vercel.app/' className="services__title">Davolayebi Nigeria Limited</a>   
                           
                        </div>
                        <div className="services__card">
               
                            <a href='https://myjobsite.vercel.app/' className="services__title">My Job Site</a>

                        </div>
                        <div className="services__card">
               
                            <a href='https://gadgetbyjerry.vercel.app/' className="services__title">Gadgets by Jerry</a>
                          
                            
                        </div>
                        <div className="services__card">
               
                            <a href='https://login-form-js-abolarin100.vercel.app/' className="services__title">Login Form</a>

                            
                        </div>
                    
             </div>
        </section>
        </div>
    );
}

export default Projects;
