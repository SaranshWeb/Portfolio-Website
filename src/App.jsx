// import React from 'react';
// import Navbar from './components/Navbar';
// import '../public'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
// import Projects1 from '../pages/Projects1';
import Projects1 from '../pages/Projects1'

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,  // animations happen only once
    });
     }, []);

  return (
    <div>
      <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg">
        <div className='background-img App'>
          <Navbar />
          <Home />
        </div>
          <About />
          <Projects />
          <Contact />
          <Footer />
          {/* <Projects1 /> */}
          </div>
    </div>
    
  );
}