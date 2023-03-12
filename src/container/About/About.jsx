import { motion } from 'framer-motion';
import React from 'react';
import './About.scss';

export default function About({ aboutRef }) {
	return (
		<>
			<a className="anchor" id="about" href="#about">
				.
			</a>
			<motion.div
				className="app__container"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<div className="app__about app__mg12rem" ref={aboutRef} id="about">
					<h2 className="head-text">About Me</h2>
					<div className="app__flex-image-text">
						<p className="p-text">
							Hi there! I am a skilled software developer with expertise in
							various programming languages such as JavaScript, TypeScript,
							HTML, CSS/CSS in JS/SASS, and Golang. With hands-on experience in
							various frameworks such as React, NextJS, NestJS, Vue, and Revel,
							as well as libraries such as Redux, Apollo Client, Material UI,
							Mantine, and Vuetify, I am confident in my ability to tackle any
							challenge that comes my way.
							<br />
							<br />
							As a great team player, I believe in continuous learning and
							expanding my knowledge and skills. I am proficient in English
							(proficient), German (intermediate), and Croatian (native) and
							have excellent communication skills. Currently, I work for Trustap
							and am seeking opportunities that will allow me to utilize my
							skills and grow both professionally and personally. <br />
							<br />
							In addition to my working experience, I have also built my own
							personal website using React and SASS. The website showcases my
							skills and projects and is a testament to my ability to build
							high-quality websites. With a passion for problem-solving and a
							strong attention to detail, I am confident in my ability to
							contribute to any project I am a part of. I take pride in staying
							up-to-date with the latest technologies and trends in my field,
							ensuring that I am always at the forefront of innovation. I look
							forward to new challenges and opportunities to learn and grow as a
							developer.
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
