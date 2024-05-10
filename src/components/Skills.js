import React from 'react';
import Me from '../assets/heroo.png'
import '../css/skills.css'
import CircleCard from './CircleCard';
import { motion } from 'framer-motion';

const Skills = () => {

    const skillData = [
        {
            id: 1,
            name: "Javascript",
            imageSource: require("../assets/javas.png"),
        },
        {
            id: 2,
            name: "HTML",
            imageSource: require("../assets/html.png"),
        },
        {
            id: 3,
            name: "React",
            imageSource: require("../assets/reactjs.png"),
        },
        {
            id: 4,
            name: "CSS",
            imageSource: require("../assets/css.png"),
        },
        {
            id: 5,
            name: "Bootstrap",
            imageSource: require("../assets/bootstrap.png"),
        },
        {
            id: 6,
            name: "Git",
            imageSource: require("../assets/git.png"),
        },
        {
            id: 7,
            name: "Vuejs",
            imageSource: require("../assets/vuejs.png"),
        },
        
        {
            id: 9,
            name: "Nodejs",
            imageSource: require("../assets/node.png"),
        },
        {
            id: 10,
            name: "Firebase",
            imageSource: require("../assets/firebase.png"),
        },
        {
            id: 11,
            name: "MongoDb",
            imageSource: require("../assets/mongo.png"),
        },
        {
            id: 12,
            name: "Framer Motion",
            imageSource: require("../assets/framer.png"),
        },
        {
            id: 13,
            name: "Material-UI",
            imageSource: require("../assets/material.png"),
        },
        {
            id: 14,
            name: "Redux",
            imageSource: require("../assets/redux.png"),
        },
        {
            id: 15,
            name: "npm",
            imageSource: require("../assets/npm.png"),
        },
        {
            id: 16,
            name: "GitHub",
            imageSource: require("../assets/github.png"),
        },
        {
            id: 17,
            name: "vite",
            imageSource: require("../assets/vite.png"),
        },
    ];


    return (
        <section className="about container section" id="skills">
            <h2 className="section__title">My Skills </h2>

            <div className="services__containers grid w-[90%] pl-6">
                {/* <img src={Me} alt="" className='about__img' /> */}

                
                        {skillData.map((skill) => {
                            return (
                                <motion.div
                                    key={skill.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.1, staggerChildren: 0.2 }}
                                >
                                    <CircleCard
                                        skillImage={skill.imageSource}
                                        name={skill.name}
                                    />
                                </motion.div>
                            );
                        })}
                   
            </div>


        </section>
    );
}

export default Skills;
