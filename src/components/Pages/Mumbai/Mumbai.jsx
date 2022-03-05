import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../Style/pages/Mumbai/style.css";
import "../../../Style/pages/Mumbai/night.css";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Mumbai
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          Thành phố có tất cả
        </h3>
        <p data-aos="fade-up" data-aos-delay="300">
          Mumbai không chỉ là trung tâm tài chính – kinh tế, kinh đô điện ảnh –
          thời trang của Ấn Độ, mà đây còn là thành phố cảng vừa hiện đại nhưng
          vẫn mang nhiều nét cổ kính với những công trình kiến trúc, quán bar,
          nhà hàng, viện bảo tàng và các cửa hàng thời trang hấp dẫn…
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
            <h1>Chuyến đi được tìm kiếm nhiểu nhất</h1>
          </span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>
            <Link className="btn btn-book" to="/mumbai/book">
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
    src: "../../images/Mumbai/des-1.jpg",
    h3: "Ấn Độ môn",

    
    p: "được xây dựng vào năm 1931, còn có tên gọi khác là bia kỷ niệm chiến sĩ Ấn Độ",
  },
  {
    id: 2,
    src: "./images/Mumbai/des-2.jpg",
    h3: "Tòa nhà hình trứng",

    
    p: " nghệ thuật kiến trúc thị giác kết hợp với cách sản xuất, sử dụng và tái tạo năng lượng thông minh",
  },
  {
    id: 3,
    src: "./images/Mumbai/des-3.jpg",
    h3: "Vườn quốc gia Sanjay Gandhi",

    
    p: "bao gồm loài bướm đêm Atlas – bướm đêm lớn nhất thế giới, cây hoa Karvi 7 năm nở hoa một lần…",
  },
  {
    id: 4,
    src: "./images/Mumbai/des-4.jpg",
    h3: "Trung tâm triễn lãm Jehanggir",

    
    p: "khu vực triển lãm hàng đầu ở Mumbai dành cho nền mỹ thuật Ấn Độ đương đại",
  },
  {
    id: 5,
    src: "./images/Mumbai/des-5.jpg",
    h3: "Hang động Elephanta",

    
    p: "lưu giữ nhiều kiến trúc chạm khắc tinh xảo và chúng đã xuất hiện ở đây từ thế kỷ thứ 5 đến thứ 8",
  },
  {
    id: 6,
    src: "./images/Mumbai/des-6.jpg",
    h3: "Lonavala và Khandala",

    
    p: " khu nghỉ dưỡng rất nổi tiếng, nằm giữa đường cao tốc Mumbai – Pune.",
  },
  {
    id: 7,
    src: "./images/Mumbai/des-7.jpg",
    h3: "Thành phố Pune",

    
    p: "Giáo dục, nghệ thuật và âm nhạc là trọng tâm tại thành phố có nền văn hóa phong phú lâu đời này",
  },
  {
    id: 8,
    src: "./images/Mumbai/des-8.jpg",
    h3: "Thành phố Nashik",

    
    p: "là trung tâm hành hương lớn của người Hindu. Nashik có sự pha trộn của nét cổ xưa và hiện đại",
  },
];
const Destination = () => {
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>Những điểm đến ở Mumbai</span>
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

    src: "./images/Mumbai/gallery-img-1.jpg",
    span: "thành phố Mumbai",
    h3: "vườn quốc gia Sanjay Gandhi",
  },
  {
    id: 2,

    src: "./images/Mumbai/gallery-img-2.jpg",
    span: "",
    h3: "Nhà Thờ St John The Evangelist",
  },
  {
    id: 3,

    src: "./images/Mumbai/gallery-img-3.jpg",
    span: "nằm trên đỉnh ngọn đồi Malabar ở Mumbai",
    h3: "Vườn treo Mumbai",
  },
  {
    id: 4,

    src: "./images/Mumbai/gallery-img-4.jpg",
    span: "Bảo tàng viện của thành phố Mumbai",
    h3: "Dr. Bhau Daji Lad",
  },
  {
    id: 5,
    src: "./images/Mumbai/gallery-img-5.jpg",
    span: "di sản thế giới được UNESCO nhìn nhận.",
    h3: "Tòa đô chánh Mumbai",
  },
  {
    id: 6,
    src: "./images/Mumbai/gallery-img-6.jpg",
    span: "Mumbai",
    h3: "kiến trúc thời Victoria",
  },
  {
    id: 7,
    src: "./images/Mumbai/gallery-img-7.jpg",
    span: "Khách sạn 5 sao ở Mumbai",
    h3: "Khách sạn Taj Mahal",
  },
  {
    id: 8,
    src: "./images/Mumbai/gallery-img-8.jpg",
    span: "phía đông thành phố Mumbai",
    h3: "Hang động Elephanta",
  },
  {
    id: 9,
    src: "./images/Mumbai/gallery-img-9.jpg",
    span: "Mumbai",
    h3: "phiên chợ địa phương",
  },
];
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>
          <h2>những bức Ảnh về Mumbai</h2>
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
    src: "./images/Mumbai/blog-1.jpg",
    a :"Mang những gì khi đi Mumbai",
    p:"Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ..."
  },
  {
    id: 2,
    src: "./images/Mumbai/blog-2.jpg",
    a :"Xin visa đi Mumbai",
    p:"Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán..."
  },
  {
    id: 3,
    src: "./images/Mumbai/blog-3.jpg",
    a :"Phương tiện di chuyển",
    p:"bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc thú vị hơn có thể cưỡi lạc đà hoặc ngựa đều được..."
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>Tìm hiểu thêm về Mumbai</h1>
      </div>
      <div className="box-container">
        {blogBox.map((blogBox)=>{
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

const Review = ()=>{
  return (
    <section className="review">
      <div className="content">
        <span>Đánh giá</span>
        <h3>Những lời đánh giá tốt nhất</h3>
        <p>
          Tất cả những lời đánh giá chúng tôi đều ghi nhận và tiếp thu để phát
          triển. đây là những đánh giá tốt nhất về chuyến đi Mumbai này.
        </p>
      </div>

      <div className="box-container">
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Mumbai/pic-1.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Mumbai/pic-2.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Mumbai/pic-3.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Mumbai/pic-4.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Banner =()=>{
  return (
    <div className="banner">
      <div className="content" data-aos="zoom-in-up" data-aos-delay="250">
        <span>Cùng STravel</span>
        <h3>Bắt đầu chuyến đi của bạn</h3>
        <p>
          Mỗi chuyến đi đều là một kỷ niệm đẹp. Hãy cùng STravel ghi lại kỷ niệm
          này !
        </p>
        <Link to="/mumbai/book" className="btn">
          Đặt Ngay
        </Link>
      </div>
    </div>
  );
} 
export default function Mumbai() {
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
    <div className="Pages Mumbai" onScroll={handleScroll}>
      <Header  />
      <div className="container">
        <Home />
        <Bookform />
        <About />
        <Destination />
        <Services />
        <Gallery />
        <Blog />
        <Review/>
        <Banner/>
      </div>
      <Footer />
    </div>
  );
}
