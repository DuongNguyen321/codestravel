import { Link } from "react-router-dom";
const TokyoHeading = [
  { id: 1, text: "T", className: "" },
  { id: 2, text: "O", className: "" },
  { id: 3, text: "K", className: "" },
  { id: 4, text: "Y", className: "" },
  { id: 5, text: "O", className: "" },
];
const TokyoBox = [
  {
    id: 1,
    src: "../images/Tokyo/gallery-img-1.jpg",
  },
  {
    id: 2,
    src: "../images/Tokyo/gallery-img-2.jpg",
  },
  {
    id: 3,
    src: "../images/Tokyo/gallery-img-3.jpg",
  },
  {
    id: 4,
    src: "../images/Tokyo/gallery-img-4.jpg",
  },
  {
    id: 5,
    src: "../images/Tokyo/gallery-img-5.jpg",
  },
  {
    id: 6,
    src: "../images/Tokyo/gallery-img-6.jpg",
  },
  {
    id: 7,
    src: "../images/Tokyo/gallery-img-7.jpg",
  },
  {
    id: 8,
    src: "../images/Tokyo/gallery-img-8.jpg",
  },
  {
    id: 9,
    src: "../images/Tokyo/gallery-img-9.jpg",
  },
];
const Tokyo = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {TokyoHeading.map((TokyoHeading) => {
          return (
            <span key={TokyoHeading.id} className={TokyoHeading.className}>
              {TokyoHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {TokyoBox.map((TokyoBox) => {
          return (
            <div className="box" key={TokyoBox.id}>
              <img src={TokyoBox.src} alt={TokyoBox.h3} />
              <div className="content">
                <h3>Tokyo</h3>
                <p>Truyền Thống Và Tương Lai</p>
                <Link to="/tokyo" className="btn">
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
export default Tokyo