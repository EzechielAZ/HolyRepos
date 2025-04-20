import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Donate from './pages/Donate.js';
import Contact from './pages/Contact.js';
import ScrollToTop from './components/common/ScrollToTop.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

