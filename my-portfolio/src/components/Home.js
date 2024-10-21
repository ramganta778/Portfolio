import React, { useEffect, useState } from 'react';
import balajiiImage from './Images/Balajii.jpg'; // Adjust the path if needed
import whatsappIcon from './Images/whatsapp.png'; // Adjust the path to your WhatsApp icon
import linkedinIcon from './Images/linkedin.png'; // Adjust the path to your LinkedIn icon
import instagramIcon from './Images/instagram.png'; // Adjust the path to your Instagram icon

const Home = () => {
  const [displayedText, setDisplayedText] = useState(''); // State to hold the animated text
  const fullText = "Balaji Ganta...."; // Full text to animate
  const animationSpeed = 400; // Speed of each letter appearing (in ms)

  useEffect(() => {
    let index = 0; // Start from the first letter

    const interval = setInterval(() => {
      if (index < fullText.length) {
        // Update the state with the correct substring
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        // If full text is displayed, reset the index to restart immediately
        index = 0;
        setDisplayedText(''); // Clear the text to restart animation
      }
    }, animationSpeed);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home-section" className="home-section">
      <div className="intro-text">
        <h1>
          Hi, I'm <span className="highlight">{displayedText}</span>
        </h1>
        <p>A passionate MERN stack developer crafting responsive web apps.</p>
        {/* Social Media Icons Section */}
        <div className="social-icons">
          <a href="https://wa.me/6305694926" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="profile-image">
        <img src={balajiiImage} alt="Balaji" />
      </div>
    </div>
  );
};

export default Home;
