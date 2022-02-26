import "../Style/style.css";
import "../Style/night.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

export default function LoginRegister() {
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
        Register
      </div>
      <Footer />
    </div>
  );
}
