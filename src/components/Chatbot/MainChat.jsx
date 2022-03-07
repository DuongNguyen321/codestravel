import Chatbots from "./Chatbot";
import "./mainchat.css"
export default function Chat() {
  function handleClick() {
    let formchat = document.querySelector(".formchat");
    formchat.classList.toggle("active");
  }
  return (
    <div className="MainChat">
      <button className="Chattoggle" onClick={handleClick}>
        <i className="fab fa-facebook-messenger"></i>
      </button>
      <div className="formchat">
        <Chatbots />
      </div>
    </div>
  );
}
