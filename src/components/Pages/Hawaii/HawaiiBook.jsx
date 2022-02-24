import Header from "./Header2";
import Footer from "./Footer2";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "../../../Style/pages/Hawaii/night.css";
import "../../../Style/pages/Hawaii/style.css";

const Home = () => {
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Hawaii
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          vùng đất của Pharaohs
        </h3>
        <p data-aos="fade-up" data-aos-delay="400">
          Địa danh này là một quần thể các đảo hoang sơ giữa Thái Bình Dương mà
          nổi bật nhất là các đảo Oahu, Maui, Big island…trong đó đảo Oahu là
          nơi có nhiều người sinh sống nhất và cũng là trung tâm du lịch. Hawaii
          nổi tiếng nhờ các bãi tắm dài và đẹp với nước biển trong xanh. Du
          khách đến Hawaii là để nghỉ dưỡng, xem mặt trời mọc, mặt trời lặn và
          văn hóa của các thổ dân đa đảo
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="500"
          to="/hawaii"
          className="btn"
        >
          Tìm hiểu thêm
        </Link>
      </div>
    </section>
  );
};

const Book = () => {
  return (
    <section className="book-form" id="book-form">
      <form action="">
        <div data-aos="zoom-in" data-aos-delay="50" className="inputBox">
          <span>
            <h1>kỳ nghỉ dưỡng được đánh giá cao nhất</h1>
          </span>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>Số điện thoại</span>
          <input type="text" placeholder="0912345678" maxLength={11} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className="inputBox">
          <span>Email</span>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="inputBox">
          <span>Thời gian đi</span>
          <input type="datetime-local" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="250" className="inputBox">
          <span>Tôi có</span>
          <input type="number" min={2} max={8} placeholder="Từ 2-8 người" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className="inputBox">
          <span>Tôi thanh toán bằng</span>
          <select>
            <option value="momo">Momo</option>
            <option value="bank">Chuyển khoản</option>
            <option value="card">Thẻ VISA</option>
            <option value="none">Thanh toán khi đến nơi</option>
          </select>
        </div>
        <Link
          data-aos="zoom-in"
          data-aos-delay="350"
          className="btn"
          to="/success"
        >
          Đặt Ngay
        </Link>
      </form>
    </section>
  );
};

export default function HawaiiBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Pages Hawaii">
      <Header />
      <div className="container">
        <Home />
        <Book />
      </div>
      <Footer />
    </div>
  );
}
