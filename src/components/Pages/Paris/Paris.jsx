import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../Style/pages/Paris/style.css";
import "../../../Style/pages/Paris/night.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Paris
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          Kinh đô thời trang
        </h3>
        <p data-aos="fade-up" data-aos-delay="300">
          Paris là một vùng đất của nghệ thuật và nghệ sĩ. Thành phố đầy những
          di tích có tầm quan trọng trong lịch sử của thành phố và thế giới.
          Lịch sử phong phú của thành phố này thu hút rất nhiều những người đam
          mê khảo cổ và những người yêu thích kiến trúc. Một số di tích kiến
          trúc nổi tiếng là Boulevard Montmartre được xây dựng vào năm 1897,
          Basilique du Sacré-Cœur ở Montmartre, bảo tàng Louvre nổi
          tiếng,Panthéon…
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
            <h1>Chuyến đi được đặt nhiều nhất</h1>
          </span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>
            <Link className="btn btn-book" to="/paris/book">
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
    src: "./images/Paris/des-1.jpg",
    h3: "Tháp Eiffel",

    p: "Một trong những phần tốt nhất của toà tháp là tầm nhìn toàn cảnh ở trên đỉnh",
  },
  {
    id: 2,
    src: "./images/Paris/des-2.jpg",
    h3: "Nhà Thờ Đức Bà",

    p: "Đây là một trong những công trình kiến trúc điển hình đc thiết kế theo phong cách Gothic Pháp",
  },
  {
    id: 3,
    src: "./images/Paris/des-3.jpg",
    h3: "Bảo tàng Louvre",

    p: "Bảo tàng Louvre là bảo tàng nghệ thật được ghé thăm nhiều nhất trên thế giới",
  },
  {
    id: 4,
    src: "./images/Paris/des-4.jpg",
    h3: "Đại lộ Champs Elysées",

    p: "Louis Vuitton, Cartier, Guerlain, Montblanc… và nhà hàng nổi tiếng đều nằm trên đại lộ này.",
  },
  {
    id: 5,
    src: "./images/Paris/des-5.jpg",
    h3: "Công viên Disneyland",

    p: "Người hâm một của nhân vật hoạt hình Mickey rất thích ghé thăm công viên Disneyland",
  },
  {
    id: 6,
    src: "./images/Paris/des-6.jpg",
    h3: "Montmartre",

    p: "Địa danh nổi tiếng nhất của Montmartre có lẽ là Vương cung Thánh đường Sacré-Cœur nằm ở trên đỉnh đồi",
  },
  {
    id: 7,
    src: "./images/Paris/des-7.jpg",
    h3: "Cung điện Versailles",

    p: "Versailles là lâu đài nổi tiếng nhất ở Pháp và biểu tượng của quyền lực tối thượng thời đại phong kiến",
  },

  {
    id: 8,
    src: "./images/Paris/des-8.jpg",
    h3: "Moulin Rouge",

    p: "Moulin Rouge là một quán rượu được biết đến như quê hương của điệu nhảy Cancan nổi tiếng",
  },
];
const Destination = () => {
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>Những điểm đến ở Paris</span>
        <h1>Những điểm du lịch bậc nhất</h1>
      </div>
      <div className="box-container">
        {destinationBox.map((destinationBox) => {
          return (
            <Link to="/commingsoon" key={destinationBox.id} className="box">
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

    src: "./images/Paris/gallery-img-1.jpg",
    span: "Normandie, Pháp",
    h3: "Đảo Mont Saint-Michel",
  },
  {
    id: 2,

    src: "./images/Paris/gallery-img-2.jpg",
    span: "Đấu trường La Mã",
    h3: "Nimes Arena",
  },
  {
    id: 3,

    src: "./images/Paris/gallery-img-3.jpg",
    span: "Languedoc-Roussillon, Pháp",
    h3: "pháo đài cổ Carcassonne",
  },
  {
    id: 4,

    src: "./images/Paris/gallery-img-4.jpg",
    span: "Cây cầu xưa mang tính biểu tượng",
    h3: "Cầu Pont du gard",
  },
  {
    id: 5,
    src: "./images/Paris/gallery-img-5.jpg",
    span: "Chiến trường Chiến tranh thế giới lần thứ nhất",
    h3: "Hào quang Trận Somme",
  },
  {
    id: 6,
    src: "./images/Paris/gallery-img-6.jpg",
    span: "Nơi ăn ảnh nhất nước pháp",
    h3: "dãy núi Alps",
  },
  {
    id: 7,
    src: "./images/Paris/gallery-img-7.jpg",
    span: "Nằm giữa biên giới của Pháp với Italy",
    h3: "Mont Blanc",
  },
  {
    id: 8,
    src: "./images/Paris/gallery-img-8.jpg",
    span: "Provence",
    h3: "Đồng hoa Oải Hương",
  },
  {
    id: 9,
    src: "./images/Paris/gallery-img-9.jpg",
    span: "Thủ đô chính trị và toà án Hoàng Gia",
    h3: "Château de Versailles",
  },
];
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>
          <h2>những bức Ảnh về Paris</h2>
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
    src: "./images/Paris/blog-1.jpg",
    a: "Mang những gì khi đi Paris",
    p: "Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ...",
  },
  {
    id: 2,
    src: "./images/Paris/blog-2.jpg",
    a: "Xin visa đi Paris",
    p: "Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán...",
  },
  {
    id: 3,
    src: "./images/Paris/blog-3.jpg",
    a: "Phương tiện di chuyển",
    p: "bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc thú vị hơn có thể cưỡi lạc đà hoặc ngựa đều được...",
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>Tìm hiểu thêm về Paris</h1>
      </div>
      <div className="box-container">
        {blogBox.map((blogBox) => {
          return (
            <Link to="/commingsoon" className="box" key={blogBox.id}>
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
          triển. đây là những đánh giá tốt nhất về chuyến đi Paris này.
        </p>
      </div>

      <div className="box-container">
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Paris/pic-1.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Paris/pic-2.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Paris/pic-3.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Paris/pic-4.png" alt="" />
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
        <Link to="/paris/book" className="btn">
          Đặt Ngay
        </Link>
      </div>
    </div>
  );
};
export default function Paris() {
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
    <div className="Pages Paris" onScroll={handleScroll}>
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
