import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";

import HomePage from "./Home/HomePage";
import About from "./About";
import Success from "./Success";
import Images from "./Images";

import Egypt from "./Pages/Egypt/Egypt";
import EgyptBook from "./Pages/Egypt/EgyptBook";
import EgyptBlog from "./Pages/Egypt/EgyptBlog";
import EgyptMore from "./Pages/Egypt/EgyptMore";

import Mumbai from "./Pages/Mumbai/Mumbai";
import MumbaiBook from "./Pages/Mumbai/MumbaiBook";
import MumbaiBlog from "./Pages/Mumbai/MumbaiBlog";
import MumbaiMore from "./Pages/Mumbai/MumbaiMore";

import Hawaii from "./Pages/Hawaii/Hawaii";
import HawaiiBook from "./Pages/Hawaii/HawaiiBook";
import HawaiiBlog from "./Pages/Hawaii/HawaiiBlog";
import HawaiiMore from "./Pages/Hawaii/HawaiiMore";

import Sydney from "./Pages/Sydney/Sydney";
import SydneyBook from "./Pages/Sydney/SydneyBook";
import SydneyBlog from "./Pages/Sydney/SydneyBlog";
import SydneyMore from "./Pages/Sydney/SydneyMore";

import Paris from "./Pages/Paris/Paris";
import ParisBook from "./Pages/Paris/ParisBook";
import ParisBlog from "./Pages/Paris/ParisBlog";
import ParisMore from "./Pages/Paris/ParisMore";

import Tokyo from "./Pages/Tokyo/Tokyo";
import TokyoBook from "./Pages/Tokyo/TokyoBook";
import TokyoBlog from "./Pages/Tokyo/TokyoBlog";
import TokyoMore from "./Pages/Tokyo/TokyoMore";
import CommingSoon from "./comming/Comming";

dom.watch();

function App() {

  window.onload = function () {
    let body = document.body;
    var theme = localStorage.getItem("theme");
    let btnToggle = document.querySelector(".btn-toggle");

    if (theme === "light") {
      body.classList = "light";
      btnToggle.classList.add("fa-moon");
      btnToggle.classList.remove("fa-sun-o");
    } else if (theme === "dark") {
      body.classList = "dark";
      btnToggle.classList.remove("fa-moon");
      btnToggle.classList.add("fa-sun-o");
    } else {
      body.classList = "light";
      btnToggle.classList.add("fa-moon");
      btnToggle.classList.remove("fa-sun-o");
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
        <Route path="/commingsoon" element={<CommingSoon />} />
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
        <Route path="/paris" element={<Paris />} />
        <Route path="/paris/book" element={<ParisBook />} />
        <Route path="/paris/blog" element={<ParisBlog />} />
        <Route path="/paris/more" element={<ParisMore />} />
        {/*  */}
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="/tokyo/book" element={<TokyoBook />} />
        <Route path="/tokyo/blog" element={<TokyoBlog />} />
        <Route path="/tokyo/more" element={<TokyoMore />} />
        {/*  */}
      </Routes>
    </div>
  );
}

export default App;
