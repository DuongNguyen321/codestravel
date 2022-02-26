import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";

import HomePage from "./Home/HomePage";
import About from "./components/About";
import Success from "./components/Success";
import Images from "./components/Images";
import LoginRegister from "./components/LoginRegister";

import Egypt from "./components/Pages/Egypt/Egypt";
import EgyptBook from "./components/Pages/Egypt/EgyptBook";
import EgyptBlog from "./components/Pages/Egypt/EgyptBlog";
import EgyptMore from "./components/Pages/Egypt/EgyptMore";

import Mumbai from "./components/Pages/Mumbai/Mumbai";
import MumbaiBook from "./components/Pages/Mumbai/MumbaiBook";
import MumbaiBlog from "./components/Pages/Mumbai/MumbaiBlog";
import MumbaiMore from "./components/Pages/Mumbai/MumbaiMore";

import Hawaii from "./components/Pages/Hawaii/Hawaii";
import HawaiiBook from "./components/Pages/Hawaii/HawaiiBook";
import HawaiiBlog from "./components/Pages/Hawaii/HawaiiBlog";
import HawaiiMore from "./components/Pages/Hawaii/HawaiiMore";

import Sydney from "./components/Pages/Sydney/Sydney";
import SydneyBook from "./components/Pages/Sydney/SydneyBook";
import SydneyBlog from "./components/Pages/Sydney/SydneyBlog";
import SydneyMore from "./components/Pages/Sydney/SydneyMore";

dom.watch();

function App() {
  window.onload = function () {
    let body = document.body;
    var theme = localStorage.getItem("theme");
    if ((theme === "light")) {
      body.classList = "light";
    } else if ((theme === "dark")) {
      body.classList = "dark";
    } else {
      body.classList = "light";
    }
  };
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    disableMutationObserver: false,
    useClassNames: false,
    debounceDelay: 10,
    throttleDelay: 50,
    duration: 600,
    offset: 150,
    delay: 0,
    once: true,
  });
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/success" element={<Success />} />
        <Route path="/images" element={<Images />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/login" element={<LoginRegister />} />
        {/*  */}
        <Route path="/egypt" element={<Egypt />} />
        <Route path="/egypt/book" element={<EgyptBook />} />
        <Route path="/egypt/blog" element={<EgyptBlog />} />
        <Route path="/egypt/more" element={<EgyptMore />} />
        {/*  */}
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/mumbai/book" element={<MumbaiBook />} />
        <Route path="/mumbai/blog" element={<MumbaiBlog />} />
        <Route path="/mumbai/more" element={<MumbaiMore />} />
        {/*  */}
        <Route path="/hawaii" element={<Hawaii />} />
        <Route path="/hawaii/book" element={<HawaiiBook />} />
        <Route path="/hawaii/blog" element={<HawaiiBlog />} />
        <Route path="/hawaii/more" element={<HawaiiMore />} />
        {/*  */}
        <Route path="/sydney" element={<Sydney />} />
        <Route path="/sydney/book" element={<SydneyBook />} />
        <Route path="/sydney/blog" element={<SydneyBlog />} />
        <Route path="/sydney/more" element={<SydneyMore />} />
        {/*  */}
      </Routes>
    </div>
  );
}

export default App;
