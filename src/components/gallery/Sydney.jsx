import { Link } from "react-router-dom";
const SydneyHeading = [
  { id: 1, text: "S", className: "" },
  { id: 2, text: "Y", className: "" },
  { id: 3, text: "D", className: "" },
  { id: 4, text: "N", className: "" },
  { id: 5, text: "E", className: "" },
  { id: 6, text: "Y", className: "" },
];
const SydneyBox = [
  {
    id: 1,
    src: "../images/Sydney/gallery-img-1.jpg",
  },
  {
    id: 2,
    src: "../images/Sydney/gallery-img-2.jpg",
  },
  {
    id: 3,
    src: "../images/Sydney/gallery-img-3.jpg",
  },
  {
    id: 4,
    src: "../images/Sydney/gallery-img-4.jpg",
  },
  {
    id: 5,
    src: "../images/Sydney/gallery-img-5.jpg",
  },
  {
    id: 6,
    src: "../images/Sydney/gallery-img-6.jpg",
  },
  {
    id: 7,
    src: "../images/Sydney/gallery-img-7.jpg",
  },
  {
    id: 8,
    src: "../images/Sydney/gallery-img-8.jpg",
  },
  {
    id: 9,
    src: "../images/Sydney/gallery-img-9.jpg",
  },
];
const Sydney = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {SydneyHeading.map((SydneyHeading) => {
          return (
            <span key={SydneyHeading.id} className={SydneyHeading.className}>
              {SydneyHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {SydneyBox.map((SydneyBox) => {
          return (
            <div className="box" key={SydneyBox.id}>
              <img src={SydneyBox.src} alt={SydneyBox.h3} />
              <div className="content">
                <h3>Sydney</h3>
                <p>Xứ Sở Chuột Túi</p>
                <Link to="/sydney" className="btn">
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
export default Sydney