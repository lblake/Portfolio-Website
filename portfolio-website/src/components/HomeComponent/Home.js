import React, { useState, useEffect } from 'react';
import Intro from '../IntroComponent/intro';
import About from '../AboutComponent/About';
import ProductList from '../ProductListComponent/ProductList';
import Contact from '../ContactComponent/Contact';
import Footer from '../FooterComponent/Footer';
import Skills from '../SkillsComponent/Skills';

export default function Home() {
  // const [reload, setReload] = useState(false);

  // useEffect(() => {
  //   setReload(true);
  // }, []);

  // useEffect(() => {
  //   if (reload) {
  //     window.location.reload();
  //   }
  // }, [reload]);

  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
