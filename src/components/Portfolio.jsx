function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "RC Car",
      desc: "Experienced in operating and maneuvering remote-controlled cars...",
      img: "/images/portfolio1.jpg",
      link: "https://www.youtube.com/watch?v=QGcpq1sEPOg"
    },
    {
      id: 2,
      title: "Web Design",
      desc: "Career opportunities that aid both professional and personal growth...",
      img: "/images/portfolio2.jpg",
      link: "https://github.com/AhsanulAminShanto"
    }
    // ... add others
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        {projects.map((p) => (
          <div className="portfolio-box" key={p.id}>
            <img src={p.img} alt={p.title} />
            <div className="portfolio-layer">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
