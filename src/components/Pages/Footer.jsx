import { Link } from "react-router-dom";
import "../../Style/pages/night.css";
import "../../Style/pages/style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <Link to="/" className="logo">
              <span>S</span>TRAVEL
            </Link>
            <p>
              Trải qua 17 năm phát triển bền vững, STravel đã ghi dấu ấn của
              mình với thông điệp <br />
              “Nâng tầm trải nghiệm từng chuyến đi”
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <h3>Chuyển hướng nhanh</h3>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right"></i> Trang chủ
            </Link>
            <a href="#about" className="links">
              <i className="fas fa-arrow-right"></i> About
            </a>
            <a href="#destination" className="links">
              <i className="fas fa-arrow-right"></i> Điểm đến
            </a>
            <a href="#services" className="links">
              <i className="fas fa-arrow-right"></i> Dịch vụ
            </a>
            <a href="#gallery" className="links">
              <i className="fas fa-arrow-right"></i> Ảnh
            </a>
            <a href="#blogs" className="links">
              <i className="fas fa-arrow-right"></i> blogs
            </a>
          </div>
          <div className="box">
            <h3>Liên Hệ</h3>
            <p>
              <i className="fas fa-map"></i>Hà nội, Việt Nam
            </p>
            <p>
              <i className="fas fa-phone"></i> +84-986-921-104
            </p>
            <p className="lower">
              <i className="fas fa-envelope"></i> Duongcoilc2004@gmail.com
            </p>
            <p>
              <i className="fas fa-clock"></i> 7:00am - 10:00pm
            </p>
          </div>
          <div className="box">
            <h3>Tin Tức Mới</h3>
            <p>Đăng ký để nhận tin tức về ưu đãi sớm nhất!</p>
            <form action="">
              <input
                type="email"
                name=""
                placeholder="Email của bạn"
                className="email"
                id=""
              />
              <input type="submit" value="Đăng ký" className="btn" />
            </form>
          </div>
        </div>
      </section>
      <Link to={"/"}>
        <div className="credit">
          created by <span>STravel</span> | all rights reserved!
        </div>
      </Link>
    </footer>
  );
}
