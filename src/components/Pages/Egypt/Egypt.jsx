import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../Style/pages/Egypt/style.css";
import "../../../Style/pages/Egypt/night.css";

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
        <p data-aos="fade-up" data-aos-delay="300">
          Egypt là một trong những quốc gia lâu đời nhất trên thế giới. Đây là
          nơi người Ai Cập cổ đại đã xây dựng một nền văn minh vĩ đại trong
          thung lũng sông Nile, với rất nhiều đền thờ, cổ vật và những tàn tích
          ngoạn mục đáng để bạn khám phá
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
            <h1>chuyến đi được bình chọn tốt nhất</h1>
          </span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>
            <Link className="btn btn-book" to="/egypt/book">
              Đặt ngay
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};
const About = () => {
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
          <span className="control-btn" data-src="/videos/vid-1.mp4"></span>
          <span className="control-btn" data-src="/videos/vid-2.mp4"></span>
          <span className="control-btn" data-src="/videos/vid-3.mp4"></span>
        </div>
      </div>
      <div className="content" data-aos="fade-left" data-aos-delay="250">
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
    src: "../../images/Egypt/des-1.jpg",
    h3: "Kim tự tháp Giza",

    icon: "fas fa-angle-right",
    p: "Kim tự tháp Giza là một trong Bảy kỳ quan thế giới cổ đại",
  },
  {
    id: 2,
    src: "./images/Egypt/des-2.jpg",
    h3: "Đền karnak của Luxor",

    icon: "fas fa-angle-right",
    p: "Thung lũng của các vị vua, Đền Karnak, và Đền tưởng niệm Hatshepsut",
  },
  {
    id: 3,
    src: "./images/Egypt/des-3.jpg",
    h3: "Hồi giáo Cario",

    icon: "fas fa-angle-right",
    p: "đầy đủ các nhà thờ Hồi giáo,trường học Hồi giáo và các di tích cổ đại",
  },
  {
    id: 4,
    src: "./images/Egypt/des-4.jpg",
    h3: "Aswan",

    icon: "fas fa-angle-right",
    p: "Thị trấn yên bình nhất của Ai Cập, đặt trên những đường cong của sông Nile",
  },
  {
    id: 5,
    src: "./images/Egypt/des-5.jpg",
    h3: "Abu simbel",

    icon: "fas fa-angle-right",
    p: "Nổi tiếng với tỷ lệ megalithic và được biết đến với ngôi đền của Ramses II",
  },
  {
    id: 6,
    src: "./images/Egypt/des-6.jpg",
    h3: "Bảo tàng Egyptian",

    icon: "fas fa-angle-right",
    p: "Bảo tàng Ai Cập của Cairo là một trong những bộ sưu tập bảo tàng tuyệt vời của thế giới",
  },
  {
    id: 7,
    src: "./images/Egypt/des-7.jpg",
    h3: "Sa mạc trắng",

    icon: "fas fa-angle-right",
    p: "Kỳ quan tự nhiên Sa mạc Trắng trông giống như một vùng đất hoang tuyết ở giữa cát khô cằn",
  },
  {
    id: 8,
    src: "./images/Egypt/des-8.jpg",
    h3: "Siwa Oasis",

    icon: "fas fa-angle-right",
    p: "Siwa là loại thuốc bổ yên tĩnh đến sự hối hả của các thành phố Ai Cập và là một trong những địa điểm đẹp nhất của Tây Sa mạc",
  },
];
const Destination = () => {
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>Những điểm đến ở Egypt</span>
        <h1>Những điểm du lịch bậc nhất</h1>
      </div>
      <div className="box-container">
        {destinationBox.map((destinationBox) => {
          return (
            <Link to="/egypt/more" key={destinationBox.id} className="box">
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
      <div className="box-container">
        {servicesBox.map((servicesBox) => {
          return (
            <div key={servicesBox.id} className="box">
              <i className={servicesBox.icon}></i>
              <h3>{servicesBox.h3}</h3>
              <p>Some text...</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const galleryBox = [
  {
    id: 1,

    src: "./images/Egypt/gallery-img-1.jpg",
    span: "Thị trấn Dusty Abydos",
    h3: "Đền Abydos",
  },
  {
    id: 2,

    src: "./images/Egypt/gallery-img-2.jpg",
    span: "Trung tâm Ai Cập",
    h3: "Nam Sinai",
  },
  {
    id: 3,

    src: "./images/Egypt/gallery-img-3.jpg",
    span: "Chân núi Sinai",
    h3: "Nam Sinai",
  },
  {
    id: 4,

    src: "./images/Egypt/gallery-img-4.jpg",
    span: "Alexandria",
    h3: "Thành phố Alexandria",
  },
  {
    id: 5,
    src: "./images/Egypt/gallery-img-5.jpg",
    span: "Tây sa mạc",
    h3: "Siwa Oasis",
  },
  {
    id: 6,
    src: "./images/Egypt/gallery-img-6.jpg",
    span: "Bắc Farafra Oasis",
    h3: "Sa mạc trắng",
  },
  {
    id: 7,
    src: "./images/Egypt/gallery-img-7.jpg",
    span: "Cario",
    h3: "Bảo tàng Egyptian",
  },
  {
    id: 8,
    src: "./images/Egypt/gallery-img-8.jpg",
    span: "Nam Ai Cập",
    h3: "Abu simbel",
  },
  {
    id: 9,
    src: "./images/Egypt/gallery-img-9.jpg",
    span: "Quận hồi giáo",
    h3: "Hổi Giáo Cario",
  },
];
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>
          <h2>những bức Ảnh về Egypt</h2>
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
    src: "./images/Egypt/blog-1.jpg",
    a :"Mang những gì khi đi Egypt",
    p:"Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ..."
  },
  {
    id: 2,
    src: "./images/Egypt/blog-2.jpg",
    a :"Xin visa đi Egypt",
    p:"Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán..."
  },
  {
    id: 3,
    src: "./images/Egypt/blog-3.jpg",
    a :"Phương tiện di chuyển",
    p:"bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc thú vị hơn có thể cưỡi lạc đà hoặc ngựa đều được..."
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>Tìm hiểu thêm về Egypt</h1>
      </div>
      <div className="box-container">
        {blogBox.map((blogBox)=>{
          return (
            <Link to="/egypt/blog" className="box" key={blogBox.id}>
              <div className="image">
                <img src={blogBox.src} alt={blogBox.a} />
              </div>
              <div className="content">
                <Link to="/egypt/blog" className="link">
                  {blogBox.a}
                </Link>
                <p>{blogBox.p}</p>
                <div className="icon">
                  <Link to="/egypt/blog">
                    <i className="fas fa-clock"></i> 21st may, 2021
                  </Link>
                  <Link to="/egypt/blog">
                    <i className="fas fa-user"></i> by admin
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      
      </div>
    </section>
  );
};

export default function Egypt() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Pages">
      <Header  />
      <div className="container">
        <Home />
        <Bookform />
        <About />
        <Destination />
        <Services />
        <Gallery />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}
