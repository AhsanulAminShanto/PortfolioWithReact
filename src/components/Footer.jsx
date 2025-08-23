import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation(); // get current page path

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright © 2025 by Shanto | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href={location.pathname} onClick={scrollToTop}>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
