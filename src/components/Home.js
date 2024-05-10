import React from 'react';
import '../css/Home.css'
import Typewriter from 'typewriter-effect'
import Me from '../assets/Jeremiah.jpeg'
import He from '../assets/dev-hero.png'

import Socials from './Socials';

const Home = () => {
    return (
        <section className="px-8   h-[95vh] lg:h-[95vh] flex  flex-col-reverse lg:flex-row-reverse items-center   justify-center lg:justify-between z-0  pt-40   " id='home ' >

            <div className='mt-16  lg:mt-0 w-[80%] lg:w-[50%] pb-8 '>
                <img src={He} alt="" className=' w-[100%] ' />
            </div>
            <div className=" hidden lg:block w-[70%] pl-8  mb-16 lg:mb-0  mt-20 lg:mt-0  ">

                <div className=''>
                    <h1 className=" font-semibold text-2xl ">Hi <span className="text-4xl">👋</span>  </h1>

                    <h3 className="font-bold text-2xl pt-3" style={{ display: "flex", gap: 8,  }}>

                        <span className='w-[] '>I am </span>
                        <Typewriter
                            className=""
                            options={{ strings: [" Abolarin  "], autoStart: true, loop: true, changeDelay: 0.01 }}
                        />

                    </h3>
                    <h1 className="home__name w-[80%]   pt-2  ">I create beautiful and interactive user interfaces </h1>






                </div>


                <div className='pt-2' >


                    <Socials className='' />

                    <a href="#contact" className="btn mt-4"> Contact Me</a>
                </div>



                {/* <ScrollDown /> */}
            </div>

            <div className=" lg:hidden mb-16 lg:mb-0  mt-20 lg:mt-0 text-center ">

                <div className=''>
                    <h1 className="font-semibold text-xl  ">Hi <span className="text-3xl">👋</span> </h1>

                    <h3 className=" justify-center font-semibold text-xl pt-3 " style={{ display: "flex", gap: 8,  }}>

                        <span className='w-[]  '>I am </span>
                        <Typewriter
                            className=""
                            options={{ strings: [" Abolarin  "], autoStart: true, loop: true, changeDelay: 0.01 }}
                        />

                    </h3>

                    <h1 className=" px-6  pt-3 text-2xl ">I create beautiful and interactive user interfaces  </h1>
           






                </div>


                <div className='pt-2' >

                    <div className=''>
                        <Socials />
                    </div>


                    <a href="#contact" className="btn mt-3"> Contact Me</a>
                </div>



                {/* <ScrollDown /> */}
            </div>


        </section>

    );
}

export default Home;
