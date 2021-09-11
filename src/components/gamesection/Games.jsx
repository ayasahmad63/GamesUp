import React from 'react'
import './Games.css'
import {GameData} from "../../data/gamedata";

function Games() {
    const Data=GameData;
    console.log(Data);
    return (
        <div className="Games_Section">
             <div id="Games" className="Games_Section_Heading">
                 Our <span>Games</span>
             </div>
            <div className="Game_Section_Games">
                
                
                {Data.map((data)=>{
                    return(
                    <div className="game">
                          <div className="game_image">
                              <img className="game_image" src={data.image}/>
                          </div>
                          <div className="game_content">
                              <div className="game_title">
                                  {data.title}
                              </div>
                              <div className="game_content">
                                  {data.content}
                              </div>
                              <div className="game_content_anchor">
                                  <div className="div_game_cont"><a  target="_blank" href={data.link} > Dowload & Play  </a></div>
                              </div>
                          </div>
                    </div>
                    )
                })}
               
            </div>
        </div>
    )
}

export default Games
