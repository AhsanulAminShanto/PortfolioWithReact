import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about-content-wrapper">
        <div className="about-section left-image">
          <div className="about-img">
            <img src="/images/about.jpg" alt="Education" />
          </div>
          <div className="about-text">
            <h2 className="heading">About <span>Me</span></h2>
            
            <p>I am a Computer Science and Engineering graduate with strong expertise in algorithms, data structures, and software development. I have hands-on experience in web and mobile app development using technologies like Flutter, Dart, JavaScript, Python, and C++, along with cloud computing on AWS. Passionate about creating efficient, user-friendly applications, I have developed projects ranging from health monitoring platforms to real estate apps. I thrive on solving complex problems, learning new technologies, and turning innovative ideas into practical solution</p>
          </div>
        </div>

        <div className="about-section right-image">
          <div className="about-text">
            <h3>Education</h3>
            <ul className="about-list">
              <li><strong>Independent University, Bangladesh (IUB)</strong><br />Bachelor of Science in Computer Science and Engineering<br />• CGPA: 3.61</li>
              <li><strong>Sherpur Government College, Sherpur</strong><br />Higher Secondary Certificate (HSC)<br />• GPA: 4.75, Science Group</li>
              <li><strong>Sherpur Government Victoria Academy, Sherpur</strong><br />Secondary School Certificate (SSC)<br />• GPA: 5.00, Science Group</li>
            </ul>
          </div>
          <div className="about-img">
            <img src="/images/portfolio1.jpg" alt="Education" />
          </div>
        </div>

        <div className="about-section left-image">
          <div className="about-img">
            <img src="/images/portfolio1.jpg" alt="Experience" />
          </div>
          <div className="about-text">
            <h3>Experience</h3>
            <ul className="about-list">
              <li><strong>Game Development Intern</strong><br />FunFuse Games LLC<br />October 2024 – February 2025<br />• Contributed to interactive game experiences using Unity and C#.<br />• Collaborated on game mechanics and UI design.<br />• Optimized game performance and debugging.<br />• Worked with agile development and Git version control.</li>
            </ul>
          </div>
        </div>

        <div className="about-section right-image">
          <div className="about-text">
            <h3>Achievements & Certifications</h3>
            <ul className="about-list">
              <li>Dean’s Honor List IUB, Spring 2021</li>
              <li>Dean’s Merit List IUB, Summer 2022</li>
              <li>Dean’s List IUB, Autumn 2020, Spring 2022</li>
              <li>CCNA v7: Introduction to Networks, Cisco Networking Academy, 2022</li>
              <li>Unity Junior Programmer, Unity Technologies, December 2024</li>
              <li>Champion, Microprocessor TechFest IUB, Summer 2023</li>
            </ul>
          </div>
          <div className="about-img">
            <img src="/images/portfolio1.jpg" alt="Achievements" />
          </div>
        </div>

        <div className="about-section left-image">
          <div className="about-img">
            <img src="/images/portfolio1.jpg" alt="Extracurricular" />
          </div>
          <div className="about-text">
            <h3>Extracurricular Activities</h3>
            <ul className="about-list">
              <li><strong>Research Assistant</strong><br />Innovative Project on Robotic Arm Development<br />2022–2023<br />• Contributed to the development of a versatile robotic arm designed for various applications and environments.<br />• Assisted in designing, testing, and refining the mechanical and software components of the robotic arm.<br />• Collaborated with a multidisciplinary team to enhance the functionality and efficiency of the robotic system.</li>
              <li>Inter-School Handball Team (District Champion)</li>
              <li>Inter-School Cricket Team</li>
              <li>Kabaddi Inter-School Team</li>
              <li>Debate Competition (Runners-Up), Sherpur Government Victoria Academy</li>
              <li>Athletics, Sherpur Government Victoria Academy, Sherpur Government College</li>
            </ul>
          </div>
        </div>

        <div className="about-section right-image">
          <div className="about-text">
            <h3>Seminars & Workshops</h3>
            <ul className="about-list">
              <li>Blockchain, Non-Academy, Organized by Independent University, Bangladesh<br />Level Up Your Blockchain Knowledge Workshop<br />July 2024<br />• Participated in an advanced workshop covering topics like smart contract development, DeFi applications, and blockchain security best practices.<br />• Gained practical knowledge and enhanced understanding of the evolving blockchain landscape.</li>
              <li>2013–2016</li>
              <li>2008–2018</li>
            </ul>
          </div>
          <div className="about-img">
            <img src="/images/portfolio1.jpg" alt="Workshops" />
          </div>
        </div>

        <a href="../cv.pdf" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;