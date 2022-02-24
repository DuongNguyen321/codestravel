import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../Style/pages/Hawaii/style.css";
import "../../../Style/pages/Hawaii/night.css";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span data-aos="fade-up" data-aos-delay="100">
          Hawaii
        </span>
        <h3 data-aos="fade-up" data-aos-delay="200">
          Hòn ngọc của <br />
          thái bình dương
        </h3>
        <p data-aos="fade-up" data-aos-delay="300">
          Địa danh này là một quần thể các đảo hoang sơ giữa Thái Bình Dương mà
          nổi bật nhất là các đảo Oahu, Maui, Big island…trong đó đảo Oahu là
          nơi có nhiều người sinh sống nhất và cũng là trung tâm du lịch. Hawaii
          nổi tiếng nhờ các bãi tắm dài và đẹp với nước biển trong xanh. Du
          khách đến Hawaii là để nghỉ dưỡng, xem mặt trời mọc, mặt trời lặn và
          văn hóa của các thổ dân đa đảo
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
            <h1>kỳ nghỉ dưỡng được đánh giá cao nhất</h1>
          </span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>
            <Link className="btn btn-book" to="/Hawaii/book">
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
    src: "../../images/Hawaii/des-1.jpg",
    h3: "Bãi biển Waikiki",
    p: "lý tưởng cho những hoạt động dưới nước như: surfing, stand-up paddle, boogie board, chèo ca-nô đồng đội...",
  },
  {
    id: 2,
    src: "./images/Hawaii/des-2.jpg",
    h3: "đảo Oahu",
    p: "cực kỳ đáng tiếc nếu tới Oahu mà không ngâm mình dưới nước thư giãn và khám phá thế giới đại dương bao la rực rỡ",
  },
  {
    id: 3,
    src: "./images/Hawaii/des-3.jpg",
    h3: "Trân Châu Cảng",
    p: "di tích lịch sử cấp Quốc gia, thu hút hơn 2 triệu lượt khách du khách đến tham quan mỗi năm.",
  },
  {
    id: 4,
    src: "./images/Hawaii/des-4.jpg",
    h3: "Công viên Na Pali Coast",
    p: "Nếu đã xem bộ phim Jurassic Park, bạn sẽ nhận ra vách đá hình từng xuất hiện trong cảnh quay của phim",
  },
  {
    id: 5,
    src: "./images/Hawaii/des-5.jpg",
    h3: "Công viên núi lửa Hawaii",
    p: "cùng chiêm ngưỡng hai trong số những ngọn núi lửa lớn nhất hành tinh vẫn còn đang hoạt động",
  },
  {
    id: 6,
    src: "./images/Hawaii/des-6.jpg",
    h3: "Vườn quốc gia Haleakala",
    p: "Tâm điểm của vườn quốc gia chính là ngọn núi lửa Haleakala cao 3048 mét đã ngừng hoạt động",
  },
  {
    id: 7,
    src: "./images/Hawaii/des-7.jpg",
    h3: "kona Coffee Farms",
    p: "trải nghiệm tự tay thu hoạch, chế biến cafe và thưởng thức hương vị của loại cafe hảo hạng nhất thế giới",
  },
  {
    id: 8,
    src: "./images/Hawaii/des-8.jpg",
    h3: "Cung điện Iolani",
    p: "Nơi đâu được xem là một trong những cung điện đẹp nhất trên thế giới. Cũng là cung điện Hoàng Gia duy nhất của Hawaii",
  },
];
const Destination = () => {
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>Những điểm đến ở Hawaii</span>
        <h1>Những điểm du lịch bậc nhất</h1>
      </div>
      <div className="box-container">
        {destinationBox.map((destinationBox) => {
          return (
            <Link to="/Hawaii/more" key={destinationBox.id} className="box">
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

    src: "./images/Hawaii/gallery-img-1.jpg",
    span: "Kailua",
    h3: "Bờ biển Kailua",
  },
  {
    id: 2,

    src: "./images/Hawaii/gallery-img-2.jpg",
    span: "Paradise Cove.",
    h3: "trình diễn múa lửa",
  },
  {
    id: 3,

    src: "./images/Hawaii/gallery-img-3.jpg",
    span: "Hawaii",
    h3: "Công viên quốc gia",
  },
  {
    id: 4,

    src: "./images/Hawaii/gallery-img-4.jpg",
    span: "Oahu",
    h3: "North shore",
  },
  {
    id: 5,
    src: "./images/Hawaii/gallery-img-5.jpg",
    span: "Hawaii",
    h3: "Bãi biển Waikiki",
  },
  {
    id: 6,
    src: "./images/Hawaii/gallery-img-6.jpg",
    span: "Hawaii",
    h3: "vườn quốc gia Haleakala",
  },
  {
    id: 7,
    src: "./images/Hawaii/gallery-img-7.jpg",
    span: "dọc bờ biển Hamakua",
    h3: "Hành lang di sản Hamakua",
  },
  {
    id: 8,
    src: "./images/Hawaii/gallery-img-8.jpg",
    span: "phía đông thành phố Hawaii",
    h3: "Mauna kea",
  },
  {
    id: 9,
    src: "./images/Hawaii/gallery-img-9.jpg",
    span: "đảo Oahu",
    h3: "Thác nước",
  },
];
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>
          <h2>những bức Ảnh về Hawaii</h2>
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
    src: "./images/Hawaii/blog-1.jpg",
    a :"Mang những gì khi đi Hawaii",
    p:"Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ..."
  },
  {
    id: 2,
    src: "./images/Hawaii/blog-2.jpg",
    a :"Xin visa đi Hawaii",
    p:"Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán..."
  },
  {
    id: 3,
    src: "./images/Hawaii/blog-3.jpg",
    a :"Phương tiện di chuyển",
    p:"bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc bất cứ phương tiện nào có thể di chuyển đều được..."
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>Tìm hiểu thêm về Hawaii</h1>
      </div>
      <div className="box-container">
        {blogBox.map((blogBox)=>{
          return (
            <Link to="/Hawaii/blog" className="box" key={blogBox.id}>
              <div className="image">
                <img src={blogBox.src} alt={blogBox.a} />
              </div>
              <div className="content">
                <Link to="/Hawaii/blog" className="link">
                  {blogBox.a}
                </Link>
                <p>{blogBox.p}</p>
                <div className="icon">
                  <Link to="/Hawaii/blog">
                    <i className="fas fa-clock"></i> 21st may, 2021
                  </Link>
                  <Link to="/Hawaii/blog">
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

const Review = ()=>{
  return (
    <section className="review">
      <div className="content">
        <span>Đánh giá</span>
        <h3>Những lời đánh giá tốt nhất</h3>
        <p>
          Tất cả những lời đánh giá chúng tôi đều ghi nhận và tiếp thu để phát
          triển. đây là những đánh giá tốt nhất về chuyến đi Hawaii này.
        </p>
      </div>

      <div className="box-container">
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Hawaii/pic-1.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Hawaii/pic-2.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Hawaii/pic-3.png" alt="" />
            <div className="info">
              <h3>Some text</h3>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Some text</p>
          <div className="user">
            <img src="./images/Hawaii/pic-4.png" alt="" />
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
        <Link to="/Hawaii/book" className="btn">
          Đặt Ngay
        </Link>
      </div>
    </div>
  );
} 
export default function Hawaii() {


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Pages Hawaii">
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
