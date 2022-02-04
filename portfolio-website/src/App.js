import React from 'react';
import ProjectPage from './components/ProjectPageComponent/ProjectPage';
import Home from './components/HomeComponent/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects/:projectName' element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
