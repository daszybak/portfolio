import React from 'react';
import {motion} from 'framer-motion';

import './Header.scss';

export default function Header() {
  return (
    <div>
      <div className="app__header app__flex app__mg12rem" id="home">
        <div className="app__header-h">
          <motion.p
            whileInView={{y: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="p-text"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            whileInView={{y: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.1}}
            viewport={{once: true}}
            className="head-text"
            style={{color: 'var(--gray-color)'}}
          >
            Karlo.
          </motion.h1>
          <motion.h1
            whileInView={{y: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
            className="head-text"
          >
            I build web apps.
          </motion.h1>
          <motion.p
            className="p-text app__small"
            whileInView={{y: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.3}}
            viewport={{once: true}}
            style={{marginTop: '1rem'}}
          >
            I am a software developer that focuses on creating web applications.
            Currently, I am learning how to bring my clients the best possible
            user experience.
            {/* My love for coding began during my Master's Project. My Master's
                Project involved developing solutions in the C programming
                language for a laboratory tool. The laboratory tool is now the
                foundation for future Ph.D. theses. Throughout my Master's
                Studies, I have worked on numerous projects where close
                collaboration and teamwork were crucial to completing the tasks
                on time. Now, I work daily to develop my skills and increase my
                knowledge in software development. Working joyfully on my web
                development projects has become a part of my identity. I am very
                eager to make web development my career. */}
          </motion.p>
          <motion.a
            whileInView={{y: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.3}}
            viewport={{once: true}}
            style={{marginTop: '2rem'}}
            className="app__link-button"
            href="Curriculum_Vitae.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curriculum Vitae
          </motion.a>
        </div>
      </div>
    </div>
  );
}
