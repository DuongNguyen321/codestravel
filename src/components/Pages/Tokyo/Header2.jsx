import "../../../Style/pages/style.css";
import "../../../Style/pages/night.css";
import { Link } from "react-router-dom";
export default function Header() {
  const handleMenu = (e) => {
    let Navbar = document.querySelector(".navbar");
    Navbar.classList.toggle("active");
  };
  const handleTheme = (e) => {
    let btnToggle = document.querySelector(".btn-toggle");
    let body = document.body;
    var theme = localStorage.getItem("theme");

    if (body.getAttribute("class") === "light" && theme === "light") {
      body.classList = "dark";
      localStorage.setItem("theme", "dark");
      btnToggle.classList.remove("fa-moon");
      btnToggle.classList.add("fa-sun-o");
    } else {
      body.classList = "light";
      localStorage.setItem("theme", "light");
      btnToggle.classList.add("fa-moon");
      btnToggle.classList.remove("fa-sun-o");
    }
  };
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars" onClick={handleMenu}></div>

      <Link
        data-aos="zoom-in-left"
        data-aos-delay="100"
        to="/"
        className="logo"
      >
        <span>S</span>TRAVEL
      </Link>

      <nav className="navbar">
        <Link to="/tokyo#home" data-aos="zoom-in-left" data-aos-delay="150">
          Home
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="200" to="/tokyo#about">
          About
        </Link>
        <Link
          data-aos="zoom-in-left"
          data-aos-delay="250"
          to="/tokyo#destination"
        >
          Điểm đến
        </Link>
        <Link
          data-aos="zoom-in-left"
          data-aos-delay="300"
          to="/tokyo#services"
        >
          Dịch vụ
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="350" to="/tokyo#gallery">
          Ảnh
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="400" to="/tokyo#blogs">
          blogs
        </Link>
      </nav>
      <i
        className="far fa-moon btn-toggle"
        data-aos="zoom-in-left"
        data-aos-delay="450"
        onClick={handleTheme}
      ></i>
      <Link
        data-aos="zoom-in-left"
        data-aos-delay="500"
        to="/tokyo"
        className="btn"
      >
        Trở Lại
      </Link>
    </header>
  );
}
