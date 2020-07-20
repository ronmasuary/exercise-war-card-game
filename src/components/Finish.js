import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Finish({isPlayerWin, player,start}) {
  
  
  const startGame=()=>{
    start(player.name)
  }
  
    let result;
    if (isPlayerWin===true){
      result='win'
    }
    else if (isPlayerWin===false) {
      result='lose'
    }
  
  
  
  return( 
    <div>
    <h1>you {result}</h1>
      <h3>{player.wins}-{player.loses}</h3>
      
  <Link to='/gamePage' onClick={startGame}><button>again?</button></Link>
  
  </div>
         );
}

