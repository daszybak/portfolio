import {motion} from 'framer-motion';
import React from 'react';
import './About.scss';

export default function About({aboutRef}) {
  return (
    <>
      <a className="anchor" id="about" href="#about">
        .
      </a>
      <motion.div
        className="app__container"
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <div className="app__about app__mg12rem" ref={aboutRef} id="about">
          <h2 className="head-text">About Me</h2>
          <div className="app__flex-image-text">
            <p className="p-text">
              My love for coding began during my Master's Project. My Master's
              Project involved developing solutions in the C programming
              language for a laboratory tool. <br /> <br /> The laboratory tool
              is now the foundation for future Ph.D. theses. Throughout my
              Master's Studies, I have worked on numerous projects where close
              collaboration and teamwork were crucial to completing the tasks on
              time. <br /> <br />
              Now, I work daily to develop my skills and increase my knowledge
              in software development. Working joyfully on my web development
              projects has become a part of my identity. I am very eager to make
              web development my career.
            </p>
            {/* <div className="app__image-box">
            <img src={images.avatar} alt="Author" />
          </div> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
