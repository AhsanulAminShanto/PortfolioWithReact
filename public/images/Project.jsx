import { FaLaptopCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  useScrollReveal();

  return (
    <section className="projects" id="projects">
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-container">
        <div className="projects-box">
          <FaLaptopCode className="project-icon" />
          <h3>Web App Development</h3>
          <p>A responsive web application built with React, showcasing modern UI design and functionality.</p>
          <a href="/assets/project1.pdf" className="btn">View Project</a>
        </div>
        <div className="projects-box">
          <FaPaintBrush className="project-icon" />
          <h3>Design Portfolio</h3>
          <p>A creative portfolio site highlighting graphic design skills and artistic projects.</p>
          <a href="/assets/project2.pdf" className="btn">View Project</a>
        </div>
        <div className="projects-box">
          <FaChartLine className="project-icon" />
          <h3>Data Visualization</h3>
          <p>An interactive data dashboard created using JavaScript and charting libraries.</p>
          <a href="/assets/project3.pdf" className="btn">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;