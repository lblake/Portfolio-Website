import React from 'react';
import Intro from './components/IntroComponent/intro';
import About from './components/AboutComponent/About';
import ProductList from './components/ProductListComponent/ProductList';
import Contact from './components/ContactComponent/Contact';
import Footer from './components/FooterComponent/Footer';
import Skills from './components/SkillsComponent/Skills';
import PricingPage from './Pages/Pricing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/projects/:projectName' element={<PricingPage />} />
        </Routes>
      </Router>

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
