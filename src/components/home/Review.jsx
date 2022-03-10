import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
export default class Review extends React.Component {
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
