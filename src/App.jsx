// import React from 'react';
// import Navbar from './components/Navbar';
// import '../public'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div>
      <div className='background-img'>
        <Navbar />
        <Home />
      </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}