import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "../../Style/home/night.css";
import "../../Style/home/style.css";
import "../../Style/home/rate.css";
import "./homechat.css";

import Header from "../../components/homeComponent/Header";
import Footer from "../../components/homeComponent/Footer";
import Chatbots from "../../components/chatbot/Chatbot";

const homeContent = [
  { id: 1, text: "Khám phá các vùng đất mới cùng Stravel" },
  { id: 2, text: "Đang có ưu đãi mới !!!" },
];
const homeControls = [
  {
    id: 1,
    className: "vid-btn active",
    dataSrc: "https://apiforstravel.herokuapp.com/videos/vid-1.mp4",
  },
  {
    id: 2,
    className: "vid-btn",
    dataSrc: "https://apiforstravel.herokuapp.com/videos/vid-2.mp4",
  },
  {
    id: 3,
    className: "vid-btn",
    dataSrc: "https://apiforstravel.herokuapp.com/videos/vid-3.mp4",
  },
];

function Homecontent() {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated === true) {
    return (
      isAuthenticated && (
        <div className="content">
          <h3>Xin Chào {user.nickname} !</h3>

          {homeContent.map((homeContent) => {
            return <p key={homeContent.id}>{homeContent.text}</p>;
          })}

          <a href="#packages" className="btn">
            Khám phá ngay
          </a>
        </div>
      )
    );
  } else {
    return (
      <div className="content">
        <h3>Mọi chuyến đi đều đáng giá</h3>

        {homeContent.map((homeContent) => {
          return <p key={homeContent.id}>{homeContent.text}</p>;
        })}

        <a href="#packages" className="btn">
          Khám phá ngay
        </a>
      </div>
    );
  }
}

