import React from 'react';
import Intro from './components/IntroComponent/intro';
import About from './components/AboutComponent/About';
import ProductList from './components/ProductListComponent/ProductList';
import Contact from './components/ContactComponent/Contact';
import Footer from './components/FooterComponent/Footer';
import Skills from './components/SkillsComponent/Skills';

function App() {
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

export default App;
