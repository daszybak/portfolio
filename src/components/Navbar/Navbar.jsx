import React, {useEffect, useRef, useState} from 'react';

import {images} from './../../constants';
import {BsHexagon} from 'react-icons/bs';
import {BiMenu} from 'react-icons/bi';
import {HiX} from 'react-icons/hi';
import {motion, AnimatePresence} from 'framer-motion';
import './Navbar.scss';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();

  const onBodyClick = (event) => {
    if (menuRef && !menuRef.current.contains(event.target)) {
      setToggle(false);
      console.log('You clicked outside!');
    }
  };

  useEffect(() => {
    document.addEventListener('click', onBodyClick, true);

    return document.removeEventListener('click', onBodyClick, true);
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <BsHexagon className="app__navbar-icon" />
            <a href={`#${item}`}>{item}</a>
          </li>
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
              whileInView={{x: [300, 0]}}
              transition={{duration: 0.85, ease: 'easeOut'}}
            >
              <HiX
                onClick={() => {
                  console.log('X CLICKED');
                  setToggle(false);
                }}
              />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
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
