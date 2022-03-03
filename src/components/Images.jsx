
import { useEffect } from "react";
import CommingSoon from "./comming/Comming";
export default function Images() {
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
  return (

     <CommingSoon/>

  );
}
