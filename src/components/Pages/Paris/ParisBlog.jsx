import Header from "./Header2";
import Footer from "./Footer2";
import { useEffect } from "react";

import "../../../Style/pages/style.css";
import "../../../Style/pages/night.css";

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
