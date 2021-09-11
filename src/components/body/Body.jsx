import React from 'react'
import '../body/Body.css'
import LandingPage from '../landingpage/LandingPage.jsx'
import Games from '../gamesection/Games'
import Footer from '../footer/Footer'
import Opptunities from '../opportunitiesection/Opptunities'
import About from "../about/About.jsx"


function Body() {
    return (
       <div className="Body">
           <LandingPage /> 
        <Games />
       
        <Opptunities />
        <About />
      
         <Footer />

          
       </div>
    )
}

export default Body
