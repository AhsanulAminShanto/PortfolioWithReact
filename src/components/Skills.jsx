import { BsCodeSlash, BsPaintBucket, BsBarChartLine } from 'react-icons/bs';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  useScrollReveal();

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="services-container">

        {/* Programming Languages */}
        <div className="services-box">
          <BsCodeSlash className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="C">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/c.svg" alt="C" />
            </div>
            <div className="tech-item" data-name="C++">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cplusplus.svg" alt="C++" />
            </div>
            <div className="tech-item" data-name="Java">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/java.svg" alt="Java" />
            </div>
            <div className="tech-item" data-name="Python">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg" alt="Python" />
            </div>
            <div className="tech-item" data-name="JavaScript">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg" alt="JavaScript" />
            </div>
            <div className="tech-item" data-name="TypeScript">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg" alt="TypeScript" />
            </div>
            <div className="tech-item" data-name="PHP">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/php.svg" alt="PHP" />
            </div>
            <div className="tech-item" data-name="MySQL">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg" alt="MySQL" />
            </div>
          </div>
          <h3>Programming Languages</h3>
          <p>Expertise in C, C++, Java, Python, JavaScript, TypeScript, PHP, and MySQL with a focus on creating responsive and efficient applications.</p>
          <a href="/assets/cv.pdf" className="btn">Read More</a>
        </div>

        {/* Frontend Technologies */}
        <div className="services-box">
          <BsPaintBucket className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="HTML5">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg" alt="HTML5" />
            </div>
            <div className="tech-item" data-name="CSS3">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg" alt="CSS3" />
            </div>
            <div className="tech-item" data-name="React.js">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" alt="React.js" />
            </div>
            <div className="tech-item" data-name="Next.js">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg" alt="Next.js" />
            </div>
            <div className="tech-item" data-name="Tailwind CSS">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg" alt="Tailwind CSS" />
            </div>
            <div className="tech-item" data-name="Bootstrap">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/bootstrap.svg" alt="Bootstrap" />
            </div>
            <div className="tech-item" data-name="Material UI">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/materialui.svg" alt="Material UI" />
            </div>
            <div className="tech-item" data-name="DaisyUI">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/daisyui.svg" alt="DaisyUI" />
            </div>
            <div className="tech-item" data-name="Firebase">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg" alt="Firebase" />
            </div>
          </div>
          <h3>Frontend Technology</h3>
          <p>Building responsive and interactive web applications using HTML, CSS, React, Next.js, Tailwind, and other modern tools.</p>
          <a href="/assets/Education.pdf" className="btn">Read More</a>
        </div>

        {/* Backend Technologies */}
        <div className="services-box">
          <BsBarChartLine className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="Node.js">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg" alt="Node.js" />
            </div>
            <div className="tech-item" data-name="Express.js">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg" alt="Express.js" />
            </div>
          </div>
          <h3>Backend Technology</h3>
          <p>Creating scalable server-side applications with Node.js and Express.js.</p>
          <a href="/assets/Athletics.pdf" className="btn">Read More</a>
        </div>

        {/* Tools & Platforms */}
        <div className="services-box">
          <BsPaintBucket className="service-icon" />
          <div className="tech-container">
            <div className="tech-item" data-name="Git">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg" alt="Git" />
            </div>
            <div className="tech-item" data-name="Netlify">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/netlify.svg" alt="Netlify" />
            </div>
            <div className="tech-item" data-name="Vercel">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg" alt="Vercel" />
            </div>
            <div className="tech-item" data-name="VS Code">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/visualstudiocode.svg" alt="VS Code" />
            </div>
            <div className="tech-item" data-name="IntelliJ IDEA">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/intellijidea.svg" alt="IntelliJ IDEA" />
            </div>
            <div className="tech-item" data-name="PyCharm">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pycharm.svg" alt="PyCharm" />
            </div>
            <div className="tech-item" data-name="RStudio">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/rstudio.svg" alt="RStudio" />
            </div>
            <div className="tech-item" data-name="Code::Blocks">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeblocks.svg" alt="Code::Blocks" />
            </div>
            <div className="tech-item" data-name="VMware">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vmware.svg" alt="VMware" />
            </div>
            <div className="tech-item" data-name="VirtualBox">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/virtualbox.svg" alt="VirtualBox" />
            </div>
            <div className="tech-item" data-name="Android Studio">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/androidstudio.svg" alt="Android Studio" />
            </div>
            <div className="tech-item" data-name="LaTeX">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/latex.svg" alt="LaTeX" />
            </div>
          </div>
          <h3>Tools & Platforms</h3>
          <p>Experienced with Git, Netlify, Vercel, VS Code, IntelliJ IDEA, PyCharm, RStudio, and more.</p>
          <a href="/assets/Athletics.pdf" className="btn">Read More</a>
        </div>
        {/* Problem Solving */}
<div className="services-box">
  <BsBarChartLine className="service-icon" />
  <div className="tech-container">
    <div className="tech-item" data-name="HackerRank">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hackerrank.svg" alt="HackerRank" />
    </div>
    <div className="tech-item" data-name="LeetCode">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg" alt="LeetCode" />
    </div>
    <div className="tech-item" data-name="Codeforces">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg" alt="Codeforces" />
    </div>
    <div className="tech-item" data-name="CodeChef">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codechef.svg" alt="CodeChef" />
    </div>
  </div>
  <h3>Problem Solving</h3>
  <p>Skilled in solving algorithmic and coding challenges on platforms like HackerRank, LeetCode, Codeforces, and CodeChef.</p>
  <a href="/assets/ProblemSolving.pdf" className="btn">Read More</a>
</div>

{/* Database */}
<div className="services-box">
  <BsPaintBucket className="service-icon" />
  <div className="tech-container">
    <div className="tech-item" data-name="MySQL">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg" alt="MySQL" />
    </div>
    <div className="tech-item" data-name="PostgreSQL">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg" alt="PostgreSQL" />
    </div>
    <div className="tech-item" data-name="MongoDB">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg" alt="MongoDB" />
    </div>
    <div className="tech-item" data-name="Firebase">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg" alt="Firebase" />
    </div>
  </div>
  <h3>Database</h3>
  <p>Proficient in relational and non-relational databases including MySQL, PostgreSQL, MongoDB, and Firebase for backend applications.</p>
  <a href="/assets/Database.pdf" className="btn">Read More</a>
</div>


      </div>
    </section>
  );
};

export default Skills;
