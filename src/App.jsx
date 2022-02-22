import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import Egypt from "./components/Pages/Egypt/Egypt"
import EgyptBook from "./components/Pages/Egypt/EgyptBook";
import EgyptBlog from "./components/Pages/Egypt/EgyptBlog";
import EgyptMore from "./components/Pages/Egypt/EgyptMore"
import Success from "./components/Home/Success";
import Images from "./components/Home/Images";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
   AOS.init({
     duration: 600,
     offset: 150,
     once: true,
   });
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/egypt" element={<Egypt />} />
        <Route path="/egypt/book" element={<EgyptBook />} />
        <Route path="/egypt/blog" element={<EgyptBlog />} />
        <Route path="/egypt/more" element={<EgyptMore />} />
        <Route path="/success" element={<Success />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </div>
  );
}

export default App;
