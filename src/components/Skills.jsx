import { BsCodeSlash, BsPaintBucket, BsBarChartLine } from 'react-icons/bs';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  useScrollReveal();

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="services-container">
        <div className="services-box">
          <BsCodeSlash className="service-icon" />
          <h3>Web Development</h3>
          <p>Expertise in HTML, CSS, and JavaScript with a focus on creating responsive and dynamic websites.</p>
          <a href="/assets/cv.pdf" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <BsPaintBucket className="service-icon" />
          <h3>Educational Life</h3>
          <p>A lifelong pursuit of learning with a strong foundation in various academic disciplines.</p>
          <a href="/assets/Education.pdf" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <BsBarChartLine className="service-icon" />
          <h3>Athletics Life</h3>
          <p>A dedicated journey of discipline and excellence in athletic pursuits.</p>
          <a href="/assets/Athletics.pdf" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <BsCodeSlash className="service-icon" />
          <h3>Web Development</h3>
          <p>Expertise in HTML, CSS, and JavaScript with a focus on creating responsive and dynamic websites.</p>
          <a href="/assets/cv.pdf" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <BsPaintBucket className="service-icon" />
          <h3>Educational Life</h3>
          <p>A lifelong pursuit of learning with a strong foundation in various academic disciplines.</p>
          <a href="/assets/Education.pdf" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <BsBarChartLine className="service-icon" />
          <h3>Athletics Life</h3>
          <p>A dedicated journey of discipline and excellence in athletic pursuits.</p>
          <a href="/assets/Athletics.pdf" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Skills;