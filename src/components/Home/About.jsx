import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import "../../Style/style.css";
import "../../Style/night.css";
export default function About() {
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
      <div className="container" style={{ marginTop: 80 }}>
        <section className="aboutus">AB</section>
      </div>
      <Footer />
    </div>
  );
}
