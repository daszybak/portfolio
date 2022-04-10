import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Carousel, CarouselItem} from 'react-bootstrap';
import {RiGithubLine, RiExternalLinkLine} from 'react-icons/ri';

import 'bootstrap/dist/css/bootstrap.min.css';
import forkifyImage from './../../assets/projects/forkify.png';
import foodOrderAppImage from './../../assets/projects/food-order-app.png';
import omnifoodImage from './../../assets/projects/omnifood.png';
import movieSearchAppImage from './../../assets/projects/movie-search-app.png';

import './Work.scss';

const work = [
  {
    title: 'Forkify',
    description:
      'Code along project from a Javascript course. The app fetches recipes and displays them.',
    image: forkifyImage,
    url: 'https://karlo-forkify.netlify.app/',
    githubUrl: 'https://github.com/daszybak/forkify',
  },
  {
    title: 'Omnifood',
    description: 'Code along project from a HTML and CSS course.',
    image: omnifoodImage,
    url: 'https://karlo-omnifood.netlify.app/',
    githubUrl: 'https://github.com/daszybak/Omnifood',
  },
  {
    title: 'Food Order App',
    description:
      'Code along project from a React course. The app adds and removes orders from the cart.',
    image: foodOrderAppImage,
    url: 'https://karlo-food-order-app.netlify.app/',
    githubUrl: 'https://github.com/daszybak/Food-Order-App',
  },
  {
    title: 'Movie Search App',
    description:
      'Searching movies using the https://www.themoviedb.org/settings/api. The app is created in React',
    image: movieSearchAppImage,
    url: 'https://karlo-movie-search.netlify.app/',
    githubUrl: 'https://github.com/daszybak/Movie-Search-App',
  },
];

export default function Work() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(document.body.clientWidth);
    console.log(width);
  }, [width]);

  const renderedCarouselItems = work.map((item) => {
    const {title, description, image, url, githubUrl} = item;
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
          whileInView={{opacity: [0, 1]}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
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
