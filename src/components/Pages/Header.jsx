import "../../Style/pages/style.css"
import "../../Style/pages/night.css"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars"></div>

      <Link data-aos="zoom-in-left" data-aos-delay="100" to="/" className="logo">
        <span>S</span>TRAVEL
      </Link>

      <nav className="navbar">
        <a href="#home" data-aos="zoom-in-left" data-aos-delay="150">
          Home
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="200" href="#about">
          About
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="250" href="#destination">
          Điểm đến
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="300" href="#services">
          Dịch vụ
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="350" href="#gallery">
          Ảnh
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="400" href="#blogs">
          blogs
        </a>
      </nav>
      <i
        className="far fa-moon btn-toggle"
        data-aos="zoom-in-left"
        data-aos-delay="450"
      ></i>
      <a
        data-aos="zoom-in-left"
        data-aos-delay="500"
        href="#book-form"
        className="btn"
      >
        Đặt Ngay
      </a>
    </header>
  );
}