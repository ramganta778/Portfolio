import React from 'react';

const About = () => (
  <div id="about-section" className="about-section">
    <div className="about-content">
      {/* About Me Text on Top-Left */}
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am Balaji Ganta, a dedicated MERN stack developer. I specialize in building 
          responsive, scalable, and modern web applications using React, Node.js, Express, 
          and MongoDB.
        </p>
      </div>

      {/* Cards Container Below the About Me Text */}
      <div className="cards-container">
        {/* Card 1: Skills */}
        <div className="card">
          <h3>Skills</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </div>

        {/* Card 2: Education */}
        <div className="card">
          <h3>Education</h3>
          <p><strong>10th:</strong> Adarsha High School (CGPA: 8.7)</p>
          <p><strong>Inter:</strong> Narayana Junior College (Marks: 892)</p>
          <p><strong>B.Tech:</strong> Swarnandhra College of Engineering (CGPA: 7.19)</p>
        </div>

        {/* Card 3: Experience */}
        <div className="card">
          <h3>Experience</h3>
          <p>Working on personal projects and expanding my skills in full-stack development.</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
