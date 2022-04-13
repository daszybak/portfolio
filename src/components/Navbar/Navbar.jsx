import React, {useEffect, useRef, useState} from 'react';

import {images} from './../../constants';
import {BiMenu} from 'react-icons/bi';
import {HiX} from 'react-icons/hi';
import {motion, AnimatePresence} from 'framer-motion';

import './Navbar.scss';

export default function Navbar({inViewHeader, navRef}) {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) return;
      setToggle(false);
    };

    document.body.addEventListener('click', handleCloseMenu, true);

    return () => {
      document.body.removeEventListener('click', handleCloseMenu, true);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <motion.div
        className="app__navbar-logo"
        whileInView={{y: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5, delay: 0 * 0.1}}
        viewport={{once: true}}
      >
        <img src={images.logo} alt="logo" />
      </motion.div>

      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'contact'].map((item, i) => (
          <motion.li
            className="app__flex p-text"
            key={`link-${item}`}
            whileInView={{y: [-100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5, delay: i * 0.1}}
            viewport={{once: true}}
          >
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </ul>

      <div className="app__navbar-menu" ref={menuRef}>
        <BiMenu
          onClick={() => {
            console.log('MENU CLICKED');
            setToggle(true);
          }}
        />
        <AnimatePresence>
          {toggle && (
            <motion.div
              key="menu"
              initial={{x: '100%', opacity: 0}}
              animate={{x: '5%', y: '-1%', opacity: 1}}
              exit={{x: '100%', opacity: 0}}
            >
              <HiX
                onClick={() => {
                  console.log('X CLICKED');
                  setToggle(false);
                }}
              />
              <ul>
                {['home', 'about', 'work', 'contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => {
                        console.log('LINKED CLICKED');
                        setToggle(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
