import Header from "../../components/hawaii/Header2";
import Footer from "../../components/hawaii/Footer2";
import { useEffect } from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
export default function HawaiiBlog() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="Pages Hawaii">
      <Header />
      <div className="container" style={{marginTop:80}}>
        <section className="blog">BLOG</section>
      </div>
      <Footer/>
    </div>
  );
}
