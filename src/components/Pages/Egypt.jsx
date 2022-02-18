import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../../Style/pages/Egypt/style.css";
import "../../Style/pages/Egypt/night.css";

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

        <div data-aos="zoom-in" data-aos-delay="150" className="inputBox">
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
    aosDelay: "50",
    id: 1,
    src: "./images/Egypt/des-1.jpg",
    h3: "Kim tự tháp Giza",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "Kim tự tháp Giza là một trong Bảy kỳ quan thế giới cổ đại",
  },
  {
    aosDelay: "100",
    id: 2,
    src: "./images/Egypt/des-2.jpg",
    h3: "Đền karnak của Luxor",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "Thung lũng của các vị vua, Đền Karnak, và Đền tưởng niệm Hatshepsut",
  },
  {
    aosDelay: "150",
    id: 3,
    src: "./images/Egypt/des-3.jpg",
    h3: "Hồi giáo Cario",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "đầy đủ các nhà thờ Hồi giáo,trường học Hồi giáo và các di tích cổ đại",
  },
  {
    aosDelay: "200",
    id: 4,
    src: "./images/Egypt/des-4.jpg",
    h3: "Aswan",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "Thị trấn yên bình nhất của Ai Cập, đặt trên những đường cong của sông Nile",
  },
  {
    aosDelay: "250",
    id: 5,
    src: "./images/Egypt/des-5.jpg",
    h3: "Abu simbel",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "Nổi tiếng với tỷ lệ megalithic và được biết đến với ngôi đền của Ramses II",
  },
  {
    aosDelay: "300",
    id: 6,
    src: "./images/Egypt/des-6.jpg",
    h3: "Bảo tàng Egyptian",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "Bảo tàng Ai Cập của Cairo là một trong những bộ sưu tập bảo tàng tuyệt vời của thế giới",
  },
  {
    aosDelay: "350",
    id: 7,
    src: "./images/Egypt/des-7.jpg",
    h3: "Sa mạc trắng",
    more: "Đọc thêm",
    icon: "fas fa-angle-right",
    p: "Kỳ quan tự nhiên Sa mạc Trắng trông giống như một vùng đất hoang tuyết ở giữa cát khô cằn",
  },
  {
    aosDelay: "400",
    id: 8,
    src: "./images/Egypt/des-8.jpg",
    h3: "Siwa Oasis",
    more: "Đọc thêm",
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
            <div
              key={destinationBox.id}
              className="box"
              data-aos="fade-up"
              data-aos-delay={destinationBox.aosDelay}
            >
              <div className="image">
                <img sr={destinationBox.src} alt={destinationBox.h3} />
              </div>
              <div className="content">
                <h3>{destinationBox.h3}</h3>
                <p>{destinationBox.p}</p>
                <Link to="/egypt/more">
                  {destinationBox.more} <i className={destinationBox.icon} />
                </Link>
              </div>
            </div>
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
    aosDelay: "150",
  },
  {
    id: 2,
    icon: "fas fa-hiking",
    h3: "Những cuộc phiêu lưu",
    aosDelay: "200",
  },
  {
    id: 3,
    icon: "fas fa-utensils",
    h3: "Dịch vụ ăn uống",
    aosDelay: "250",
  },
  {
    id: 4,
    icon: "fas fa-hotel",
    h3: "Nghỉ dưỡng cao cấp",
    aosDelay: "300",
  },
  {
    id: 5,
    icon: "fas fa-wallet",
    h3: "Mức giá tốt nhất",
    aosDelay: "350",
  },
  {
    id: 6,
    icon: "fas fa-headset",
    h3: "Hỗ trợ 24/7",
    aosDelay: "400",
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
            <div
              key={servicesBox.id}
              className="box"
              data-aos="zoom-in-up"
              data-aos-delay={servicesBox.aosDelay}
            >
              <i class={servicesBox.icon}></i>
              <h3>{servicesBox.h3}</h3>
              <p>Some text...</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
const Gallery =()=>{
  return (
    <section clasName="gallery" id="gallery">
      <div clasName="heading">
        <span>
          <h2>những bức Ảnh về Egypt</h2>
        </span>
      </div>
      <div clasName="box-container">
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="100">
          <img src="images/gallery-img-1.jpg" alt="" />
          <span>Thị trấn Dusty Abydos</span>
          <h3>Đền Abydos</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="150">
          <img src="images/gallery-img-2.jpg" alt="" />
          <span>Trung tâm Ai Cập</span>
          <h3>Nam Sinai</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="200">
          <img src="images/gallery-img-3.jpg" alt="" />
          <span>chân Núi Sinai</span>
          <h3>Tu viện Thánh Catherine</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="250">
          <img src="images/gallery-img-4.jpg" alt="" />
          <span>Alexandria</span>
          <h3>thành phố Alexandria</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="300">
          <img src="images/gallery-img-5.jpg" alt="" />
          <span>Tây Sa mạc</span>
          <h3>Siwa Oasis</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="350">
          <img src="images/gallery-img-6.jpg" alt="" />
          <span>Bắc Farafra Oasis</span>
          <h3>Sa mạc trắng</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="400">
          <img src="images/gallery-img-7.jpg" alt="" />
          <span>Cairo</span>
          <h3>Bảo tàng egyptian</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="450">
          <img src="images/gallery-img-8.jpg" alt="" />
          <span>Nam Ai Cập</span>
          <h3>Abu simbel</h3>
        </div>
        <div clasName="box" data-aos="zoom-in-up" data-aos-delay="500">
          <img src="images/gallery-img-9.jpg" alt="" />
          <span>quận hồi giáo, Cairo</span>
          <h3>Hồi giáo Cairo</h3>
        </div>
      </div>
    </section>
  );
}
export default function Egypt() {
  return (
    <div className="Pages">
      <Header />
      <div className="container">
        <Home />
        <Bookform />
        <About />
        <Destination />
        <Services />
        <Gallery/>
      </div>
      <Footer />
    </div>
  );
}
