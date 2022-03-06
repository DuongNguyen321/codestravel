import { useEffect } from "react";
import Header from "../../components/homeComponent/Header";
import Footer from "../../components/homeComponent/Footer";
import Egypt from "../../components/gallery/Egypt";
import Tokyo from "../../components/gallery/Tokyo";
import Paris from "../../components/gallery/Paris";
import Sydney from "../../components/gallery/Sydney";
import Hawaii from "../../components/gallery/Hawaii";
import Mumbai from "../../components/gallery/Mumbai";
import { Chat } from "../Home/HomePage";
const HomeHeading = [
  { id: 1, text: "T", className: "" },
  { id: 2, text: "Ổ", className: "" },
  { id: 3, text: "N", className: "" },
  { id: 4, text: "G", className: "" },
  { id: 5, text: "", className: "space" },
  { id: 6, text: "H", className: "" },
  { id: 7, text: "Ợ", className: "" },
  { id: 8, text: "P", className: "" },
];
const HomeBox = [
  {
    id: 1,
    src: "../images/Home/g-1.jpg",
  },
  {
    id: 2,
    src: "../images/Home/g-2.jpg",
  },
  {
    id: 3,
    src: "../images/Home/g-3.jpg",
  },
  {
    id: 4,
    src: "../images/Home/g-4.jpg",
  },
  {
    id: 5,
    src: "../images/Home/g-5.jpg",
  },
  {
    id: 6,
    src: "../images/Home/g-6.jpg",
  },
  {
    id: 7,
    src: "../images/Home/g-7.jpg",
  },
  {
    id: 8,
    src: "../images/Home/g-8.jpg",
  },
  {
    id: 9,
    src: "../images/Home/g-9.jpg",
  },
];
const Home =()=>{
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        {HomeHeading.map((HomeHeading) => {
          return (
            <span key={HomeHeading.id} className={HomeHeading.className}>
              {HomeHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {HomeBox.map((HomeBox) => {
          return (
            <div className="box" key={HomeBox.id}>
              <img src={HomeBox.src} alt={HomeBox.h3} />
            </div>
          );
        })}
      </div>
    </section>
  );
}


export default function Images() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="HomePages">
      <Header />
      <div className="container" style={{ marginTop: 50 }}>
      <Home/>
      <Egypt/>
      <Tokyo/>
      <Paris/>
      <Sydney/>
      <Hawaii/>
      <Mumbai/>
      <Chat/>
      </div>
      <Footer />
    </div>
  );
}
