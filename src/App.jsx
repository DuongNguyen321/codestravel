import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import Egypt from "./components/Pages/Egypt"
import EgyptBook from "./components/Pages/EgyptBook";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
   AOS.init({
     duration: 600,
     offset: 150,
     once: true,
       mirror: false,
   });
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/egypt" element={<Egypt />} />
        <Route path="/egypt/book" element={<EgyptBook />} />
      </Routes>
    </div>
  );
}

export default App;
