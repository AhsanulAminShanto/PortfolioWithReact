import React, { useState } from 'react';

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState('Experience');

  const sections = {
    Experience: {
      title: 'My Experience',
      content: (
        <>
          <ul className="subsection-list">
            <li><strong>Full Stack Developer</strong> - TechCorp (2023-2025)</li>
            <li><strong>Front-End Developer Intern</strong> - WebInnovate (2022-2023)</li>
            <li><strong>Freelance Web Developer</strong> - Self-Employed (2021-2022)</li>
          </ul>
        </>
      )
    },
    Education: {
      title: 'Education',
      content: (
        <p>Bachelor of Science in Computer Science - University XYZ (2016-2020)</p>
      )
    },
    Skills: {
      title: 'Skills',
      content: (
        <ul className="subsection-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      )
    },
    'About Me': {
      title: 'About Me',
      content: (
        <p>A passionate developer with over 5 years of experience in web development and design, 
            dedicated to creating user-friendly digital experiences.</p>
      )
    }
  };

  return (
    <section className="resume" id="resume">
      <h2 className="heading">My <span>Resume</span></h2>
      <div className="resume-container">
        <div className="resume-sidebar">
          <div className="why-hire-me">
            <h3>Why Hire Me?</h3>
            <p>A proven track record of delivering high-quality web solutions.</p>
          </div>
          <div className="sidebar-buttons">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`btn ${selectedSection === section ? 'active' : ''}`}
                onClick={() => setSelectedSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <div className="resume-content">
          <div className="resume-section">
            <h3>{sections[selectedSection].title}</h3>
            {sections[selectedSection].content}
          </div>
          <a href="/assets/resume.pdf" className="btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;