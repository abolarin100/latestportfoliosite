import React from 'react';
import Da from '../assets/image/davolayebi.jpg'
import Ga from '../assets/image/sawl.png'
import Ha from '../assets/image/menu.png'
import Ja from '../assets/image/job.png'
import La from '../assets/image/myweb.png'
import Pa from '../assets/image/mbgdd.png'
import '../css/Projects.css'

const Projects = () => {
    return (
        <div>
            <section className="services container section" id='projects'>
                <h2 className="section__title">My Projects</h2>

                <div className="services__container grid">

                    <div className='flex flex-col items-start space-y-[1px] bg-[#A7AEB91A] hover:scale-105  '>
                        <img src={Ga} alt=""
                            className=' w-full object-cover'
                        />
                        <div className=' shadow-md shadow-gray-400 w-full rounded-b-md'>
                            <div className='flex flex-row justify-between pt-2 px-4'>
                                <div className='pt-2'>
                                    <h2 className='font-semibold'>Smart Approaches </h2>
                                    <div className='flex space-x-2 pt-2'>
                                        <p>An online learning platform for students taking the Data analysis and Business Analysis courses.</p>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                                <a href="https://github.com/abolarin100/SAWL-FRONTEND">
                                    <button className='hover:bg-[#7b8ca71a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >GitHub</button>
                                </a>
                                <a href="https://sawl.vercel.app/">
                                    <button className='hover:bg-[#a5b3c91a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >Live link</button>

                                </a>
                            </div>

                        </div>


                    </div>

                    <div className='flex flex-col items-start space-y-[1px] bg-[#A7AEB91A] hover:scale-105'>
                        <img src={Ha} alt=""
                            className=' w-full object-cover'
                        />
                        <div className=' shadow-md shadow-gray-400 w-full rounded-b-md'>
                            <div className='flex flex-row justify-between pt-2 px-4'>
                                <div className='pt-2'>
                                    <h2 className='font-semibold'>Jay's Menu </h2>
                                    <div className='flex space-x-2 pt-2'>
                                        <p> A comprehensive online menu for browsing dishes, exploring descriptions, and viewing visuals</p>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                                <a href="https://github.com/abolarin100/food-menu">
                                    <button className='hover:bg-[#7b8ca71a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >GitHub</button>
                                </a>
                                <a href="https://jays-menu.vercel.app/">
                                    <button className='hover:bg-[#a5b3c91a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >Live link</button>

                                </a>
                            </div>

                        </div>


                    </div>
                    <div className='flex flex-col items-start space-y-[1px] bg-[#A7AEB91A] hover:scale-105'>
                        <img src={La} alt=""
                            className=' w-full object-cover'
                        />
                        <div className=' shadow-md shadow-gray-400 w-full rounded-b-md'>
                            <div className='flex flex-row justify-between pt-2 px-4'>
                                <div className='pt-2'>
                                    <h2 className='font-semibold'>My Portfolio Website </h2>
                                    <div className='flex space-x-2 pt-2'>
                                        <p>Created to display my skills and expertise in developing beautiful and interactive user interfaces .</p>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                                <a href="https://github.com/abolarin100/latestportfoliosite">
                                    <button className='hover:bg-[#7b8ca71a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >GitHub</button>
                                </a>
                                <a href="https://jeremiah-atoyebi.vercel.app/">
                                    <button className='hover:bg-[#a5b3c91a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >Live link</button>

                                </a>
                            </div>

                        </div>


                    </div>

                    <div className='flex flex-col items-start space-y-[1px] bg-[#A7AEB91A] hover:scale-105  '>
                        <img src={Pa} alt=""
                            className=' w-full object-cover'
                        />
                        <div className=' shadow-md shadow-gray-400 w-full rounded-b-md'>
                            <div className='flex flex-row justify-between pt-2 px-4'>
                                <div className='pt-2'>
                                    <h2 className='font-semibold'>Multi-bag Deliveries </h2>
                                    <div className='flex space-x-2 pt-2'>
                                        <p>A web app that allows users book deliveries, and easily manage their package shipping needs. </p>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                                <a href="https://github.com/abolarin100/parceltracker">
                                    <button className='hover:bg-[#7b8ca71a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >GitHub</button>
                                </a>
                                <a href="https://multibag-deliveries.vercel.app/">
                                    <button className='hover:bg-[#a5b3c91a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >Live link</button>

                                </a>
                            </div>

                        </div>


                    </div>
                    <div className='flex flex-col items-start space-y-[1px] bg-[#A7AEB91A] hover:scale-105  '>
                        <img src={Ja} alt=""
                            className=' w-full object-cover'
                        />
                        <div className=' shadow-md shadow-gray-400 w-full rounded-b-md'>
                            <div className='flex flex-row justify-between pt-2 px-4'>
                                <div className='pt-2'>
                                    <h2 className='font-semibold'>Jobsite </h2>
                                    <div className='flex space-x-2 pt-2'>
                                        <p>An online platform for job hunters to see the latest job openings in their city. </p>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                                <a href="https://github.com/abolarin100/myjobsite">
                                    <button className='hover:bg-[#7b8ca71a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >GitHub</button>
                                </a>
                                <a href="https://myjobsite.vercel.app/">
                                    <button className='hover:bg-[#a5b3c91a] hover:scale-125 text-xs bg-[#415f8f1a] text-blue-500 border-1 border-blue-500' >Live link</button>

                                </a>
                            </div>

                        </div>


                    </div>

                   
                    
                   
                   
                   


                </div>
            </section>
        </div>
    );
}

export default Projects;
