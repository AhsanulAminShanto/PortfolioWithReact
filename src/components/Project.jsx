import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Project() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const projects = [
    {
      id: 1,
      title: 'RC Car',
      category: 'Hardware',
      desc: 'Experienced in operating and maneuvering remote-controlled cars.Experienced in operating and maneuvering remote-controlled cars.Experienced in operating and maneuvering remote-controlled cars.',
      img: '/images/portfolio1.jpg',
      github: 'https://github.com/AhsanulAminShanto',
      live: 'https://www.youtube.com/watch?v=QGcpq1sEPOg',
    },
    {
      id: 2,
      title: 'Weather App',
      category: 'Mobile App',
      desc: 'Built a mobile app showing real-time weather forecasts.',
      img: '/images/WA.PNG',
      github:
        'https://github.com/AhsanulAminShanto/weather-app-iub-final-project',
      live: '#',
    },
    {
      id: 3,
      title: 'Alarm Location App',
      category: 'Mobile App',
      desc: 'Implemented task management app with local storage.',
      img: '/images/FBAA.PNG',
      github:
        'https://github.com/AhsanulAminShanto/Flutter-alarm-location-app/tree/master',
      live: '#',
    },
    {
      id: 4,
      title: 'Word Master: Four Letters Game ',
      category: 'Games',
      desc: 'A 2D game developed as a final project, featuring engaging gameplay with interactive mechanics and dynamic challenges.',
      img: '/images/4LG.jpg',
      github: 'https://github.com/AhsanulAminShanto/FinalProjectGame2D',
      live: '',
    },
    {
      id: 5,
      title: 'Road Rush',
      category: 'Games',
      desc: 'A simple 2D car game where players navigate through obstacles to survive and score, featuring intuitive controls and dynamic challenges.',
      img: '/images/CarWithObstacle.PNG',
      github: 'https://github.com/AhsanulAminShanto/CAR-WITH-OBSTACLE',
      live: '',
    },
    {
      id: 31,
      title: 'Space Shooter',
      category: 'Games',
      desc: 'A classic 2D space shooter game where players blast enemies and dodge obstacles to survive, featuring fast-paced gameplay and engaging visuals.',
      img: '/images/SpaceShooter.png',
      github: 'https://github.com/AhsanulAminShanto/SpaceShooterGames',
      live: '',
    },
    {
      id: 7,
      title: 'Web Design',
      category: 'Frontend',
      desc: 'Career opportunities that aid both professional and personal growth.',
      img: '/images/NSSS.PNG',
      github: 'https://github.com/AhsanulAminShanto/NextStep-Solutions-Website',
      live: 'https://nextstep-solutions-website.netlify.app/',
    },
    {
      id: 8,
      title: 'Rolex Website With Next.js',
      category: 'Frontend',
      desc: 'Developed responsive e-commerce web pages using React.',
      img: '/images/Rolexproduct.png',
      github: 'https://github.com/AhsanulAminShanto/Next.js',
      live: 'https://nextstep-solutions-website.netlify.app/',
    },
    {
      id: 9,
      title: 'Enhanced Health Monitoring Platform',
      category: 'Backend',
      desc: 'A platform designed for health monitoring for Diabetes patients.',
      img: '/images/download.jpeg',
      github:
        'https://github.com/AhsanulAminShanto/Enhanced-Health-Monitoring-Platform1',
      live: '',
    },
    {
      id: 10,
      title: 'Employee Management',
      category: 'Backend',
      desc: 'Visualized data using Chart.js and dynamic tables.',
      img: '/images/EMS.PNG',
      github:
        'https://github.com/AhsanulAminShanto/Employee-Department-Management-Backend-Django-ORM-SQLite/tree/main',
      live: '#',
    },
    {
      id: 11,
      title: 'Alarm Location App',
      category: 'Mobile App',
      desc: 'Implemented task management app with local storage.',
      img: '/images/RMA.PNG',
      github:
        'https://github.com/AhsanulAminShanto/Real-Estate-Rental-Mobile-App/tree/main',
      live: '#',
    },
    {
      id: 12,
      title: 'Soccer CarRobot',
      category: 'Hardware',
      desc: 'Proficient in operating and controlling versatile robot vehicles that combine the functionalities of a scooter and a car. Skilled in maneuvering these robots with precision, ensuring a seamless transition between driving.',
      img: '/images/portfolio3.jpg',
      github: '#',
      live: '#',
    },
    {
      id: 13,
      title: 'Line Following',
      category: 'Hardware',
      desc: 'Skilled in designing and programming autonomous robots capable of following lines accurately. Proficient in implementing sensor-based navigation systems to detect and track lines, enabling the robot.',
      img: '/images/portfolio4.jpg',
      github: '#',
      live: '#',
    },
    {
      id: 14,
      title: 'CIRCLE AI',
      category: 'Frontend',
      desc: 'Implemented task management app with local storage.',
      img: '/images/CIR.PNG',
      github:
        'https://github.com/AhsanulAminShanto/Frontend-Development-responsive-frontend-design',
      live: 'https://frontenddesignresponsive.netlify.app/',
    },
    {
      id: 15,
      title: 'Podochhinita',
      category: 'Frontend',
      desc: 'Career opportunities that aid both professional and personal growth.',
      img: '/images/POD.PNG',
      github: 'https://github.com/AhsanulAminShanto/Podochhinita',
      live: 'https://podochhinita2.netlify.app/',
    },
    {
      id: 17,
      title: 'Country Weather API Website',
      category: 'Frontend',
      desc: 'A website utilizing weather API to display country-specific weather information.',
      img: '/images/1.PNG',
      github:
        'https://github.com/AhsanulAminShanto/Country-Weather-API-Website',
      live: 'https://country-weather-api-website.netlify.app/',
    },
    {
      id: 18,
      title: 'GreenScapeAI',
      category: 'Cloud',
      desc: 'An AI-driven urban ecosystem optimization platform using cloud services, Google Maps Geocoding API, plant identification APIs (Plant.id, Trefle), and MySQL database for city data, plant recommendations, and geospatial analysis.',
      img: '/images/Cloud.png',
      github: 'https://github.com/AhsanulAminShanto/GreenScape1',
      live: 'https://shantotech.netlify.app/greenscape1',
    },
    {
      id: 19,
      title: 'Rolex Website Frontend',
      category: 'Frontend',
      desc: 'A frontend website showcasing a Rolex-inspired design.',
      img: '/images/Rolex.PNG',
      github: 'https://github.com/AhsanulAminShanto/RolexFrontend',
      live: 'https://rolexwatch-website.netlify.app/',
    },
    {
      id: 20,
      title: 'My Portfolio',
      category: 'Frontend',
      desc: 'A personal portfolio website showcasing projects, skills, and professional achievements with a modern, responsive design.',
      img: '/images/PortfolioOld.png',
      github: 'https://github.com/AhsanulAminShanto/MyPortfolio',
      live: 'https://ahsanulaminshanto.github.io/MyPortfolio/',
    },
    {
      id: 21,
      title: 'Login Form',
      category: 'Frontend',
      desc: 'A responsive login form interface built with modern web technologies, designed for secure user authentication.',
      img: '/images/Login_Form.png',
      github: 'https://github.com/AhsanulAminShanto/Login_form',
      live: 'https://simple-login-form99.netlify.app/',
    },
    {
      id: 22,
      title: 'Chalie Chaplin',
      category: 'Frontend',
      desc: 'A frontend website inspired by Charlie Chaplin, likely showcasing a themed portfolio or tribute with modern web technologies.',
      img: '/images/chalie-chaplin.png',
      github: 'https://github.com/AhsanulAminShanto/ChalieChaplin',
      live: 'https://charlie-chaplin-biography.netlify.app/',
    },
    {
      id: 23,
      title: 'To-Do List',
      category: 'Backend',
      desc: 'A to-do list application for task management With PHP and MySql.',
      img: '/images/Capture1.JPG',
      github: 'https://github.com/AhsanulAminShanto/To-Do_List',
      live: 'https://github.com/AhsanulAminShanto/To-Do_List/blob/main/ToDo/Screenshoot/2023-08-23%2021-05-50.mkv',
    },
    {
      id: 24,
      title: 'Contact Us Form',
      category: 'Backend',
      desc: 'A responsive contact form interface built with modern web technologies, designed for user communication and interaction.',
      img: '/images/CUF.JPG',
      github: 'https://github.com/AhsanulAminShanto/ContactUsForm',
      live: 'https://ahsanulaminshanto.github.io/ContactUsForm/',
    },
    {
      id: 25,
      title: 'Coupon Code',
      category: 'Backend',
      desc: 'A frontend application for generating or validating coupon codes, built with modern web technologies for user interaction.',
      img: '/images/3.JPG',
      github: 'https://github.com/AhsanulAminShanto/coupon_code',
      live: 'https://github.com/AhsanulAminShanto/coupon_code/blob/main/CW/Screenshoot/2023-08-22%2019-47-06.mkv',
    },
    {
      id: 26,
      title: 'Weather View Site',
      category: 'Frontend',
      desc: 'A frontend website displaying weather information, likely utilizing a weather API for dynamic updates and a responsive design.',
      img: '/images/Capture2.JPG',
      github: 'https://github.com/AhsanulAminShanto/weather_view_site',
      live: 'https://weather-web-app99.netlify.app/',
    },
    {
      id: 27,
      title: 'Portfolio',
      category: 'Frontend',
      desc: 'A personal portfolio website showcasing projects, skills, and professional achievements with a modern, responsive design.',
      img: '/images/p1.PNG',
      github: 'https://github.com/AhsanulAminShanto/Portfolio',
      live: 'https://ahsanulaminshanto.github.io/Portfolio/',
    },
    {
      id: 28,
      title: 'Travel Website',
      category: 'Frontend',
      desc: 'A travel website built as an assignment project, featuring responsive design for showcasing destinations, bookings, and travel information.',
      img: '/images/TravelWebsite.png',
      github: 'https://github.com/AhsanulAminShanto/Assignment2',
      live: 'https://travel-website99.netlify.app/',
    },
    {
      id: 29,
      title: 'Mini Golf 2D',
      category: 'Games',
      desc: 'A 2D mini-golf game with intuitive mechanics and challenging courses, featuring realistic physics and customizable levels for enhanced replayability.',
      img: '/images/Golf.jpg',
      github: 'https://github.com/AhsanulAminShanto/MiniGolf2D',
      live: '',
    },
    {
      id: 30,
      title: 'Call Break Game',
      category: 'Games',
      desc: 'An experimental 2D game project focused on building engaging gameplay mechanics and interactive features.',
      img: '/images/CBG.PNG',
      github: 'https://github.com/AhsanulAminShanto/CBG',
      live: '',
    },
    {
      id: 31,
      title: 'Plane And Obstacle',
      category: 'Games',
      desc: 'A fast-paced 2D plane game where players skillfully dodge obstacles to reach the finish line and win, featuring dynamic challenges and responsive controls.',
      img: '/images/PlaneAndObstacle.PNG',
      github: 'https://github.com/AhsanulAminShanto/Plane-And-Obstacle',
      live: '',
    },
    {
      id: 32,
      title: 'Fantasy World',
      category: 'Games',
      desc: 'A 3D Unity fantasy world scene featuring immersive environments, dynamic lighting, and interactive elements for an engaging player experience.',
      img: '/images/FantsyWorld.png',
      github: 'https://github.com/AhsanulAminShanto/FantasyWorld',
      live: '',
    },
  ];

  const categories = [
    'Mobile App',
    'Games',
    'Frontend',
    'Cloud',
    'Backend',
    'Hardware',
  ];

  return (
    <section className="projects-page">
      <nav className="project-navbar">
        {categories.map((cat) => (
          <a key={cat} href={`#${cat.replace(/\s/g, '')}`}>
            {cat}
          </a>
        ))}
      </nav>

      {categories.map((cat) => (
        <section
          key={cat}
          id={cat.replace(/\s/g, '')}
          className="project-category"
        >
          <h2 className="heading">{cat}</h2>
          <div className="project-grid">
            {projects
              .filter((p) => p.category === cat)
              .map((p) => (
                <div
                  key={p.id}
                  className={`project-box ${
                    p.category === 'Mobile App' ? 'portrait' : ''
                  }`}
                >
                  <img src={p.img} alt={p.title} className="project-img" />
                  <div className="project-content">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-links">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className="project-layer">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-links">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
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
