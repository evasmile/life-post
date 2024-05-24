import React from "react";

function Footer(){

return(
<footer style={{backgroundColor: "crimson",
textAlign: "center",
position: "fixed",
bottom: "0",
width: "100%",
zIndex: "4"}} >
   
    

      <h5 style={{margin: "0", fontSize: "small"}}>Design by Surprise Mathonsi</h5>
      <div>
        <a href="/"><img src="pictures/facebook.png" className="footerImg" alt="facebook"/></a>
        <a href="/"><img src="pictures/instagram.jpg" className="footerImg" alt="instrgram"/></a>
        <a href="/"><img src="pictures/linkin.png" className="footerImg" alt="linkedin"/></a>
      </div>

    <p style={{margin: "0"}}>Copyright © {new Date().getFullYear()} </p>
  
  </footer>
)
}

export default Footer;