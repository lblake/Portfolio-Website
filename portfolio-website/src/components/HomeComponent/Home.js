import React from 'react';
import Intro from '../IntroComponent/intro';
import About from '../AboutComponent/About';
import ProductList from '../ProductListComponent/ProductList';
import Contact from '../ContactComponent/Contact';
import Footer from '../FooterComponent/Footer';
import Skills from '../SkillsComponent/Skills';

export default function Home() {
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
