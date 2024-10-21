import React from 'react';
import { Link } from 'react-scroll';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import logoImage from './components/Images/baluu.jpg'; // Adjust the path if needed
import './App.css';

const App = () => (
  <div className="app-container">
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" /> {/* Logo Image */}
        Portfolio
      </div>
      <ul>
        <li>
          <Link to="home-section" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about-section" smooth={true} duration={500}>
            About
          </Link>
        </li>
        {/* <li>
          <Link to="services-section" smooth={true} duration={500}>
            Services
          </Link>
        </li> */}
        <li>
          <Link to="projects-section" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact-section" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>

    <Home />
    <About />
    {/* <Services /> */}
    <Projects />
    <Contact />

    <footer>
      <p>
        &copy; {new Date().getFullYear()} Balaji Ganta. All rights reserved.
      </p>
      <p>
        Connect with me on{' '}
        <a href="https://wa.me/6305694926" target="_blank" rel="noopener noreferrer">
      WhatsApp
    </a>
      </p>
    </footer>
  </div>
);

export default App;
