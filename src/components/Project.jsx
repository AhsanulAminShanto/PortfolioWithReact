import React, { useState } from 'react';
import { FaLaptopCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Development');

  const categories = {
    'Web Development': {
      title: 'Web Development Projects',
      projects: [
        {
          name: 'Website Redesign',
          description: 'A complete overhaul of a client’s website using HTML, CSS, and React, improving load times by 40%.',
          link: '/projects/website-redesign'
        },
        {
          name: 'E-Commerce Platform',
          description: 'Built a scalable e-commerce site with Node.js and MongoDB for a small business.',
          link: '/projects/e-commerce'
        }
      ]
    },
    'UI/UX Design': {
      title: 'UI/UX Design Projects',
      projects: [
        {
          name: 'UI Design Portfolio',
          description: 'A collection of UI designs created with Figma, focusing on user-friendly interfaces.',
          link: '/projects/ui-design'
        },
        {
          name: 'Mobile App Prototype',
          description: 'Designed a prototype for a mobile app with intuitive navigation and vibrant visuals.',
          link: '/projects/mobile-app'
        }
      ]
    },
    'Data Visualization': {
      title: 'Data Visualization Projects',
      projects: [
        {
          name: 'Data Visualization Tool',
          description: 'A tool built with JavaScript and Chart.js to visualize complex datasets effectively.',
          link: '/projects/data-viz'
        },
        {
          name: 'Sales Dashboard',
          description: 'Created a dynamic dashboard to track sales metrics using D3.js.',
          link: '/projects/sales-dashboard'
        }
      ]
    }
  };

  return (
    <section className="projects" id="projects">
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-container">
        <div className="projects-sidebar">
          <div className="why-hire-me">
            <h3>Why Hire Me?</h3>
            <p>Proven expertise in delivering innovative and high-quality projects across multiple domains.</p>
          </div>
          <div className="sidebar-buttons">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} <FaLaptopCode /> {/* Icon for each category */}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-content">
          <div className="projects-section">
            <h3>{categories[selectedCategory].title}</h3>
            <ul className="project-list">
              {categories[selectedCategory].projects.map((project, index) => (
                <li key={index}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} className="btn">View Project</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;