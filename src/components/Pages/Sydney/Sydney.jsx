import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../Style/pages/Sydney/style.css";
import "../../../Style/pages/Sydney/night.css";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Sydney
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          xứ sở chuột túi
        </h3>
        <p data-aos="fade-up" data-aos-delay="300">
          Sydney là nơi mà đâu đâu cũng có những công trình kiến trúc nguy nga,
          đồ sộ, thế giới bảo tàng, công viên xanh, những khu vui chơi giải trí
          hiện đại và cả biển nữa. Quá nhiều điều thú vị vậy thì du lịch Sydney
          nên đi đâu? Dưới đây là những điểm check-in đẹp nhất mang đậm hơi thở
          Sydney nói riêng và nước Úc nói chung
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
            <h1>Chuyến đi có ưu đãi tốt nhất</h1>
          </span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>
            <Link className="btn btn-book" to="/sydney/book">
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
        btn.onclick = () => {
          let src = btn.getAttribute("data-src");
          document.querySelector(".about .video-container .video").src = src;
        };
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
    src: "../../images/Sydney/des-1.jpg",
    h3: "Sydney Opera House",

    p: "Đây là công trình biểu tượng đỉnh cao của Sydney nói riêng và toàn nước Úc nói chung",
  },
  {
    id: 2,
    src: "./images/Sydney/des-2.jpg",
    h3: "Cầu Sydney Harbour",

    p: "Đây là cây cầu thép lớn nhất thế giới, một trong những biểu tượng của xứ sở chuột túi",
  },
  {
    id: 3,
    src: "./images/Sydney/des-3.jpg",
    h3: "Tháp Sydney",

    p: "Công trình cao nhất trong thành phố. Toạ lạc tại trung tâm thương mại Piit St.",
  },
  {
    id: 4,
    src: "./images/Sydney/des-4.jpg",
    h3: "Khu phố cổ The Rocks",

    p: "được ví von là “quá khứ và hiện tại hội tụ hoàn hảo của Sydney”",
  },
  {
    id: 5,
    src: "./images/Sydney/des-5.jpg",
    h3: "Quán bia “Lord Nelson”",

    p: "quán bia xua thật xưa với phong cách cảu người lính,thuỷ thủ và công nhân những năm 1800",
  },
  {
    id: 6,
    src: "./images/Sydney/des-6.jpg",
    h3: "Darling Harbour",

    p: "hầu hết, khách di lịch cá nhân hoặc đi theo tour đều chọn điểm dừng chân là khu giải trí tại trung tâm Sydney này",
  },
  {
    id: 7,
    src: "./images/Sydney/des-7.jpg",
    h3: "Nhà thờ St Mary",

    p: "nơi ở của Đức Tổng Giá mục Sydney, đứng đầu trong danh sách các nhà nguyện công giáo đầu tiên tại nước Úc",
  },
  {
    id: 8,
    src: "./images/Sydney/des-8.jpg",
    h3: "Government House",

    p: "nằm trong vườn Bách thảo Hoàng Gia vói một khu vườn xinh đẹp theo kiểu Anh Quốc bao bọc xung quanh",
  },
];
const Destination = () => {
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>Những điểm đến ở Sydney</span>
        <h1>Những điểm du lịch bậc nhất</h1>
      </div>
      <div className="box-container">
        {destinationBox.map((destinationBox) => {
          return (
            <Link to="/sydney/more" key={destinationBox.id} className="box">
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

    src: "./images/Sydney/gallery-img-1.jpg",
    span: "Brisbane, Úc",
    h3: "Tòa nhà lịch sử Customs House",
  },
  {
    id: 2,

    src: "./images/Sydney/gallery-img-2.jpg",
    span: "Bảo tàng Mỹ thuật Ứng dụng và Khoa học",
    h3: "Power House",
  },
  {
    id: 3,

    src: "./images/Sydney/gallery-img-3.jpg",
    span: "nằm trên đỉnh ngọn đồi Malabar ở Sydney",
    h3: "Vườn bách thảo Hoàng gia",
  },
  {
    id: 4,

    src: "./images/Sydney/gallery-img-4.jpg",
    span: "phía tây Sydney",
    h3: "Vườn Quốc gia Blue Mountains",
  },
  {
    id: 5,
    src: "./images/Sydney/gallery-img-5.jpg",
    span: "giữa lòng thành phố Sydney",
    h3: "Công viên Hyde",
  },
  {
    id: 6,
    src: "./images/Sydney/gallery-img-6.jpg",
    span: "phía bắc Sydney",
    h3: "Bãi biển Manly",
  },
  {
    id: 7,
    src: "./images/Sydney/gallery-img-7.jpg",
    span: "bãi biển nổi tiếng nhất nước Úc",
    h3: "Bãi biển Bondi",
  },
  {
    id: 8,
    src: "./images/Sydney/gallery-img-8.jpg",
    span: "gần cảng Sydney",
    h3: "Vườn bách thú Taronga",
  },
  {
    id: 9,
    src: "./images/Sydney/gallery-img-9.jpg",
    span: "The Rocks, úc",
    h3: "Rocks Discovery Museum",
  },
];
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>
          <h2>những bức Ảnh về Sydney</h2>
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
    src: "./images/Sydney/blog-1.jpg",
    a :"Mang những gì khi đi Sydney",
    p:"Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ..."
  },
  {
    id: 2,
    src: "./images/Sydney/blog-2.jpg",
    a :"Xin visa đi Sydney",
    p:"Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán..."
  },
  {
    id: 3,
    src: "./images/Sydney/blog-3.jpg",
    a :"Phương tiện di chuyển",
    p:"bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc thú vị hơn có thể cưỡi lạc đà hoặc ngựa đều được..."
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>Tìm hiểu thêm về Sydney</h1>
      </div>
      <div className="box-container">
        {blogBox.map((blogBox)=>{
          return (
            <Link to="/sydney/blog" className="box" key={blogBox.id}>
              <div className="image">
                <img src={blogBox.src} alt={blogBox.a} />
              </div>
              <div className="content">
                <p  className="link">
                  {blogBox.a}
                </p>
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
          triển. đây là những đánh giá tốt nhất về chuyến đi Sydney này.
        </p>
      </div>

      <div className="box-container">
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Sydney/pic-1.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Sydney/pic-2.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Sydney/pic-3.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Sydney/pic-4.png" alt="" />
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
        <Link to="/sydney/book" className="btn">
          Đặt Ngay
        </Link>
      </div>
    </div>
  );
} 
export default function Sydney() {
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
    <div className="Pages Sydney" onScroll={handleScroll}>
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
