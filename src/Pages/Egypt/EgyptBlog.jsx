import Header from "../../components/egypt/Header2";
import Footer from "../../components/egypt/Footer2";
import { useEffect } from "react";

import "../../Style/citys/night.css";
import "../../Style/citys/style.css";

export default function EgyptBlog() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="Pages Egypt">
      <Header />
      <div className="container" style={{marginTop:80}}>
        <section className="blog">BLOG</section>
      </div>
      <Footer/>
    </div>
  );
}
