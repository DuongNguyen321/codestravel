import * as React from "react";
import * as ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "swiper/css";


dom.watch();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
