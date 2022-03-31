import React, {useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import './App.scss';

import {About, Footer, Header, Skills, Work} from './container';
import {Navbar} from './components';

export default function App() {
  const navEl = useRef();
  const {ref, inView} = useInView({
    rootMargin: `${navEl.current?.clientHeight ?? 0}px`,
  });
  return (
    <div className="app">
      <Navbar inViewHeader={inView} navRef={navEl} />
      <Header headerRef={ref} navRef={navEl} inViewHeader={inView} />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}
