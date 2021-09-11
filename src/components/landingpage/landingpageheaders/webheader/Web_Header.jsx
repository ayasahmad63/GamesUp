import React from 'react'
import "../webheader/Web_Header.css"


function Web_Header() {
    return (
        <div>
            
       <div className="Landing_Navbar">
        
        <a className="Landing_Navbar_Home" href="#Homes">
          Home
          </a>
         
        <a className="Landing_Navbar_Games" href="#Games">
          Games
         </a>
        <a className="Landing_Navbar_Works" href="#Opportunities">
          Work Opportunities
         </a>
        <a  className="Landing_Navbar_About" href="#About">
          About Us
         </a>
        
      </div>
        </div>
    )
}

export default Web_Header
