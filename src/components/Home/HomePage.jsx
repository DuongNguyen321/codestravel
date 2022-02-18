import "../../Style/style.css";
import "../../Style/night.css";
import "../../Style/rate.css";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login(props) {
  return (
    <div className="login-form-container">
      <i className="fas fa-times" id="form-close"></i>
      <form action="">
        <h3>Đăng nhập</h3>
        <input
          type="email"
          autoComplete="username"
          className="box"
          placeholder="Email của bạn"
        />
        <input
          type="password"
          autoComplete="current-password"
          className="box"
          placeholder="Mật khẩu của bạn"
        />
        <input type="submit" value="Đăng nhập" name="login" className="btn" />

        <label htmlFor="remember">
          <input type="checkbox" id="remember" />
          Ghi nhớ
        </label>
        <p>
          Quên mật khẩu? <a href="#home">Bấm vào đây</a>
        </p>
        <p>
          không có tài khoản? <a href="#home">Đăng kí ngay</a>
        </p>
      </form>
    </div>
  );
}

const homeContent = [
  { id: 1, text: "Khám phá các vùng đất mới cùng Stravel" },
  { id: 2, text: "Những chuyến đi đang chờ đợi bạn" },
];
const homeControls = [
  { id: 1, className: "vid-btn active", dataSrc: "./videos/vid-1.mp4" },
  { id: 2, className: "vid-btn", dataSrc: "./videos/vid-2.mp4" },
  { id: 3, className: "vid-btn", dataSrc: "./videos/vid-3.mp4" },
];

function Home(props) {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Mọi chuyến đi đều đáng giá</h3>

        {homeContent.map((homeContent) => {
          return <p key={homeContent.id}>{homeContent.text}</p>;
        })}

        <a href="#packages" className="btn">
          Khám phá ngay
        </a>
      </div>
      <div className="controls">
        {homeControls.map((homeControls) => {
          return (
            <span
              key={homeControls.id}
              className={homeControls.className}
              data-src={homeControls.dataSrc}
            ></span>
          );
        })}
      </div>
      <div className="video-container">
        <video
          src="./videos/vid-1.mp4"
          id="video-slider"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
}
Home.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  className: PropTypes.string,
  dataSrc: PropTypes.string,
};

const bookHeading = [
  { id: 1, className: "", text: "T" },
  { id: 2, className: "", text: "Ì" },
  { id: 3, className: "", text: "M" },
  { id: 4, className: "space", text: "" },
  { id: 5, className: "", text: "Ư" },
  { id: 6, className: "", text: "U" },
  { id: 7, className: "space", text: "" },
  { id: 8, className: "", text: "Đ" },
  { id: 9, className: "", text: "Ã" },
  { id: 10, className: "", text: "I" },
];

