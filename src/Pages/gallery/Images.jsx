import { useEffect } from "react";
import Header from "../../components/homeComponent/Header";
import Footer from "../../components/homeComponent/Footer";
import Egypt from "../../components/gallery/Egypt";
import Tokyo from "../../components/gallery/Tokyo";
import Paris from "../../components/gallery/Paris";
import Sydney from "../../components/gallery/Sydney";
import Hawaii from "../../components/gallery/Hawaii";
import Mumbai from "../../components/gallery/Mumbai";
import Chat from "../../components/chatbot/MainChat";
import Home from "../../components/gallery/Home";
// https://apiforstravel.herokuapp.com/images/

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
      <div className="container" style={{ marginTop: 50 }}>
      <Home/>
      <Egypt/>
      <Tokyo/>
      <Paris/>
      <Sydney/>
      <Hawaii/>
      <Mumbai/>
      <Chat/>
      </div>
      <Footer />
    </div>
  );
}
