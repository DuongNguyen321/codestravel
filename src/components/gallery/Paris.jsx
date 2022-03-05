import { Link } from "react-router-dom";
const ParisHeading = [
  { id: 1, text: "P", className: "" },
  { id: 2, text: "A", className: "" },
  { id: 3, text: "R", className: "" },
  { id: 4, text: "I", className: "" },
  { id: 5, text: "S", className: "" },
];
const ParisBox = [
  {
    id: 1,
    src: "../images/Paris/gallery-img-1.jpg",
  },
  {
    id: 2,
    src: "../images/Paris/gallery-img-2.jpg",
  },
  {
    id: 3,
    src: "../images/Paris/gallery-img-3.jpg",
  },
  {
    id: 4,
    src: "../images/Paris/gallery-img-4.jpg",
  },
  {
    id: 5,
    src: "../images/Paris/gallery-img-5.jpg",
  },
  {
    id: 6,
    src: "../images/Paris/gallery-img-6.jpg",
  },
  {
    id: 7,
    src: "../images/Paris/gallery-img-7.jpg",
  },
  {
    id: 8,
    src: "../images/Paris/gallery-img-8.jpg",
  },
  {
    id: 9,
    src: "../images/Paris/gallery-img-9.jpg",
  },
];
const Paris = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {ParisHeading.map((ParisHeading) => {
          return (
            <span key={ParisHeading.id} className={ParisHeading.className}>
              {ParisHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {ParisBox.map((ParisBox) => {
          return (
            <div className="box" key={ParisBox.id}>
              <img src={ParisBox.src} alt={ParisBox.h3} />
              <div className="content">
                <h3>Paris</h3>
                <p>Kinh Đô Thời Trang</p>
                <Link to="/paris" className="btn">
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
export default Paris