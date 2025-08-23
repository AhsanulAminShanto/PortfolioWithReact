function Project() {
  const projects = [
    { id: 1, title: "RC Car", category: "Mobile App", desc: "Experienced in operating and maneuvering remote-controlled cars.", img: "/images/portfolio1.jpg", github: "https://github.com/AhsanulAminShanto", live: "https://www.youtube.com/watch?v=QGcpq1sEPOg" },
    { id: 2, title: "Weather App", category: "Mobile App", desc: "Built a mobile app showing real-time weather forecasts.", img: "/images/portfolio3.jpg", github: "#", live: "#" },
    { id: 3, title: "Task Manager", category: "Mobile App", desc: "Implemented task management app with local storage.", img: "/images/portfolio8.jpg", github: "#", live: "#" },

    { id: 4, title: "Game Project", category: "Games", desc: "Created interactive Unity game levels and logic.", img: "/images/portfolio5.jpg", github: "#", live: "#" },
    { id: 5, title: "Portfolio Site", category: "Games", desc: "Designed and deployed personal portfolio using Next.js.", img: "/images/portfolio7.jpg", github: "#", live: "#" },
    { id: 6, title: "Chat App", category: "Games", desc: "Real-time chat application using WebSockets.", img: "/images/portfolio9.jpg", github: "#", live: "#" },

    { id: 7, title: "Web Design", category: "Frontend", desc: "Career opportunities that aid both professional and personal growth.", img: "/images/portfolio2.jpg", github: "#", live: "#" },
    { id: 8, title: "E-commerce UI", category: "Frontend", desc: "Developed responsive e-commerce web pages using React.", img: "/images/portfolio4.jpg", github: "#", live: "#" },

    { id: 9, title: "Blog Platform", category: "Backend", desc: "Developed full-stack blog platform with CRUD operations.", img: "/images/portfolio6.jpg", github: "#", live: "#" },
    { id: 10, title: "Data Visualizer", category: "Backend", desc: "Visualized data using Chart.js and dynamic tables.", img: "/images/portfolio10.jpg", github: "#", live: "#" },
  ];

  const categories = ["Mobile App", "Games", "Frontend", "Cloud", "Backend"];

  return (
    <section className="projects-page">
      {/* Project navbar */}
      <nav className="project-navbar">
        {categories.map((cat) => (
          <a key={cat} href={`#${cat.replace(/\s/g, '')}`}>{cat}</a>
        ))}
      </nav>

      {/* Project sections */}
      {categories.map((cat) => (
        <section key={cat} id={cat.replace(/\s/g, '')} className="project-category">
          <h2 className="heading">{cat}</h2>
          <div className="project-grid">
            {projects.filter(p => p.category === cat).map(p => (
              <div key={p.id} className="project-box">
                <img src={p.img} alt={p.title} />
                {/* Always visible content below the image */}
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
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
