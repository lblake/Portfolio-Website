import React, {useEffect, useState} from 'react';
import Intro from '../IntroComponent/intro';
import About from '../AboutComponent/About';
import ProductList from '../ProductListComponent/ProductList';
import Contact from '../ContactComponent/Contact';
import Footer from '../FooterComponent/Footer';
import Skills from '../SkillsComponent/Skills';
import ContactForm from '../ContactFormComponent/ContactUs'

export default function Home() {
  const [reload] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      setPageLoaded(true);
    } else if (reload) {
      window.location.reload();
    }
  }, [reload, pageLoaded]);

  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
      <ContactForm/>
      <Footer />
    </div>
  );
}
