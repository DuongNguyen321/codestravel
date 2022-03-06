import Header from "../../components/tokyo/Header";
import Footer from "../../components/tokyo/Footer";
import { useEffect } from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
export default function TokyoBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Pages Tokyo">
      <Header />
      <div className="container" style={{ marginTop: 80 }}>
        <section className="blog">BLOG</section>
      </div>
      <Footer />
    </div>
  );
}
