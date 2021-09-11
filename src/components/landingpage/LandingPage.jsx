import React, { useState } from "react"
import '../landingpage/LandingPage.css'
import Mob_Header from "./landingpageheaders/mobheader/Mob_Header";
import Web_Header from "./landingpageheaders/webheader/Web_Header";



const LandingPage=()=>{
  const [isOpen,setIsOpen]=useState(false);
    
    
    return(
      <div id="Homes" className="LandingPage">
       <div className="Landing_Header">
          <span >GAMES </span> UP
       </div>

        <div className="Landing_Page_Web_Head">

       
       <Web_Header />
       </div>


       <div className="Landing_Page_Mob_Head">
         <div className="mobilemenu">
         <img  onClick={()=>{setIsOpen(!isOpen)}} src="https://img.icons8.com/fluency/48/000000/menu--v1.png"/>
        
      

       {isOpen?<Mob_Header isOpen={isOpen} setIsOpen={setIsOpen} />:""}
       </div>
       </div>
      <div className="Landing_page_Quotes">

      <span> FALIURE </span> DOESN'T MEAN <span> GAME OVER </span> IT MEANS TRY AGAIN WITH EXPERIENCE
      </div>

      </div>
    );
}
export default LandingPage;

