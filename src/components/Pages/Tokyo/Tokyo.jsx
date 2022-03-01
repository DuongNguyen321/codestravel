import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../Style/pages/Tokyo/style.css";
import "../../../Style/pages/Tokyo/night.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Tokyo
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          Truyền thống và tương lai
        </h3>
        <p data-aos="fade-up" data-aos-delay="300">
          Thủ đô Tokyo không chỉ là linh hồn của đất nước măt trời mọc mà còn
          được đánh giá là một trong những thành phố lớn nhất,hiện đại phát
          triển bậc nhất và đông đúc nhất trên thế giới. Với nhịp sống hối hả
          của người dân, đến với thủ đô tuyệt vời này, du khách sẽ được cảm nhận
          sự sôi động trong mỗi khoảnh khắc, mỗi một con đường, hết sức thích
          hợp cho những vị khách từ phương xa đam mê du lịch khám phá một vùng
          đất mới năng đọng và hiện đại
        </p>
        <a
          data-aos="fade-up"
          data-aos-delay="450"
          href="#destination"
          className="btn"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </section>
  );
};

const Bookform = () => {
  return (
    <section className="book-form" id="book-form">
      <form action="">
        <div data-aos="zoom-in" data-aos-delay="50" className="inputBox">
          <span style={{ fontSize: 2.5 + "em" }}>
            <h1>Chuyến đi có giá thấp nhất</h1>
          </span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>
            <Link className="btn btn-book" to="/tokyo/book">
              Đặt ngay
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};
const About = () => {
  const handleVidbtn = (e) => {
    document
      .querySelectorAll(".about .video-container .controls .control-btn")
      .forEach((btn) => {
        let src = btn.getAttribute("data-src");
        document.querySelector(".about .video-container .video").src = src;
      });
  };
  return (
    <section className="about" id="about">
      <div
        className="video-container"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <video
          src="/videos/vid-1.mp4"
          muted
          autoPlay
          loop
          className="video"
        ></video>
        <div className="controls">
          <span
            className="control-btn"
            data-src="/videos/vid-1.mp4"
            onClick={handleVidbtn}
          ></span>
          <span
            className="control-btn"
            data-src="/videos/vid-2.mp4"
            onClick={handleVidbtn}
          ></span>
          <span
            className="control-btn"
            data-src="/videos/vid-3.mp4"
            onClick={handleVidbtn}
          ></span>
        </div>
      </div>
      <div className="content" data-aos="fade-left" data-aos-delay="200">
        <span>Tại sao nên chọn Stravel</span>
        <h3>Trải nghiệm bậc nhất</h3>
        <p>
          chúng tôi hợp tác với những địa điểm nghỉ dưỡng có trải nghiệm bậc
          nhất để đem lại một kỳ nghỉ tuyệt vời cho bạn cùng người thân
        </p>
        <Link to="/aboutus" className="btn">
          Tìm hiểu thêm về Stravel
        </Link>
      </div>
    </section>
  );
};
const destinationBox = [
  {
    id: 1,
    src: "../../images/Tokyo/des-1.jpg",
    h3: "Công viên Yoyogi",

    p: "công viên lớn nhất Tokyo với những bãi cỏ xanh mướt, rộng và hồ nước xinh đẹp",
  },
  {
    id: 2,
    src: "./images/Tokyo/des-2.jpg",
    h3: "Đền thờ Meiji",

    p: "Nếu đến đây vào sáng chủ nhật, bạn sẽ được xem lễ rước đám cưới theo truyền thống Nhật Bản",
  },
  {
    id: 3,
    src: "./images/Tokyo/des-3.jpg",
    h3: "Chợ cá Tsukiji",

    p: "Chợ cá Tsukiji là khu chợ cá sầm uất và lớn nhất thế giới với diện tích trên 220.000m2 và 1677 gian hàng",
  },
  {
    id: 4,
    src: "./images/Tokyo/des-4.jpg",
    h3: "Shinjuku Gyoen",

    p: "Vườn quốc gia Shinjuku Gyoen là một trong những không gian xanh đẹp nhất Tokyo",
  },
  {
    id: 5,
    src: "./images/Tokyo/des-5.jpg",
    h3: "Nhà thi đấu Sumo",

    p: "tháng 1, tháng 5 và tháng 9 hàng năm hãy đến Ryogoku Kokugikan - nhà thi đấu Sumo quốc gia",
  },
  {
    id: 6,
    src: "./images/Tokyo/des-6.jpg",
    h3: "Bảo tàng Yayoi Kusama",

    p: "đậm chất Avant Garde với những trái bí kì quái, gương vô tận và ngập tràn chấm bi huyền ảo",
  },
  {
    id: 7,
    src: "./images/Tokyo/des-7.jpg",
    h3: "Odaiba",

    p: "khu phố nhỏ nằm trên Vịnh Tokyo Đây là trung tâm giải trí, kiến ​​trúc và ẩm thực tuyệt vời của thành phố",
  },
  {
    id: 8,
    src: "./images/Tokyo/des-8.jpg",
    h3: "Sở thú Ueno",

    p: "Đây là vườn thú lâu đời nhất của Nhật Bản, nổi tiếng với những chú gấu trúc được được sang từ Trung Quốc",
  },
];
const Destination = () => {
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>Những điểm đến ở Tokyo</span>
        <h1>Những điểm du lịch bậc nhất</h1>
      </div>
      <div className="box-container">
        {destinationBox.map((destinationBox) => {
          return (
            <Link to="/tokyo/more" key={destinationBox.id} className="box">
              <div className="image">
                <img src={destinationBox.src} alt={destinationBox.h3} />
              </div>
              <div className="content">
                <h3>{destinationBox.h3}</h3>
                <p>{destinationBox.p}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
const servicesBox = [
  {
    id: 1,
    icon: "fas fa-globe",
    h3: "Rộng khắp thế giới",
  },
  {
    id: 2,
    icon: "fas fa-hiking",
    h3: "Những cuộc phiêu lưu",
  },
  {
    id: 3,
    icon: "fas fa-utensils",
    h3: "Dịch vụ ăn uống",
  },
  {
    id: 4,
    icon: "fas fa-hotel",
    h3: "Nghỉ dưỡng cao cấp",
  },
  {
    id: 5,
    icon: "fas fa-wallet",
    h3: "Mức giá tốt nhất",
  },
  {
    id: 6,
    icon: "fas fa-headset",
    h3: "Hỗ trợ 24/7",
  },
];
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="heading">
        <span>Dịch vụ</span>
        <h1>Nâng cao trải nghiệm</h1>
      </div>
      <Link to={"/aboutus"} className="box-container">
        {servicesBox.map((servicesBox) => {
          return (
            <div key={servicesBox.id} className="box">
              <i className={servicesBox.icon}></i>
              <h3>{servicesBox.h3}</h3>
              <p>Some text...</p>
            </div>
          );
        })}
      </Link>
    </section>
  );
};

const galleryBox = [
  {
    id: 1,

    src: "./images/Tokyo/gallery-img-1.jpg",
    span: "ngôi đền cổ nhất Tokyo",
    h3: "Đền Sensoji",
  },
  {
    id: 2,

    src: "./images/Tokyo/gallery-img-2.jpg",
    span: "Đền Meiji",
    h3: "gôi đền nổi tiếng nhất của Nhật Bản",
  },
  {
    id: 3,

    src: "./images/Tokyo/gallery-img-3.jpg",
    span: "nơi ở của Hoàng gia Nhật Bản",
    h3: "Cung điện hoàng gia Tokyo",
  },
  {
    id: 4,

    src: "./images/Tokyo/gallery-img-4.jpg",
    span: "tầng quan sát phóng tầm nhìn ra cả thành phố",
    h3: "tháp truyền hình Tokyo",
  },
  {
    id: 5,
    src: "./images/Tokyo/gallery-img-5.jpg",
    span: "Shibuya là khu vực sầm uất nhất của Tokyo",
    h3: "Quảng trường Shibuya",
  },
  {
    id: 6,
    src: "./images/Tokyo/gallery-img-6.jpg",
    span: "cái nôi của phong cách thời trang CHẤT nhất Nhật Bản",
    h3: "Harajuku",
  },
  {
    id: 7,
    src: "./images/Tokyo/gallery-img-7.jpg",
    span: "Ai nói đi Mỹ mới có hình tượng Nữ Thần Tự Do?",
    h3: "Odaiba – Vịnh Tokyo",
  },
  {
    id: 8,
    src: "./images/Tokyo/gallery-img-8.jpg",
    span: "khu chợ hải sản thuộc hàng lớn nhất thế giới",
    h3: "Chợ cá Tsukiji",
  },
  {
    id: 9,
    src: "./images/Tokyo/gallery-img-9.jpg",
    span: "Disneyland của Nhật Bản",
    h3: "Tokyo Disneysea",
  },
];
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>
          <h2>những bức Ảnh về Tokyo</h2>
        </span>
      </div>
      <div className="box-container">
        {galleryBox.map((galleryBox) => {
          return (
            <div className="box" key={galleryBox.id}>
              <img src={galleryBox.src} alt={galleryBox.h3} />
              <span>{galleryBox.span}</span>
              <h3>{galleryBox.h3}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const blogBox = [
  {
    id: 1,
    src: "./images/Tokyo/blog-1.jpg",
    a: "Mang những gì khi đi Tokyo",
    p: "Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ...",
  },
  {
    id: 2,
    src: "./images/Tokyo/blog-2.jpg",
    a: "Xin visa đi Tokyo",
    p: "Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán...",
  },
  {
    id: 3,
    src: "./images/Tokyo/blog-3.jpg",
    a: "Phương tiện di chuyển",
    p: "bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc thú vị hơn có thể cưỡi lạc đà hoặc ngựa đều được...",
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>Tìm hiểu thêm về Tokyo</h1>
      </div>
      <div className="box-container">
        {blogBox.map((blogBox) => {
          return (
            <Link to="/tokyo/blog" className="box" key={blogBox.id}>
              <div className="image">
                <img src={blogBox.src} alt={blogBox.a} />
              </div>
              <div className="content">
                <p className="link">{blogBox.a}</p>
                <p>{blogBox.p}</p>
                <div className="icon">
                  <p>
                    <i className="fas fa-clock"></i> 21st may, 2021
                  </p>
                  <p>
                    <i className="fas fa-user"></i> by admin
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const Review = () => {
  return (
    <section className="review">
      <div className="content">
        <span>Đánh giá</span>
        <h3>Những lời đánh giá tốt nhất</h3>
        <p>
          Tất cả những lời đánh giá chúng tôi đều ghi nhận và tiếp thu để phát
          triển. đây là những đánh giá tốt nhất về chuyến đi Tokyo này.
        </p>
      </div>

      <div className="box-container">
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Tokyo/pic-1.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Tokyo/pic-2.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Tokyo/pic-3.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Tokyo/pic-4.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="content" data-aos="zoom-in-up" data-aos-delay="250">
        <span>Cùng STravel</span>
        <h3>Bắt đầu chuyến đi của bạn</h3>
        <p>
          Mỗi chuyến đi đều là một kỷ niệm đẹp. Hãy cùng STravel ghi lại kỷ niệm
          này !
        </p>
        <Link to="/tokyo/book" className="btn">
          Đặt Ngay
        </Link>
      </div>
    </div>
  );
};
export default function Tokyo() {
  const handleScroll = (e) => {
    let Navbar = document.querySelector(".navbar");
    let Pages = document.querySelectorAll(".Pages");
    Pages.onscroll = () => {
      Navbar.classList.remove("active");
    };
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Pages Tokyo" onScroll={handleScroll}>
      <Header />
      <div className="container">
        <Home />
        <Bookform />
        <About />
        <Destination />
        <Services />
        <Gallery />
        <Blog />
        <Review />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
