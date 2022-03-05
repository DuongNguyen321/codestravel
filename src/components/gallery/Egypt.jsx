import { Link } from "react-router-dom";

const EgyptHeading = [
  { id: 1, text: "E", className: "" },
  { id: 2, text: "G", className: "" },
  { id: 3, text: "Y", className: "" },
  { id: 4, text: "P", className: "" },
  { id: 5, text: "T", className: "" },
];
const EgyptBox = [
  {
    id: 1,
    src: "../images/Egypt/gallery-img-1.jpg",
  },
  {
    id: 2,
    src: "../images/Egypt/gallery-img-2.jpg",
  },
  {
    id: 3,
    src: "../images/Egypt/gallery-img-3.jpg",
  },
  {
    id: 4,
    src: "../images/Egypt/gallery-img-4.jpg",
  },
  {
    id: 5,
    src: "../images/Egypt/gallery-img-5.jpg",
  },
  {
    id: 6,
    src: "../images/Egypt/gallery-img-6.jpg",
  },
  {
    id: 7,
    src: "../images/Egypt/gallery-img-7.jpg",
  },
  {
    id: 8,
    src: "../images/Egypt/gallery-img-8.jpg",
  },
  {
    id: 9,
    src: "../images/Egypt/gallery-img-9.jpg",
  },
];
const Egypt = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {EgyptHeading.map((EgyptHeading) => {
          return (
            <span key={EgyptHeading.id} className={EgyptHeading.className}>
              {EgyptHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {EgyptBox.map((EgyptBox) => {
          return (
            <div className="box" key={EgyptBox.id}>
              <img src={EgyptBox.src} alt={EgyptBox.h3} />
              <div className="content">
                <h3>Egypt</h3>
                <p>Vùng Đất Của Pharaohs</p>
                <Link to="/egypt" className="btn">
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

export default Egypt
