import Header from "./Header2";
import Footer from "./Footer2";
import { useEffect } from "react";
import "../../../Style/pages/Sydney/night.css"
import "../../../Style/pages/Sydney/style.css"
 export default function SydneyMore(){
       useEffect(() => {
         window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
         });
       }, []);
     return(
         <div className="Pages Sydney">
             <Header/>
             <div className="container" style={{marginTop:80}}>
                 More
             </div>
             <Footer/>
         </div>
     )
 }