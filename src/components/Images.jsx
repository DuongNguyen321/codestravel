import "../Style/night.css";
import "../Style/style.css";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
      <div className="container" style={{ marginTop: 80 }}>
        <section className="images">Img</section>
      </div>
      <Footer />
    </div>
  );
}
