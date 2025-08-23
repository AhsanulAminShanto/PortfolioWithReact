import { NavLink } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import { useEffect, useRef } from "react";

function Header() {
  const menuIcon = useRef(null);
  const navbar = useRef(null);

  useEffect(() => {
    const handleToggle = () => {
      navbar.current.classList.toggle("active");
    };

    if (menuIcon.current && navbar.current) {
      menuIcon.current.addEventListener("click", handleToggle);
    }

    // Cleanup event listener
    return () => {
      if (menuIcon.current) {
        menuIcon.current.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <header className="header">
      <NavLink to="/" className="logo">Shanto's.Portfolio</NavLink>
      <i ref={menuIcon} className="bx bx-menu" id="menu-icon"></i>
      <nav ref={navbar} className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink>
        <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")}>Project</NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>Resume</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </nav>
      <a href="/hire" className="hire-btn">Hire me</a>
    </header>
  );
}

export default Header;