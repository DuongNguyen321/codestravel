import Header from "./Header2";
import Footer from "./Footer2";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "../../../Style/pages/Egypt/night.css";
import "../../../Style/pages/Egypt/style.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Egypt
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          vùng đất của Pharaohs
        </h3>
        <p data-aos="fade-up" data-aos-delay="400">
          Egypt là một trong những quốc gia lâu đời nhất trên thế giới. Đây là
          nơi người Ai Cập cổ đại đã xây dựng một nền văn minh vĩ đại trong
          thung lũng sông Nile, với rất nhiều đền thờ, cổ vật và những tàn tích
          ngoạn mục đáng để bạn khám phá
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="500"
          to="/egypt"
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
            <h1>chuyến đi được bình chọn tốt nhất</h1>
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
          <input type="number" placeholder="Số người" min={2} max={8} placeholder="Từ 2-8 người" />
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

export default function EgyptBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Pages">
      <Header />
      <div className="container">
        <Home />
        <Book />
      </div>
      <Footer />
    </div>
  );
}
