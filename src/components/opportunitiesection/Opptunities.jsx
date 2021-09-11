import React from 'react'
import '../opportunitiesection/Oppotunities.css'
import Projects_Background from  "../../assests/svgfiles/Project-Stage.svg"

function Opptunities() {
    return (
        <div id="Opportunities" className="Opptunities">
            <div  className="Opptunities_Header">
                Work <span>Opportunites</span>
              <div className="Opptunities_Content">
                 <div className="Opptunities_Content_left">
                     <ul>
                         <li>Game Developer Needed</li>
                         <li>Web Development part time job/internship </li>
                        <li>Marketing Internship</li>
                        <li>Graphic Design part time job/internship</li>
                         <li>Field Research & Data Collection Internship</li>
                      </ul>  

                 </div>
                 <div  className="Opptunities_Content_right">
                      <img src={Projects_Background} />
                 </div>
        



    
              </div>
           
            </div>
        </div>
    )
}

export default Opptunities
