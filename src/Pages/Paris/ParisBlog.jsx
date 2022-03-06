import Header from "../../components/paris/Header2";
import Footer from "../../components/paris/Footer2";
import { useEffect } from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
export default function ParisBlog() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="Pages Paris">
      <Header />
      <div className="container" style={{marginTop:80}}>
        <section className="blog">BLOG</section>
      </div>
      <Footer/>
    </div>
  );
}
