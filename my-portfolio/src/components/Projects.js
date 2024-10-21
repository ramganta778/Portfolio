import React from 'react';

const projects = [
  {
    title: "Website Documentation for IT Institute",
    description: `
      A comprehensive website designed for an IT institute that offers MERN Full Stack 
      and React Native courses. It provides role-based access for students and admins, 
      with detailed course listings and access to recorded classes. Students can give feedback, 
      while admins manage permissions and student access to classes.
    `,
    techStack: `
      Frontend: React | Backend: Node.js, Express | Database: MongoDB 
      | Authentication: JWT | Hosting: AWS/Render
    `,
    link: "https://github.com/your-repo", // Replace with your actual repo link
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and projects.",
    techStack: "React, CSS",
    link: "https://your-portfolio-demo-link", // Replace with your portfolio link
  },
];

const Projects = () => (
  <div id="projects-section" className="projects-section">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