const bookSelect = [
  { id: 62, defaultValue: "Vietnam" },

  { id: 0, defaultValue: "America" },
  { id: 1, defaultValue: "China" },
  { id: 2, defaultValue: "Colombia" },
  { id: 3, defaultValue: "Congo" },
  { id: 4, defaultValue: "Cuba" },
  { id: 5, defaultValue: "Cyprus" },
  { id: 6, defaultValue: "Dominica" },
  { id: 7, defaultValue: "Ecuador" },
  { id: 8, defaultValue: "Egypt" },
  { id: 9, defaultValue: "Ethiopia" },
  { id: 10, defaultValue: "France" },

  { id: 11, defaultValue: "Georgia" },
  { id: 12, defaultValue: "Germany" },
  { id: 13, defaultValue: "Greenland" },
  { id: 14, defaultValue: "Guam" },
  { id: 15, defaultValue: "Guyana" },
  { id: 16, defaultValue: "Kong Kong" },
  { id: 17, defaultValue: "Hungary" },
  { id: 18, defaultValue: "ChiIcelandna" },
  { id: 19, defaultValue: "India" },
  { id: 20, defaultValue: "Indonesia" },

  { id: 21, defaultValue: "Iran" },
  { id: 22, defaultValue: "Iraq" },
  { id: 23, defaultValue: "Ireland" },
  { id: 24, defaultValue: "Israel" },
  { id: 25, defaultValue: "Japan" },
  { id: 26, defaultValue: "Lao" },
  { id: 27, defaultValue: "Liberia" },
  { id: 28, defaultValue: "Macau" },
  { id: 29, defaultValue: "Malaysia" },
  { id: 30, defaultValue: "Malta" },

  { id: 31, defaultValue: "Mexico" },
  { id: 32, defaultValue: "Monaco" },
  { id: 33, defaultValue: "Morocco" },
  { id: 34, defaultValue: "Myanmar" },
  { id: 35, defaultValue: "Nauru" },
  { id: 36, defaultValue: "Nepal" },
  { id: 37, defaultValue: "New Zealand" },
  { id: 38, defaultValue: "Nigeria" },
  { id: 39, defaultValue: "Oman" },
  { id: 40, defaultValue: "Pakistan" },

  { id: 41, defaultValue: "Peru" },
  { id: 42, defaultValue: "Philippines" },
  { id: 43, defaultValue: "Qatar" },
  { id: 44, defaultValue: "Russia" },
  { id: 45, defaultValue: "Singapore" },
  { id: 46, defaultValue: "Span" },
  { id: 47, defaultValue: "SriLanka" },
  { id: 48, defaultValue: "ChiSudanna" },
  { id: 49, defaultValue: "Syria" },
  { id: 50, defaultValue: "Taiwan" },

  { id: 51, defaultValue: "Thailand" },
  { id: 52, defaultValue: "Tunisia" },
  { id: 53, defaultValue: "Turkey" },
  { id: 54, defaultValue: "ChUkraineina" },
  { id: 55, defaultValue: "United States" },
  { id: 56, defaultValue: "United Kingdom" },
  { id: 57, defaultValue: "Uzbekistan" },
  { id: 58, defaultValue: "Venezuela" },
  { id: 59, defaultValue: "Serbia" },
  { id: 60, defaultValue: "Zambia" },
  { id: 61, defaultValue: "Zimbabwe" },
];

