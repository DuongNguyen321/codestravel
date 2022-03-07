import { useAuth0 } from "@auth0/auth0-react";

const homeContent = [
  { id: 1, text: "Khám phá các vùng đất mới cùng Stravel" },
  { id: 2, text: "Đang có ưu đãi mới !!!" },
];
const homeControls = [
  {
    id: 1,
    className: "vid-btn active",
    dataSrc: "https://apiforstravel.herokuapp.com/videos/vid-1.mp4",
  },
  {
    id: 2,
    className: "vid-btn",
    dataSrc: "https://apiforstravel.herokuapp.com/videos/vid-2.mp4",
  },
  {
    id: 3,
    className: "vid-btn",
    dataSrc: "https://apiforstravel.herokuapp.com/videos/vid-3.mp4",
  },
];

function Homecontent() {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated === true) {
    return (
      isAuthenticated && (
        <div className="content">
          <h3>Xin Chào {user.nickname} !</h3>

          {homeContent.map((homeContent) => {
            return <p key={homeContent.id}>{homeContent.text}</p>;
          })}

          <a href="#packages" className="btn">
            Khám phá ngay
          </a>
        </div>
      )
    );
  } else {
    return (
      <div className="content">
        <h3>Mọi chuyến đi đều đáng giá</h3>

        {homeContent.map((homeContent) => {
          return <p key={homeContent.id}>{homeContent.text}</p>;
        })}

        <a href="#packages" className="btn">
          Khám phá ngay
        </a>
      </div>
    );
  }
}

export default function Home(props) {
  const handleVidbtn = (e) => {
    let videoBtn = document.querySelectorAll(".vid-btn");
    videoBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
      });
    });
  };
  return (
    <section className="home" id="home">
      <Homecontent />
      <div className="controls">
        {homeControls.map((homeControls) => {
          return (
            <span
              onClick={handleVidbtn}
              key={homeControls.id}
              className={homeControls.className}
              data-src={homeControls.dataSrc}
            ></span>
          );
        })}
      </div>
      <div className="video-container">
        <video
          src="https://apiforstravel.herokuapp.com/videos/vid-3.mp4"
          id="video-slider"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
}
