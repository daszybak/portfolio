import React from 'react';
import './App.scss';

import {About, Header, Work, Contact} from './container';
import {Navbar, SocialMedia, Email} from './components';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <SocialMedia />
      <Email />
    </div>
  );
}
