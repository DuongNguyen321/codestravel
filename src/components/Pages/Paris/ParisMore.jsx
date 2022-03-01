import Header from "./Header2";
import Footer from "./Footer2";
import { useEffect } from "react";
import "../../../Style/pages/Paris/night.css"
import "../../../Style/pages/Paris/style.css"
 export default function ParisMore(){
       useEffect(() => {
         window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
         });
       }, []);
     return(
         <div className="Pages Paris">
             <Header/>
             <div className="container" style={{marginTop:80}}>
                 More
             </div>
             <Footer/>
         </div>
     )
 }