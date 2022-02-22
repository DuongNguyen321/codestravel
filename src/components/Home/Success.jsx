import Header from "./Header";
import Footer from "./Footer";
import "../../Style/night.css"
import "../../Style/style.css"
export default function Success(){
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