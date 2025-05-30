import React, { useState, useEffect } from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Services from './Pages/Services'
import ContactSection from './Pages/Contact'
import Preloader from './components/lPreloader'
import ScrollToTopButton from './components/ScrollToTop';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
         
          <section id="HOME"> <Home /></section>
          <section id="ABOUT">  <About /></section>
          <section id="SKILLS"><Skills /></section>
          <section id="SERVICE">  <Services /></section>
          <section id="CONTACT"> <ContactSection /></section>
          <ScrollToTopButton/>
        </>
      )}
    </>
  );
};

export default App;
