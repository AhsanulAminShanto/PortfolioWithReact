import React, { useState } from 'react';

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState('Experience');

  const sections = {
    Experience: {
      title: 'My Experience',
      content: (
        <>
          <ul className="subsection-list">
            <li>
              <strong>Game Development Intern</strong> - FunFuseGamesLLC
              (2024-2025)
            </li>
            <p>
              Contributed to interactive game experiences using Unity and C#,
              collaborated on game mechanics and UI design, optimized game
              performance and performed debugging, and worked with Agile
              development practices and Git version control.
            </p>
          </ul>
        </>
      ),
    },
    Education: {
      title: 'Education',
      content: (
        <ul className="about-list">
          <li>
            <strong>Independent University, Bangladesh (IUB)</strong>
            <br />
            Bachelor of Science in Computer Science and Engineering
            <br />• CGPA: 3.61
          </li>
          <li>
            <strong>Sherpur Government College, Sherpur</strong>
            <br />
            Higher Secondary Certificate (HSC)
            <br />• GPA: 4.75, Science Group
          </li>
          <li>
            <strong>Sherpur Government Victoria Academy, Sherpur</strong>
            <br />
            Secondary School Certificate (SSC)
            <br />• GPA: 5.00, Science Group
          </li>
        </ul>
      ),
    },
    Skills: {
      title: 'Skills',
      content: (
        <div className="tech-container">
          <div className="tech-item" data-name="C">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/c.svg"
              alt="C"
            />
          </div>
          <div className="tech-item" data-name="C++">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cplusplus.svg"
              alt="C++"
            />
          </div>
          <div className="tech-item" data-name="Java">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/java.svg"
              alt="Java"
            />
          </div>
          <div className="tech-item" data-name="Python">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg"
              alt="Python"
            />
          </div>
          <div className="tech-item" data-name="JavaScript">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg"
              alt="JavaScript"
            />
          </div>
          <div className="tech-item" data-name="TypeScript">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg"
              alt="TypeScript"
            />
          </div>
          <div className="tech-item" data-name="PHP">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/php.svg"
              alt="PHP"
            />
          </div>
          <div className="tech-item" data-name="MySQL">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg"
              alt="MySQL"
            />
          </div>
          <div className="tech-item" data-name="HTML5">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg"
              alt="HTML5"
            />
          </div>
          <div className="tech-item" data-name="CSS3">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg"
              alt="CSS3"
            />
          </div>
          <div className="tech-item" data-name="React.js">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg"
              alt="React.js"
            />
          </div>
          <div className="tech-item" data-name="Next.js">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg"
              alt="Next.js"
            />
          </div>
          <div className="tech-item" data-name="Tailwind CSS">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg"
              alt="Tailwind CSS"
            />
          </div>
          <div className="tech-item" data-name="Bootstrap">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/bootstrap.svg"
              alt="Bootstrap"
            />
          </div>
          <div className="tech-item" data-name="Material UI">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/materialui.svg"
              alt="Material UI"
            />
          </div>
          <div className="tech-item" data-name="DaisyUI">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/daisyui.svg"
              alt="DaisyUI"
            />
          </div>
          <div className="tech-item" data-name="Firebase">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg"
              alt="Firebase"
            />
          </div>
          <div className="tech-item" data-name="Node.js">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg"
              alt="Node.js"
            />
          </div>
          <div className="tech-item" data-name="Express.js">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg"
              alt="Express.js"
            />
          </div>
          <div className="tech-item" data-name="Git">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg"
              alt="Git"
            />
          </div>
          <div className="tech-item" data-name="Netlify">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/netlify.svg"
              alt="Netlify"
            />
          </div>
          <div className="tech-item" data-name="Vercel">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg"
              alt="Vercel"
            />
          </div>
          <div className="tech-item" data-name="VS Code">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/visualstudiocode.svg"
              alt="VS Code"
            />
          </div>
          <div className="tech-item" data-name="IntelliJ IDEA">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/intellijidea.svg"
              alt="IntelliJ IDEA"
            />
          </div>
          <div className="tech-item" data-name="PyCharm">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pycharm.svg"
              alt="PyCharm"
            />
          </div>
          <div className="tech-item" data-name="RStudio">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/rstudio.svg"
              alt="RStudio"
            />
          </div>
          <div className="tech-item" data-name="Code::Blocks">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeblocks.svg"
              alt="Code::Blocks"
            />
          </div>
          <div className="tech-item" data-name="VMware">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vmware.svg"
              alt="VMware"
            />
          </div>
          <div className="tech-item" data-name="VirtualBox">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/virtualbox.svg"
              alt="VirtualBox"
            />
          </div>
          <div className="tech-item" data-name="Android Studio">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/androidstudio.svg"
              alt="Android Studio"
            />
          </div>
          <div className="tech-item" data-name="LaTeX">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/latex.svg"
              alt="LaTeX"
            />
          </div>
          <div className="tech-item" data-name="HackerRank">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hackerrank.svg"
              alt="HackerRank"
            />
          </div>
          <div className="tech-item" data-name="LeetCode">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg"
              alt="LeetCode"
            />
          </div>
          <div className="tech-item" data-name="Codeforces">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg"
              alt="Codeforces"
            />
          </div>
          <div className="tech-item" data-name="CodeChef">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codechef.svg"
              alt="CodeChef"
            />
          </div>
          <div className="tech-item" data-name="MySQL">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg"
              alt="MySQL"
            />
          </div>
          <div className="tech-item" data-name="PostgreSQL">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg"
              alt="PostgreSQL"
            />
          </div>
          <div className="tech-item" data-name="MongoDB">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg"
              alt="MongoDB"
            />
          </div>
          <div className="tech-item" data-name="Firebase">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg"
              alt="Firebase"
            />
          </div>
        </div>
      ),
    },
    'About Me': {
      title: 'About Me',
      content: (
        <p>
          A passionate developer with hands on experience in web development and
          design, dedicated to creating user-friendly digital experiences.
        </p>
      ),
    },
  };

  return (
    <section className="resume" id="resume">
      <h2 className="heading">
        My <span>Resume</span>
      </h2>
      <div className="resume-container">
        <div className="resume-sidebar">
          <div className="why-hire-me">
            <h3>Why Hire Me?</h3>
            <p>
              A proven track record of delivering high-quality web solutions.
            </p>
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
          <a href="/cv.pdf" download className="btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
