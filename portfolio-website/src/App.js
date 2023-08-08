import React from 'react';
import ProjectPage from './components/ProjectPageComponent/ProjectPage';
import Home from './components/HomeComponent/Home';
import ErrorPage from './components/ErrorPageComponent/ErrorPage';
import ZayYoPage from './components/ShopifyPageComponent/ZayYo';
import SlateCoffeePage from './components/ShopifyPageComponent/SlateCoffee';
import GalaxyBoxPage from './components/ShopifyPageComponent/GalaxyBox';
import SuccessPage from './components/ContactFormComponent/success';
// import IntroPage from './components/IntroComponent/intro.js'
// import ContactPage from './components/ContactFormComponent/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
         {/* <Route exact path='/' element={<IntroPage />} /> */}
         {/* <Route exact path='/contact' element={<ContactPage />} />  */}
          <Route exact path='/zay' element={<ZayYoPage />} />
          <Route exact path='/slate' element={<SlateCoffeePage />} />
          <Route exact path='/galaxy' element={<GalaxyBoxPage />} />
          <Route exact path='/success' element={<SuccessPage />} />
          <Route path='/projects/:projectName' element={<ProjectPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
