import Header from "./Header2";
import Footer from "./Footer2";
import { useEffect } from "react";
import "../../../Style/pages/Mumbai/night.css"
import "../../../Style/pages/Mumbai/style.css"
 export default function MumbaiMore(){
       useEffect(() => {
         window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
         });
       }, []);
     return(
         <div className="Pages Mumbai">
             <Header/>
             <div className="container" style={{marginTop:80}}>
                 More
             </div>
             <Footer/>
         </div>
     )
 }