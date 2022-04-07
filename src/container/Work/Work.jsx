import React from 'react';
import {motion} from 'framer-motion';
import Carousel from 'react-multi-carousel';
import {CarouselCard} from '../../components';
import 'react-multi-carousel/lib/styles.css';
import forkifyImage from './../../assets/projects/forkify.png';
import foodOrderAppImage from './../../assets/projects/food-order-app.png';
import omnifoodImage from './../../assets/projects/omnifood.png';

import './Work.scss';

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
    url: 'karlo-food-order-app.netlify.app/',
    githubUrl: 'https://github.com/daszybak/Food-Order-App',
  },
];

export default function Work() {
  const renderedCarouselItems = work.map((item, index) => {
    return <CarouselCard item={item} key={index}></CarouselCard>;
  });

  return (
    <div className="app__projects">
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
          <Carousel interval={null} responsive={responsive}>
            {renderedCarouselItems}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}
