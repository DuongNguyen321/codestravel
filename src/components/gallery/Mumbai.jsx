import { Link } from "react-router-dom";
const MumbaiHeading = [
  { id: 1, text: "M", className: "" },
  { id: 2, text: "U", className: "" },
  { id: 3, text: "M", className: "" },
  { id: 4, text: "B", className: "" },
  { id: 5, text: "A", className: "" },
  { id: 6, text: "I", className: "" },
];
const MumbaiBox = [
  {
    id: 1,
    src: "../images/Mumbai/gallery-img-1.jpg",
  },
  {
    id: 2,
    src: "../images/Mumbai/gallery-img-2.jpg",
  },
  {
    id: 3,
    src: "../images/Mumbai/gallery-img-3.jpg",
  },
  {
    id: 4,
    src: "../images/Mumbai/gallery-img-4.jpg",
  },
  {
    id: 5,
    src: "../images/Mumbai/gallery-img-5.jpg",
  },
  {
    id: 6,
    src: "../images/Mumbai/gallery-img-6.jpg",
  },
  {
    id: 7,
    src: "../images/Mumbai/gallery-img-7.jpg",
  },
  {
    id: 8,
    src: "../images/Mumbai/gallery-img-8.jpg",
  },
  {
    id: 9,
    src: "../images/Mumbai/gallery-img-9.jpg",
  },
];
const Mumbai = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {MumbaiHeading.map((MumbaiHeading) => {
          return (
            <span key={MumbaiHeading.id} className={MumbaiHeading.className}>
              {MumbaiHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {MumbaiBox.map((MumbaiBox) => {
          return (
            <div className="box" key={MumbaiBox.id}>
              <img src={MumbaiBox.src} alt={MumbaiBox.h3} />
              <div className="content">
                <h3>Mumbai</h3>
                <p>Thành Phố Có Tất Cả</p>
                <Link to="/mumbai" className="btn">
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
export default Mumbai