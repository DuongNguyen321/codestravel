import Header from "../../components/mumbai/Header2";
import Footer from "../../components/mumbai/Footer2";
import { useEffect } from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
export default function MumbaiBlog() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="Pages Mumbai">
      <Header />
      <div className="container" style={{marginTop:80}}>
        <section className="blog">BLOG</section>
      </div>
      <Footer/>
    </div>
  );
}
