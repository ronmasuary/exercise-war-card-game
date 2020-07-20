import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import OpeningPage from "./components/OpeningPage";
import Game from "./components/Game";
import Finish from "./components/Finish";

function App() {
  //--------------------------------------------------------------------------------------------------------------------------------------------
 
  const [compCards, setCompCards] = useState();
  const [player, setPlayer] = useState({
    name: "",

    wins: 0,

    loses: 0,

    games: 0,

    cards: []
  });
  const [isPlayerWin, setIsPlayerWin] = useState(false);

  
  //---------------------------------------------------------------------------

  const finish = (win) => {
    
      
      

    if (win===true) {
      setIsPlayerWin(true)
      addToPlayer({ wins: player.wins + 1, games: player.games + 1 });
    } else if (win===false) {
      addToPlayer({ loses: player.loses + 1, games: player.games + 1 });
    }

    
  };
  //------------------------------------------------------------------------
  const start = name => {
    let temp = [];
setIsPlayerWin(false)
    for (let t = 1; t < 5; t++) {
      for (let i = 1; i < 14; i++) {
        temp.push(i);
      }
    }
    let playerCards = [];
    let cardsToDivide = temp;

    for (let i = 0; i < 26; i++) {
      let randIndex = Math.floor(Math.random() * cardsToDivide.length);
      let n = cardsToDivide[randIndex];
      playerCards.push(n);
      cardsToDivide.splice(randIndex, 1);
    }

    let cardsToComp = cardsToDivide;
    setCompCards([...cardsToComp]);

    if (name !== "") {
      name = name;
    } else if (name === "") {
      name = player.name;
    }

    addToPlayer({ name, cards: playerCards });
  };

  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  const addToPlayer = partialPlayer => {
    setPlayer({
      ...player,
      ...partialPlayer
    });
  };

  //--------------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <OpeningPage start={start} />
          </Route>
          <Route exact path="/gamePage">
            <Game
              player={player}
              compCards={compCards}
              setCompCards={setCompCards}
              setPlayer={setPlayer}
              start={start}
              isPlayerWin={isPlayerWin}
              setIsPlayerWin={setIsPlayerWin}
              addToPlayer={addToPlayer}
              finish={finish}
            />
          </Route>

          <Route
            exact
            path="/finishGame"
            component={() => (
              <Finish player={player} isPlayerWin={isPlayerWin} start={start} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
