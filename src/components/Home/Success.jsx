import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import "../../Style/night.css"
import "../../Style/style.css"
export default function Success(){
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
          <section className="success">Success</section>
        </div>
        <Footer />
      </div>
    );
}