import React from "react";
import Me from "../assets/Jeremiah.jpeg";
import ResumeFile from "../assets/Jeremiah Atoyebi A Resume.pdf";
import "../css/About.css";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumeFile;
    link.download = "Jeremiah_Atoyebi_Resume.pdf";
    link.click();
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Software Engineer at Interswitch, Africa’s leading digital
              payments and commerce company. I build and maintain scalable,
              high-performance web applications using React, TypeScript, Redux
              Toolkit, and React Query, while also developing robust backend
              services with Java Spring Boot. I leverage AWS for deployment,
              write automated tests with Jest and Cypress, and contribute to
              product documentation and engineering best practices to improve
              team efficiency and maintain high development standards.
              <br />
              <br />
              I enjoy building intuitive, user-focused digital experiences
              across web and mobile platforms, integrating secure REST APIs, and
              collaborating closely with designers, backend engineers, and
              product teams in Agile environments. Passionate about clean
              architecture, performance optimization, and continuous learning, I
              thrive in fast-paced teams where I can contribute meaningful
              solutions while supporting the growth of technology and innovation
              across Africa.
              <br />
              <br />
            </p>

            <button onClick={downloadResume} className="btn btn-flex">
              <FiDownload />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
