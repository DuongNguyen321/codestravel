import Header from "./Header2";
import Footer from "./Footer2";
import { useEffect } from "react";
import "../../../Style/pages/Tokyo/night.css"
import "../../../Style/pages/Tokyo/style.css"
 export default function TokyoMore(){
       useEffect(() => {
         window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
         });
       }, []);
     return(
         <div className="Pages Tokyo">
             <Header/>
             <div className="container" style={{marginTop:80}}>
                 More
             </div>
             <Footer/>
         </div>
     )
 }