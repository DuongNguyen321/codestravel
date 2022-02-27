// let btnToggle = document.querySelector(".btn-toggle");
// let searchBar = document.querySelector(".search-bar-container");
// let searchBtn = document.getElementById("search-btn");
// let loginForm = document.querySelector(".login-form-container");
// let navbar = document.querySelector(".navbar");
// let menu = document.querySelector("#menu-bar");
// let Navbar = document.querySelector(".Navbar");
// let videoBtn = document.querySelectorAll(".vid-btn");
// let formBtn = document.getElementById("login-btn");
// let formClose = document.getElementById("form-close");
// let menuBtn = document.getElementById("menu-btn");
// var Theme = localStorage.getItem("theme");
// let body = document.body;
// window.onscroll = () => {
  // searchBtn.classList.remove("fa-times");
  // searchBar.classList.remove("active");
  // menu.classList.remove("fa-times");
  // navbar.classList.remove("active");
  // loginForm.classList.remove("active");
  // document.querySelector("#menu-bar .fas").classList.add("fa-bars");
// };
// menu.addEventListener("click", () => {
//   menu.classList.toggle("fa-times");
//   document.querySelector("#menu-bar .fas").classList.toggle("fa-bars");
//   navbar.classList.toggle("active");
// });
// searchBtn.addEventListener("click", () => {
//   searchBtn.classList.toggle("fa-times");

//   searchBar.classList.toggle("active");
// });
// formBtn.addEventListener("click", () => {
//   loginForm.classList.add("active");
// });
// formClose.addEventListener("click", () => {
//   loginForm.classList.remove("active");
// });

// videoBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".controls .active").classList.remove("active");
//     btn.classList.add("active");
//     let src = btn.getAttribute("data-src");
//     document.querySelector("#video-slider").src = src;
//     console.log("đổi video");
//   });
// });
// menuBtn.onclick = () => {
//   Navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   Navbar.classList.remove("active");
// };
// document
//   .querySelectorAll(".about .video-container .controls .control-btn")
//   .forEach((btn) => {
//     btn.onclick = () => {
//       let src = btn.getAttribute("data-src");
//       document.querySelector(".about .video-container .video").src = src;
//     };
//   });

// btnToggle.addEventListener("click", function () {
//   if (body.getAttribute("class") === "light") {
//     body.classList = "dark";
//     localStorage.setItem("theme", "dark");
//     btnToggle.classList.remove("fa-moon");
//     btnToggle.classList.add("fa-sun-o");
//     console.log("Đảk");
//   } else {
//     body.classList = "light";
//     localStorage.setItem("theme", "light");
//     btnToggle.classList.add("fa-moon");
//     btnToggle.classList.remove("fa-sun-o");
//     console.log("Light");
//   }
// });