function Home(props) {
  const handleVidbtn = (e) => {
    let videoBtn = document.querySelectorAll(".vid-btn");
    videoBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
      });
    });
  };
  return (
    <section className="home" id="home">
      <Homecontent />
      <div className="controls">
        {homeControls.map((homeControls) => {
          return (
            <span
              onClick={handleVidbtn}
              key={homeControls.id}
              className={homeControls.className}
              data-src={homeControls.dataSrc}
            ></span>
          );
        })}
      </div>
      <div className="video-container">
        <video
          src="https://apiforstravel.herokuapp.com/videos/vid-3.mp4"
          id="video-slider"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
}
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      bookHeading: [],
      bookSelect: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            bookHeading: result.bookHeading,
            bookSelect: result.bookSelect,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <section className="book" id="book">
        <h1 className="heading">
          {this.state.bookHeading.map((bookHeading) => {
            return (
              <span key={bookHeading.id} className={bookHeading.className}>
                {bookHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="row">
          <div className="image">
            <img
              src="https://apiforstravel.herokuapp.com/images/Home/book-img.svg"
              alt=""
            />
          </div>
          <form action="">
            <div className="inputBox">
              <h3>Hãy liên hệ với tôi bằng :</h3>
              <input type="text" placeholder="Email hoặc số điện thoại" />
            </div>
            <div className="inputBox">
              <h3>Tôi muốn đến :</h3>
              <select defaultValue="">
                {this.state.bookSelect.map((bookSelect) => {
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
              <input type="number" placeholder="Số người" min={2} />
            </div>
            <div className="inputBox">
              <h3>bắt đầu từ :</h3>
              <input type="date" />
            </div>
            <div className="inputBox">
              <h3>Kết thúc vào :</h3>
              <input type="date" />
            </div>
            <Link to={"/commingsoon"} className="btn">
              Tìm Ngay
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

class Packages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      packagesHeading: [],
      packagesBox: [],
      packagesStar: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            packagesHeading: result.packagesHeading,
            packagesBox: result.packagesBox,
            packagesStar: result.packagesStar,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <section className="packages" id="packages">
        <h1 className="heading">
          {this.state.packagesHeading.map((packagesHeading) => {
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
          {this.state.packagesBox.map((packagesBox) => {
            return (
              <Link to={packagesBox.href} className="box" key={packagesBox.id}>
                <img src={packagesBox.src} alt={packagesBox.h3} />
                <div className="content">
                  <h3>
                    <i className="fas fa-map-marker-alt"></i>
                    {packagesBox.h3}
                  </h3>
                  <p>{packagesBox.p1}</p>
                  <p>{packagesBox.p2}</p>
                  <div className="stars">
                    {this.state.packagesStar.map((packagesStar) => {
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
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      servicesHeading: [],
      servicesBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            servicesHeading: result.servicesHeading,
            servicesBox: result.servicesBox,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <section className="services" id="services">
        <h1 className="heading">
          {this.state.servicesHeading.map((servicesHeading) => {
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
          {this.state.servicesBox.map((servicesBox) => {
            return (
              <Link to={"/aboutus"} className="box" key={servicesBox.id}>
                <i className={servicesBox.icon}></i>
                <h3>{servicesBox.h3}</h3>
                <p>{servicesBox.p}</p>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      galleryHeading: [],
      galleryBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            galleryHeading: result.galleryHeading,
            galleryBox: result.galleryBox,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <section className="gallery" id="gallery">
        <h1 className="heading">
          {this.state.galleryHeading.map((galleryHeading) => {
            return (
              <span
                key={galleryHeading.id}
                className={galleryHeading.className}
              >
                {galleryHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.galleryBox.map((galleryBox) => {
            return (
              <div className="box" key={galleryBox.id}>
                <img src={galleryBox.src} alt={galleryBox.h3} />
                <div className="content">
                  <h3>{galleryBox.h3}</h3>
                  <p>{galleryBox.p}</p>
                  <Link to="/images" className="btn">
                    Xem thêm
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

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

class ReviewRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ratingStar: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ratingStar: result.ratingStar,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="row">
        <div className="ratestar">
          <h2>đánh giá chuyến đi của bạn</h2>
          <div className="skills">
            <div className="rating">
              {this.state.ratingStar.map((ratingStar) => {
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
  }
}
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reviewHeading: [],
      reviewBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reviewHeading: result.reviewHeading,
            reviewBox: result.reviewBox,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <section className="review" id="review">
        <h1 className="heading">
          {this.state.reviewHeading.map((reviewHeading) => {
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
            {this.state.reviewBox.map((reviewBox) => {
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
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contactHeading: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            contactHeading: result.contactHeading,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <section className="contact" id="contact">
        <h1 className="heading">
          {this.state.contactHeading.map((contactHeading) => {
            return (
              <span
                key={contactHeading.id}
                className={contactHeading.className}
              >
                {contactHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="row">
          <div className="image">
            <iframe
              title="Địa chỉ"
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
              <input
                type="text"
                placeholder="Số điện thoại"
                minLength={9}
                maxLength={11}
              />
              <input type="text" placeholder="Vấn đề bạn cần trao đổi" />
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
  }
}

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      brandBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            brandBox: result.brandBox,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <Swiper
        className="swiper-container brand-slider"
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log("Review change")}
      >
        <div className="swiper-wrapper">
          {this.state.brandBox.map((brandBox) => {
            return (
              <SwiperSlide className="swiper-slide" key={brandBox.id}>
                <img src={brandBox.src} alt="" />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    );
  }
}

export function Chat() {
  function handleClick() {
    let formchat = document.querySelector(".formchat");
    formchat.classList.toggle("active");
  }
  return (
    <div className="HomeChat">
      <button className="Chattoggle" onClick={handleClick}>
        <i className="fab fa-facebook-messenger"></i>
      </button>
      <div className="formchat">
        <Chatbots />
      </div>
    </div>
  );
}

function HomePage(props) {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  window.onscroll = () => {
    let searchBtn = document.getElementById("search-btn");
    let searchBar = document.querySelector(".search-bar-container");
    let menu = document.querySelector("#menu-bar");
    let loginForm = document.querySelector(".login-form-container");
    let navbar = document.querySelector(".navbar");
    loginForm.classList.remove("active");
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    document.querySelector("#menu-bar .fas").classList.add("fa-bars");
  };
  return (
    <div className="HomePages">
      <Header />
      <div className="container">
        <Home />
        <Chat />
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
