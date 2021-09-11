import React, { useState } from 'react'
import '../mobheader/Mob_Header.css'

function Mob_Header(props) {
    const {isOpen,setIsOpen}=props;
    return (
        <div className="Mob_Header_Content">
             <div className="Mob_Header_Header">
             {/* <img src="https://img.icons8.com/color/48/000000/delete-property.png" alt="" onClick={() => { setIsOpen(!isOpen) }} /> */}
              
               <div className="mob_options">
               <img   src="https://img.icons8.com/office/48/000000/home--v2.png" aly=""/>
               <a onClick={()=>{setIsOpen(!isOpen)}} className="Mob_option_Anchor" href="#Homes">
          Home
          </a>

               </div>
              
               <div className="mob_options">
               <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-game-controller-stay-at-home-flatart-icons-flat-flatarticons.png"/>
               <a onClick={()=>{setIsOpen(!isOpen)}} className="Mob_option_Anchor" href="#Games">
          Games
          </a>

               </div>
              
               <div className="mob_options">
               <img src="https://img.icons8.com/fluency/48/000000/communication-skill.png" alt=""/>
               <a onClick={()=>{setIsOpen(!isOpen)}} className="Mob_option_Anchor" href="#Opportunities">
          Work Opportunities
          </a>

               </div>
              
               <div className="mob_options">
               <img src="https://img.icons8.com/color/48/000000/contact-card.png" alt=""/>
               <a onClick={()=>{setIsOpen(!isOpen)}} className="Mob_option_Anchor" href="#About">
          About Us
          </a>

               </div>

             </div>

             {/* <div className="Landing_Navbar">
        
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
        
      </div> */}
        </div>
    )
}

export default Mob_Header
