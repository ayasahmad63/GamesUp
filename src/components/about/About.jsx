import React from 'react';
import Footer from '../footer/Footer';
import './About.css'


function About() {
    return (
        <div id="About" className="About">
         <div className="About_About_US">
           <div className="About_About_US_Header">
              ABOUT US
              <p className="About_About_US_Header_para">Hello,I  am Ayas Ahmad
                <br/>A Full Stack Developer and Competetive Coder <br/>
                Ethusiasist Competetive Coder
              </p>
           </div>
         </div>
         <div className="About_Categories">
         <div className="About_Categories_Header">
             Categories
             <ul>
                 <li>Action</li>
                 <li>Racing</li>
                 <li>Adventure</li>
                 <li>Simulation</li>
                 <li>Bike</li>
             </ul>
         </div>
         </div>
         <div className="About_Platform">
         <div className="About_Platform_header">
             Platform
             <ul>
                 <li>Pc</li>
                 <li>Ps4</li>
                 <li>XBOX 360</li>
                 <li>XBOX ONE</li>
             </ul>
         </div>
         </div>
        <div className="About_Information">
          <div className="About_Information_Header">
              Information
                <ul>
                    <li>Contact Us</li>
                    <li>Wish Lists</li>
                    <li>Site Map</li>
                    <li>Terms & Conditions</li>

                </ul>
                </div>
        </div>
        
       
        </div>
    )
}

export default About
