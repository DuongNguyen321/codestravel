import { Link } from "react-router-dom";
const HawaiiHeading = [
  { id: 1, text: "H", className: "" },
  { id: 2, text: "A", className: "" },
  { id: 3, text: "W", className: "" },
  { id: 4, text: "A", className: "" },
  { id: 5, text: "I", className: "" },
  { id: 6, text: "I", className: "" },
];
const HawaiiBox = [
  {
    id: 1,
    src: "../images/Hawaii/gallery-img-1.jpg",
  },
  {
    id: 2,
    src: "../images/Hawaii/gallery-img-2.jpg",
  },
  {
    id: 3,
    src: "../images/Hawaii/gallery-img-3.jpg",
  },
  {
    id: 4,
    src: "../images/Hawaii/gallery-img-4.jpg",
  },
  {
    id: 5,
    src: "../images/Hawaii/gallery-img-5.jpg",
  },
  {
    id: 6,
    src: "../images/Hawaii/gallery-img-6.jpg",
  },
  {
    id: 7,
    src: "../images/Hawaii/gallery-img-7.jpg",
  },
  {
    id: 8,
    src: "../images/Hawaii/gallery-img-8.jpg",
  },
  {
    id: 9,
    src: "../images/Hawaii/gallery-img-9.jpg",
  },
];
const Hawaii = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {HawaiiHeading.map((HawaiiHeading) => {
          return (
            <span key={HawaiiHeading.id} className={HawaiiHeading.className}>
              {HawaiiHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {HawaiiBox.map((HawaiiBox) => {
          return (
            <div className="box" key={HawaiiBox.id}>
              <img src={HawaiiBox.src} alt={HawaiiBox.h3} />
              <div className="content">
                <h3>Hawaii</h3>
                <p>Hòn Ngọc Của Thái Bình Dương</p>
                <Link to="/hawaii" className="btn">
                  Đặt Ngay
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Hawaii