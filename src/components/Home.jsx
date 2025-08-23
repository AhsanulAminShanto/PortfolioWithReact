import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    new Typed(typedRef.current, {
      strings: ["Software Engineer", "Game Developer", "Programmer"],
      typeSpeed: 1,
      backSpeed: 1,
      loop: true,
    });
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Ahsanul Amin Shanto</h1>
        <h3>
          And I'm a <span ref={typedRef} className="multiple-text"></span>
        </h3>
        <p>
          I am a Computer Science and Engineering graduate with strong expertise in algorithms, 
          data structures, and software development. I have hands-on experience in web and mobile 
          app development using technologies like Flutter, Dart, JavaScript, Python, and C++, along with
           cloud computing on AWS. Passionate about creating efficient, user-friendly applications, 
           I have developed projects ranging from health monitoring platforms to real estate apps. I
            thrive on solving complex problems, learning new technologies, and turning innovative ideas into practical solutions.
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100008853975837"><i className='bx bxl-facebook'></i></a>
          <a href="https://twitter.com/AhsanulShanto"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.instagram.com/ahsanulaminshanto/"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://www.linkedin.com/in/ahsanul-amin-shanto-a61b74177/"><i className='bx bxl-linkedin'></i></a>
        </div>
        <a href="/cv.pdf" download className="btn">Download CV</a>
        <div className="stats">
          <div className="stat">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Tech Stack Used</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Total Commits</p>
          </div>
        </div>
      </div>
      <div className="home-img">
        <img src="/images/home.jpg" alt="profile" />
      </div>
    </section>
  );
}

export default Home;
