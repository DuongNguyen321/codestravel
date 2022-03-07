import React from "react";
import { Link } from "react-router-dom";
const HomeHeading = [
  { id: 1, text: "T", className: "" },
  { id: 2, text: "Ổ", className: "" },
  { id: 3, text: "N", className: "" },
  { id: 4, text: "G", className: "" },
  { id: 5, text: "", className: "space" },
  { id: 6, text: "H", className: "" },
  { id: 7, text: "Ợ", className: "" },
  { id: 8, text: "P", className: "" },
];
const HomeBox = [
  {
    id: 1,
    src: "../images/Home/g-1.jpg",
  },
  {
    id: 2,
    src: "../images/Home/g-2.jpg",
  },
  {
    id: 3,
    src: "../images/Home/g-3.jpg",
  },
  {
    id: 4,
    src: "../images/Home/g-4.jpg",
  },
  {
    id: 5,
    src: "../images/Home/g-5.jpg",
  },
  {
    id: 6,
    src: "../images/Home/g-6.jpg",
  },
  {
    id: 7,
    src: "../images/Home/g-7.jpg",
  },
  {
    id: 8,
    src: "../images/Home/g-8.jpg",
  },
  {
    id: 9,
    src: "../images/Home/g-9.jpg",
  },
];
 class Home extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoaded: false,
       HomeHeading: [],
       HomeBox: [],
       Homelink: "",
     };
   }
   componentDidMount() {
     fetch("https://apiforstravel.herokuapp.com/gallery")
       .then((res) => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             HomeHeading: result.HomeHeading,
             HomeBox: result.HomeBox,
             Homelink: result.Homelink,
           });
         },
         (error) => {
           this.setState({
             isLoaded: true,
             error,
           });
         }
       );
   }
   render() {
     return (
       <section className="gallery" id="gallery">
         <h1 className="heading">
           {this.state.HomeHeading.map((HomeHeading) => {
             return (
               <span key={HomeHeading.id} className={HomeHeading.className}>
                 {HomeHeading.text}
               </span>
             );
           })}
         </h1>
         <div className="box-container">
           {this.state.HomeBox.map((HomeBox) => {
             return (
               <Link to={this.state.Homelink} className="box" key={HomeBox.id}>
                 <img src={HomeBox.src} alt={HomeBox.h3} />
                 <div className="content">
                   <h3>Tổng hợp</h3>
                   <p>Tổng hợp những bức ảnh</p>
                   <p>đẹp nhất của Stravel</p>
                 </div>
               </Link>
             );
           })}
         </div>
       </section>
     );
   }
 }

export default Home