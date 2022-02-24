import Header from "./Header2";
import Footer from "./Footer2";
import { useEffect } from "react";
import "../../../Style/pages/Hawaii/night.css"
import "../../../Style/pages/Hawaii/style.css"
 export default function HawaiiMore(){
       useEffect(() => {
         window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
         });
       }, []);
     return(
         <div className="Pages Hawaii">
             <Header/>
             <div className="container" style={{marginTop:80}}>
                 More
             </div>
             <Footer/>
         </div>
     )
 }