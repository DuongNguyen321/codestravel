import "./index.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Stravel
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const Section = () => {
  function handleAdd(e) {
    var newsletter = document.querySelector(".newsletter");
    newsletter.classList.add("active");
  }
  return (
    <section>
      <img alt="img" src="./images/Home/curve.png" className="wave" />
      <div className="contentBx">
        <h2>Comming Soon...</h2>
        <p>
          Page đang trong quá trình hoàn thiện và nâng cấp. Chúng tôi sẽ gửi thông báo tới bạn khi Page hoàn thành bằng việc bạn điền vào form "Thông Báo cho tôi"
        </p>
        <div className="countdown">
          <div className="time">
            <span id="day"></span>
            <p>Ngày</p>
          </div>
          <div className="time">
            <span id="hour"></span>
            <p>Giờ</p>
          </div>
          <div className="time">
            <span id="minute"></span>
            <p>Phút</p>
          </div>
          <div className="time">
            <span id="second"></span>
            <p>Giây</p>
          </div>
        </div>
        <button onClick={handleAdd}>Thông báo cho tôi</button>
      </div>

      <div className="imgBx">
        <img alt="img" src="./images/Home/man.png" />
      </div>
      <ul className="sci">
        <li>
          <Link to="/">
            <img alt="img" src="./images/Home/facebook.png" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="img" src="./images/Home/instagram.png" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="img" src="./images/Home/twitter.png" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
const Newsletter = () => {
      function handleRemove(e) {
        var newsletter = document.querySelector(".newsletter");
        newsletter.classList.remove("active");
      }
  return (
    <div className="newsletter">
      <img alt="img" src="./images/Home/close.png" onClick={handleRemove} />
      <h2>thông báo cho tôi</h2>
      <p>Nhập email của bạn</p>
      <div className="inputBox">
        <form action="">
          <input type="email" name="" placeholder="abc@gmail.com"/>
          <input type="submit" value="Gửi đi" />
        </form>
      </div>
    </div>
  );
};

export default function CommingSoon() {
  window.onscroll = function () {
    var newsletter = document.querySelector(".newsletter");
    newsletter.classList.remove("active");
  };
  var countDate = new Date("March 6,2022 00:00:00").getTime();
  useEffect(()=>{
 function newYear() {
   var now = new Date().getTime();
   const gap = countDate - now;
   var second = 1000;
   var minute = second * 60;
   var hour = minute * 60;
   var day = hour * 24;
   var d = Math.floor(gap / day);
   var h = Math.floor((gap % day) / hour);
   var m = Math.floor((gap % hour) / minute);
   var s = Math.floor((gap % minute) / second);
   document.getElementById("day").innerText = d;
   document.getElementById("hour").innerText = h;
   document.getElementById("minute").innerText = m;
   document.getElementById("second").innerText = s;
 }
   setInterval(function () {
     newYear();
   }, 1000);

  })

  return (
    <div className="Comming">
      <Header />
      <Section />
      <Newsletter />
    </div>
  );
}
