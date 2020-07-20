import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Game({
  compCards,
  player,
  setPlayer,
  start,
  setCompCards,
  isPlayerWin,
  setIsPlayerWin,
  addToPlayer,
  wins,
  setWins,
  loses,
  setLoses,
  games,
  setGames,
  finish
}) {
  console.log(player);

  const [playerPoints, setPlayerPoints] = useState(0);
  let win;
  let button;

  if (compCards.length > 1) {
    button = "next";
  } else if (player.cards.length === 1) {
    button = "finish";
  }
  const increase = () => {
    setPlayerPoints(playerPoints + 1);
  };

  const play = event => {
    if (player.cards[0] > compCards[0]) {
      increase();
    }

    updateCards();

    if (player.cards.length >= 1) {
      event.preventDefault();
    } else if (player.cards.length === 0) {
      debugger;
       if (playerPoints > 13) {
         win=true
      }
      else if (playerPoints <= 13) {
        win=false
      }

      finish(win); 
      
     
    }
  };

  //-----------------------------------------------------------------------------------------------
  const updateCards = () => {
    player.cards.splice(0, 1);
    let newArray = [...player.cards];
    setPlayer({ ...player, cards: newArray });

    compCards.splice(0, 1);
    let array = [...compCards];
    setCompCards([...array]);
  };
  //---------------------------------------------------------------------------------------------

  
    
  //--------------------------------------------------------------------------------------------

  return (
    <div>
      <div>
        <h1>comp:</h1>
        <h3>{compCards[0]}</h3>
      </div>

      <div>
        <h1>{player.name}:</h1>
        <h3>{player.cards[0]}</h3>
      </div>
      <div>
        <Link to="/finishGame" onClick={play}>
          <button>{button}</button>
        </Link>
      </div>
    </div>
  );
}
