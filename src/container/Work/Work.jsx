import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

import 'bootstrap/dist/css/bootstrap.min.css';
import parametrik from '../../assets/projects/parametrik.png';
import pronatal from '../../assets/projects/pronatal.png';
import portfolio from '../../assets/projects/portfolio.png';

import './Work.scss';

const work = [
	{
		title: 'Parametrik',
		description:
			'Freelance project for an engineering company in Zagreb, which develops projects for the largest automotive companies. The website was build in NextJS using and also Sanity CMS for project section.',
		image: parametrik,
		url: 'https://www.parametrik-engineering.com/',
		githubUrl: 'https://github.com/daszybak/parametrik',
	},
	{
		title: 'Pronatal',
		description:
			'Freelance project where I have build a website for a gynecology clinic in Zagreb. The website was build in NextJS using JavaScript, SASS, and Context API.',
		image: pronatal,
		url: 'https://www.pronatal.hr/',
		githubUrl: 'https://github.com/daszybak/pronatal',
	},
	{
		title: 'Portfolio',
		description:
			'Personal project where I have build my own website. The website was build in React, and with SASS.',
		image: portfolio,
		url: 'https://www.karlodelmis.com/',
		githubUrl: 'https://github.com/daszybak/portfolio',
	},
];

export default function Work() {
	const [width, setWidth] = useState();

	useEffect(() => {
		setWidth(document.body.clientWidth);
	}, [width]);

	const renderedCarouselItems = work.map((item) => {
		const { title, description, image, url, githubUrl } = item;
		return (
			<CarouselItem interval={null} key={title}>
				<img className="d-block w-100" src={image} alt={description} />
				<Carousel.Caption className="carousel-card__catption">
					<h3>{title}</h3>
					<span className="carousel-card__fixed">
						<a href={url} rel="noopener noreferrer" target="_blank">
							<RiExternalLinkLine />
						</a>
						<a href={githubUrl} rel="noopener noreferrer" target="_blank">
							<RiGithubLine />
						</a>
					</span>
					{width <= 900 ? null : <p>{description}</p>}
				</Carousel.Caption>
			</CarouselItem>
		);
	});
	return (
		<>
			<a className="anchor" id="work" href="#work">
				.
			</a>
			<div className="app__projects app__mg12rem" id="work">
				<motion.div
					className="app__mg6rem"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					id="work"
				>
					<div className="app__projects-in">
						<h2 className="head-text app__mgb4rem app__text-align-self-right">
							Projects
						</h2>

						<Carousel interval={null} controls={true} touch={true}>
							{renderedCarouselItems}
						</Carousel>
					</div>
				</motion.div>
			</div>
		</>
	);
}
