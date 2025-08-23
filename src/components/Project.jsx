import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Project() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const projects = [
    { id: 1, title: "RC Car", category: "Hardware", desc: "Experienced in operating and maneuvering remote-controlled cars.Experienced in operating and maneuvering remote-controlled cars.Experienced in operating and maneuvering remote-controlled cars.", img: "/images/portfolio1.jpg", github: "https://github.com/AhsanulAminShanto", live: "https://www.youtube.com/watch?v=QGcpq1sEPOg" },
    { id: 2, title: "Weather App", category: "Mobile App", desc: "Built a mobile app showing real-time weather forecasts.", img: "/images/WA.PNG", github: "https://github.com/AhsanulAminShanto/weather-app-iub-final-project", live: "#" },
    { id: 3, title: "Alarm Location App", category: "Mobile App", desc: "Implemented task management app with local storage.", img: "/images/FBAA.PNG", github: "https://github.com/AhsanulAminShanto/Flutter-alarm-location-app/tree/master", live: "#" },
    { id: 4, title: "Game Project", category: "Games", desc: "Created interactive Unity game levels and logic.", img: "/images/portfolio5.jpg", github: "#", live: "#" },
    { id: 5, title: "Portfolio Site", category: "Games", desc: "Designed and deployed personal portfolio using Next.js.", img: "/images/portfolio7.jpg", github: "#", live: "#" },
    { id: 6, title: "Chat App", category: "Games", desc: "Real-time chat application using WebSockets.", img: "/images/portfolio9.jpg", github: "#", live: "#" },
    { id: 7, title: "Web Design", category: "Frontend", desc: "Career opportunities that aid both professional and personal growth.", img: "/images/NSSS.PNG", github: "https://github.com/AhsanulAminShanto/NextStep-Solutions-Website", live: "https://nextstep-solutions-website.netlify.app/" },
    { id: 8, title: "Rolex Next.js", category: "Frontend", desc: "Developed responsive e-commerce web pages using React.", img: "/images/NS.PNG", github: "https://github.com/AhsanulAminShanto/Next.js", live: "https://nextstep-solutions-website.netlify.app/" },
    { id: 9, title: "Blog Platform", category: "Backend", desc: "Developed full-stack blog platform with CRUD operations.", img: "/images/portfolio6.jpg", github: "#", live: "#" },
    { id: 10, title: "Employee Management", category: "Backend", desc: "Visualized data using Chart.js and dynamic tables.", img: "/images/EMS.PNG", github: "https://github.com/AhsanulAminShanto/Employee-Department-Management-Backend-Django-ORM-SQLite/tree/main", live: "#" },
    { id: 11, title: "Alarm Location App", category: "Mobile App", desc: "Implemented task management app with local storage.", img: "/images/RMA.PNG", github: "https://github.com/AhsanulAminShanto/Real-Estate-Rental-Mobile-App/tree/main", live: "#" },
    { id: 12, title: "Soccer CarRobot", category: "Hardware", desc: "Proficient in operating and controlling versatile robot vehicles that combine the functionalities of a scooter and a car. Skilled in maneuvering these robots with precision, ensuring a seamless transition between driving.", img: "/images/portfolio3.jpg", github: "#", live: "#" },
  { id: 13, title: "Line Following", category: "Hardware", desc: "Skilled in designing and programming autonomous robots capable of following lines accurately. Proficient in implementing sensor-based navigation systems to detect and track lines, enabling the robot.", img: "/images/portfolio4.jpg", github: "#", live: "#" }
];

  const categories = ["Mobile App", "Games", "Frontend", "Cloud", "Backend","Hardware"];

  return (
    <section className="projects-page">
      <nav className="project-navbar">
        {categories.map((cat) => (
          <a key={cat} href={`#${cat.replace(/\s/g, '')}`}>{cat}</a>
        ))}
      </nav>

      {categories.map((cat) => (
        <section key={cat} id={cat.replace(/\s/g, '')} className="project-category">
          <h2 className="heading">{cat}</h2>
          <div className="project-grid">
            {projects
              .filter((p) => p.category === cat)
              .map((p) => (
                <div
                  key={p.id}
                  className={`project-box ${p.category === "Mobile App" ? "portrait" : ""}`}
                >
                  <img src={p.img} alt={p.title} className="project-img" />
                  <div className="project-content">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-links">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">
                        GitHub
                      </a>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn">
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className="project-layer">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-links">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">
                        GitHub
                      </a>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </section>
  );
}

export default Project;
