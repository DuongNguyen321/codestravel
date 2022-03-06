import App from "./components/App";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


export default function Main(){
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
      return <App/>
}