import "../../Style/night.css";
import "../../Style/style.css";
import Header from "./Header";
import Footer from "./Footer";
export default function Images() {
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
