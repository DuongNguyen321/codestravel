import Header from "../../components/sydney/Header2";
import Footer from "../../components/sydney/Footer2";
import { useEffect } from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";

export default function SydneyBlog() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="Pages Sydney">
      <Header />
      <div className="container" style={{marginTop:80}}>
        <section className="blog">BLOG</section>
      </div>
      <Footer/>
    </div>
  );
}
