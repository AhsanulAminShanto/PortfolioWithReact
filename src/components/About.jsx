import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about-content-wrapper">
        <div className="about-section left-image">
          <div className="about-img">
            <img src="/images/1.jpg" alt="Education" />
          </div>
          <div className="about-text">
            <h2 className="heading">
              About <span>Me</span>
            </h2>

            <p>
              I am a Computer Science and Engineering graduate with strong
              expertise in algorithms, data structures, and software
              development. I have hands-on experience in web and mobile app
              development using technologies like Flutter, Dart, JavaScript,
              Python, and C++, along with cloud computing on AWS. Passionate
              about creating efficient, user-friendly applications, I have
              developed projects ranging from health monitoring platforms to
              real estate apps. I thrive on solving complex problems, learning
              new technologies, and turning innovative ideas into practical
              solution
            </p>
          </div>
        </div>

        <div className="about-section right-image">
          <div className="about-text">
            <h3>Education</h3>
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
          </div>
          <div className="about-img">
            <img src="/images/IUB.jpg" alt="Education" />
          </div>
        </div>

        <a href="https://jhapasa-chaya.webnode.page/" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
