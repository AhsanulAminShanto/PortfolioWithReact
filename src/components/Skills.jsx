import { BsCodeSlash, BsPaintBucket, BsBarChartLine } from 'react-icons/bs';
import useScrollReveal from '../hooks/useScrollReveal';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Skills = () => {
  useScrollReveal();

  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="services-container">
        {/* Programming Languages */}
        <div className="services-box">
          <FaCode className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="C++">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cplusplus.svg"
                alt="C++"
              />
            </div>
            <div className="tech-item" data-name="C#">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/csharp.svg"
                alt="C#"
              />
            </div>

            <div className="tech-item" data-name="Java">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
              />
            </div>
            <div className="tech-item" data-name="Python">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg"
                alt="Python"
              />
            </div>
          </div>
          <h3>Programming Languages</h3>
          <p>
            Expertise in C, C++, Java, Python, JavaScript, TypeScript, PHP, and
            MySQL with a focus on creating responsive and efficient
            applications.
          </p>
          <Link to="/project#Frontend" className="btn">
            Read More
          </Link>
        </div>

        {/* Frontend Technologies */}
        <div className="services-box">
          <FaLaptopCode className="service-icon" />
          <div className="tech-container">
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

            <div className="tech-item" data-name="Bootstrap">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/bootstrap.svg"
                alt="Bootstrap"
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
          </div>
          <h3>Frontend Technology</h3>
          <p>
            Building responsive and interactive web applications using HTML,
            CSS, React, Next.js, Tailwind, and other modern tools.
          </p>
          <Link to="/project#Frontend" className="btn">
            Read More
          </Link>
        </div>

        {/* Backend Technologies */}
        <div className="services-box">
          <FaServer className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="PHP">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/php.svg"
                alt="PHP"
              />
            </div>
            <div className="tech-item" data-name="Node.js">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg"
                alt="Node.js"
              />
            </div>
            <div className="tech-item" data-name="Django">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                alt="Django"
              />
            </div>
          </div>
          <h3>Backend Technology</h3>
          <p>
            Creating scalable server-side applications with Node.js and
            Express.js.
          </p>
          <Link to="/project#Backend" className="btn">
            Read More
          </Link>
        </div>

        {/* Tools & Platforms */}
        <div className="services-box">
          <FaTools className="service-icon" />
          <div className="tech-container">
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

            <div className="tech-item" data-name="VS Code">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
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
            <div className="tech-item" data-name="Unity Hub">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/unity.svg"
                alt="Unity Hub"
              />
            </div>
          </div>
          <h3>Tools & Platforms</h3>
          <p>
            Experienced with Git, Netlify, Vercel, VS Code, IntelliJ IDEA,
            PyCharm, RStudio, and more.
          </p>
          <Link to="/project#Cloud" className="btn">
            Read More
          </Link>
        </div>
        {/* Problem Solving */}
        <div className="services-box">
          <FaCloud className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="HackerRank">
              <a
                href="https://www.hackerrank.com/profile/ahsanulaminshan1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hackerrank.svg"
                  alt="HackerRank"
                />
              </a>
            </div>

            <div className="tech-item" data-name="LeetCode">
              <a
                href="https://leetcode.com/u/ahsanulaminshanto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg"
                  alt="LeetCode"
                />
              </a>
            </div>

            <div className="tech-item" data-name="Codeforces">
              <a
                href="https://codeforces.com/profile/KnightCoderX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg"
                  alt="Codeforces"
                />
              </a>
            </div>

            <div className="tech-item" data-name="CodeChef">
              <a
                href="https://www.codechef.com/users/ahsanulshanto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codechef.svg"
                  alt="CodeChef"
                />
              </a>
            </div>
          </div>
          <h3>Problem Solving</h3>
          <p>
            Click on the icons to visit my profiles on various competitive
            programming platforms
          </p>
          <p>
            Skilled in solving algorithmic and coding challenges on platforms
            like HackerRank, LeetCode, Codeforces, and CodeChef.
          </p>
          <Link to="/project#Cloud" className="btn">
            Read More
          </Link>
        </div>

        {/* Database */}
        <div className="services-box">
          <FaDatabase className="service-icon" />
          <div className="tech-container">
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
          </div>
          <h3>Database</h3>
          <p>
            Proficient in relational and non-relational databases including
            MySQL, PostgreSQL, MongoDB, and Firebase for backend applications.
          </p>
          <Link to="/project#Backend" className="btn">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