function Book(props) {
  return (
    <section className="book" id="book">
      <h1 className="heading">
        {bookHeading.map((bookHeading) => {
          return (
            <span key={bookHeading.id} className={bookHeading.className}>
              {bookHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="row">
        <div className="image">
          <img src="../../images/Home/book-img.svg" alt="" />
        </div>
        <form>
          <div className="inputBox">
            <h3>Hãy liên hệ với tôi bằng :</h3>
            <input type="text" placeholder="Email hoặc số điện thoại" />
          </div>
          <div className="inputBox">
            <h3>Tôi muốn đến :</h3>
            <select defaultValue="">
              {bookSelect.map((bookSelect) => {
                return (
                  <option
                    key={bookSelect.id}
                    defaultValue={bookSelect.defaultValue}
                    selected={bookSelect.selected}
                  >
                    {bookSelect.defaultValue}
                  </option>
                );
              })}
            </select>
            <input type="text" placeholder="Địa điểm chính xác" />
          </div>

          <div className="inputBox">
            <h3>Chúng tôi có :</h3>
            <input type="number" placeholder="Số người" />
          </div>
          <div className="inputBox">
            <h3>bắt đầu từ :</h3>
            <input type="date" />
          </div>
          <div className="inputBox">
            <h3>Kết thúc vào :</h3>
            <input type="date" />
          </div>
          <input type="submit" className="btn" value="Tìm Ngay" />
        </form>
      </div>
    </section>
  );
}
Book.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  className: PropTypes.string,
  dataSrc: PropTypes.string,
};

const packagesHeading = [
  { id: 1, text: "Ư", className: "" },
  { id: 2, text: "U", className: "" },
  { id: 3, text: "", className: "space" },
  { id: 4, text: "Đ", className: "" },
  { id: 5, text: "Ã", className: "" },
  { id: 6, text: "I", className: "" },
];

const packagesStar = [
  { id: 1, className: "fas fa-star" },
  { id: 2, className: "fas fa-star" },
  { id: 3, className: "fas fa-star" },
  { id: 4, className: "fas fa-star" },
  { id: 5, className: "far fa-star" },
];

const packagesBox = [
  {
    id: 1,
    src: "./images/Home/p-1.jpg",
    h3: " mumbai",
    p1: "Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại",
    p2: "Chuyến đi được tìm nhiểu nhất",
    price: "30.000.000 ",
    spanPrice: "52.845.245",
    href: "/Mumbai",
  },
  {
    id: 2,
    src: "./images/Home/p-2.jpg",
    h3: " hawaii",
    p1: "hawaii-hòn đảo muôn màu và thiên đường của người chơi lướt ván",
    p2: "kỳ nghỉ dưỡng được đánh giá cao nhất",
    price: "50.000.000 ",
    spanPrice: "65.124.756",
    href: "/Hawaii",
  },
  {
    id: 3,
    src: "./images/Home/p-3.jpg",
    h3: " sydney",
    p1: "Sydney-xứ sở chuột túi và nhà hát SYDNEY OPERA HOUSE",
    p2: "chuyến đi có ưu đãi tốt nhất",
    price: "70.000.000 ",
    spanPrice: "43.354.657",
    href: "/Sydney",
  },
  {
    id: 4,
    src: "./images/Home/p-4.jpg",
    h3: " paris",
    p1: "Paris-Kinh đô thời trang và thành phố về đêm",
    p2: "chuyến đi được đặt nhiều nhất",
    price: "30.000.000 ",
    spanPrice: "83.534.978",
    href: "/Paris",
  },
  {
    id: 5,
    src: "./images/Home/p-5.jpg",
    h3: " tokyo",
    p1: "tokyo-thủ đô có sư giao thoa hài hoà giữa truyền thống và hiện đại",
    p2: "chuyến đi có kinh phí thấp nhất",
    price: "6.500.000 ",
    spanPrice: "10.000.000",
    href: "/Tokyo",
  },
  {
    id: 6,
    src: "./images/Home/p-6.jpg",
    h3: " Egypt",
    p1: "Egypt-vùng đất của Pharaohs và kỳ quan thế giới cổ đại",
    p2: "chuyến đi được bình chọn tốt nhất",
    price: "48.000.000 ",
    spanPrice: "54.346.456",
    href: "/Egypt",
  },
];

const Packages = (props) => {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        {packagesHeading.map((packagesHeading) => {
          return (
            <span
              key={packagesHeading.id}
              className={packagesHeading.className}
            >
              {packagesHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {packagesBox.map((packagesBox) => {
          return (
            <div className="box" key={packagesBox.id}>
              <img src={packagesBox.src} alt={packagesBox.h3} />
              <div className="content">
                <h3>
                  <i className="fas fa-map-marker-alt"></i>
                  {packagesBox.h3}
                </h3>
                <p>{packagesBox.p1}</p>
                <p>{packagesBox.p2}</p>
                <div className="stars">
                  {packagesStar.map((packagesStar) => {
                    return (
                      <i
                        key={packagesStar.id}
                        className={packagesStar.className}
                      ></i>
                    );
                  })}
                </div>
                <div className="price">
                  {packagesBox.price}
                  <span>{packagesBox.spanPrice}</span>
                </div>
                <Link to={packagesBox.href} className="btn">
                  Đặt ngay
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const servicesHeading = [
  { id: 1, text: "D", className: "" },
  { id: 2, text: "Ị", className: "" },
  { id: 3, text: "C", className: "" },
  { id: 4, text: "H", className: "" },
  { id: 5, text: "", className: "space" },
  { id: 6, text: "V", className: "" },
  { id: 7, text: "Ụ", className: "" },
];
const servicesBox = [
  {
    id: 1,
    icon: "fas fa-hotel",
    h3: " Nghỉ dưỡng cao cấp",
    p: "some thing...",
  },
  {
    id: 2,
    icon: "fas fa-utensils",
    h3: " Dịch vụ ăn uống",
    p: "some thing...",
  },
  {
    id: 3,
    icon: "fas fa-bullhorn",
    h3: " chính sách an toàn",
    p: "some thing...",
  },
  {
    id: 4,
    icon: "fas fa-globe-asia",
    h3: " Rộng khắp thế giới",
    p: "some thing...",
  },
  {
    id: 5,
    icon: "fas fa-plane",
    h3: " Luôn nhanh nhất",
    p: "some thing...",
  },
  {
    id: 6,
    icon: "fas fa-hiking",
    h3: " sự phiêu lưu",
    p: "some thing...",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        {servicesHeading.map((servicesHeading) => {
          return (
            <span
              key={servicesHeading.id}
              className={servicesHeading.className}
            >
              {servicesHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {servicesBox.map((servicesBox) => {
          return (
            <div className="box" key={servicesBox.id}>
              <i className={servicesBox.icon}></i>
              <h3>{servicesBox.h3}</h3>
              <p>{servicesBox.p}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const galleryHeading = [
  { id: 1, text: "T", className: "" },
  { id: 2, text: "H", className: "" },
  { id: 3, text: "Ư", className: "" },
  { id: 4, text: "", className: "space" },
  { id: 5, text: "V", className: "" },
  { id: 6, text: "I", className: "" },
  { id: 7, text: "Ệ", className: "" },
  { id: 8, text: "N", className: "" },
];

const galleryBox = [
  {
    id: 1,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-1.jpg",
  },
  {
    id: 2,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-2.jpg",
  },
  {
    id: 3,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-3.jpg",
  },
  {
    id: 4,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-4.jpg",
  },
  {
    id: 5,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-5.jpg",
  },
  {
    id: 6,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-6.jpg",
  },
  {
    id: 7,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-7.jpg",
  },
  {
    id: 8,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-8.jpg",
  },
  {
    id: 9,
    h3: "Ảnh chụp",
    p: " những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ lên đây",
    src: "./images/Home/g-9.jpg",
  },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {galleryHeading.map((galleryHeading) => {
          return (
            <span key={galleryHeading.id} className={galleryHeading.className}>
              {galleryHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {galleryBox.map((galleryBox) => {
          return (
            <div className="box" key={galleryBox.id}>
              <img src={galleryBox.src} alt={galleryBox.h3} />
              <div className="content">
                <h3>{galleryBox.h3}</h3>
                <p>{galleryBox.p}</p>
                <a href="#home" className="btn">
                  Xem thêm
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const reviewHeading = [
  { id: 1, text: "Đ", className: "" },
  { id: 2, text: "Á", className: "" },
  { id: 3, text: "N", className: "" },
  { id: 4, text: "H", className: "" },
  { id: 5, text: "", className: "space" },
  { id: 6, text: "G", className: "" },
  { id: 7, text: "I", className: "" },
  { id: 8, text: "Á", className: "" },
];

const ratingStar = [
  { id: 1, type: "radio", class: "star" },
  { id: 2, type: "radio", class: "star" },
  { id: 3, type: "radio", class: "star" },
  { id: 4, type: "radio", class: "star" },
  { id: 5, type: "radio", class: "star" },
  { id: 6, type: "radio", class: "star" },
  { id: 7, type: "radio", class: "star" },
  { id: 8, type: "radio", class: "star" },
  { id: 9, type: "radio", class: "star" },
  { id: 10, type: "radio", class: "star" },
];

const reviewBox = [
  {
    id: 1,
    src: "./images/Home/pic1.png",
    h3: "Dương Nguyễn",
    p: "Some text...",
  },
  {
    id: 2,
    src: "./images/Home/pic2.png",
    h3: "Dương Nguyễn",
    p: "Some text...",
  },
  {
    id: 3,
    src: "./images/Home/pic3.png",
    h3: "Dương Nguyễn",
    p: "Some text...",
  },
  {
    id: 4,
    src: "./images/Home/pic4.png",
    h3: "Dương Nguyễn",
    p: "Some text...",
  },
];

const ReviewBoxStar = () => {
  return (
    <div className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  );
};

const ReviewRate = () => {
  return (
    <div className="row">
      <div className="ratestar">
        <h2>đánh giá chuyến đi của bạn</h2>
        <div className="skills">
          <div className="rating">
            {ratingStar.map((ratingStar) => {
              return (
                <input
                  key={ratingStar.id}
                  type={ratingStar.type}
                  className={ratingStar.class}
                />
              );
            })}
          </div>
        </div>
      </div>
      <form>
        <div className="inputBox">
          <textarea
            placeholder="viết đánh giá của bạn"
            name="rate"
            cols="30"
            rows="15"
          ></textarea>
        </div>
        <input type="submit" className="btn" value="gửi tới chúng tôi" />
      </form>
    </div>
  );
};
const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        {reviewHeading.map((reviewHeading) => {
          return (
            <span key={reviewHeading.id} className={reviewHeading.className}>
              {reviewHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="rate">
        <ReviewRate />
      </div>
      <Swiper
        className="swiper-container review-slider"
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log("Review change")}
      >
        <div className="swiper-wrapper">
          {reviewBox.map((reviewBox) => {
            return (
              <SwiperSlide className="swiper-slide" key={reviewBox.id}>
                <div className="box">
                  <img src={reviewBox.src} alt={reviewBox.h3} />
                  <h3>{reviewBox.h3}</h3>
                  <p>{reviewBox.p}</p>
                  <ReviewBoxStar />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

const contactHeading = [
  { id: 1, text: "L", className: "" },
  { id: 2, text: "I", className: "" },
  { id: 3, text: "Ê", className: "" },
  { id: 4, text: "N", className: "" },
  { id: 5, text: "", className: "space" },
  { id: 6, text: "H", className: "" },
  { id: 7, text: "Ệ", className: "" },
];

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {contactHeading.map((contactHeading) => {
          return (
            <span key={contactHeading.id} className={contactHeading.className}>
              {contactHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="row">
        <div className="image">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1639249145111!5m2!1svi!2s"
            width="100%"
            height="350vh"
          ></iframe>
        </div>
        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="Tên của bạn" />
            <input type="email" placeholder="Email liên hệ" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="Số điện thoại" />
            <input type="text" placeholder="Chủ đề" />
          </div>
          <textarea
            placeholder="Viết lời nhắn của bạn"
            name="contact"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            className="btn"
            name="send"
            value="Gửi tới chúng tôi"
          />
        </form>
      </div>
    </section>
  );
};

const brandBox = [
  { id: 1, src: "./images/Home/1.jpg" },
  { id: 2, src: "./images/Home/2.jpg" },
  { id: 3, src: "./images/Home/3.jpg" },
  { id: 4, src: "./images/Home/4.jpg" },
  { id: 5, src: "./images/Home/5.jpg" },
  { id: 6, src: "./images/Home/6.jpg" },
];
const Brand = () => {
  return (
    <Swiper
      className="swiper-container brand-slider"
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log("Review change")}
    >
      <div className="swiper-wrapper">
        {brandBox.map((brandBox) => {
          return (
            <SwiperSlide className="swiper-slide" key={brandBox.id}>
              <img src={brandBox.src} alt="" />
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

function HomePage(props) {
  return (
    <div className="HomePages">
      <Header />
      <div className="Container">
        <Login />
        <Home />
        <Book />
        <Packages />
        <Services />
        <Gallery />
        <Review />
        <Contact />
        <Brand />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
