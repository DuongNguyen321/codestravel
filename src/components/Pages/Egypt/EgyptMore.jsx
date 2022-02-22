import Header from "./Header2";
import Footer from "./Footer2";
import "../../../Style/pages/Egypt/night.css"
import "../../../Style/pages/Egypt/style.css"
 export default function EgyptMore(){
     return(
         <div className="Pages">
             <Header/>
             <div className="container" style={{marginTop:80}}>
                 More
             </div>
             <Footer/>
         </div>
     )
 }