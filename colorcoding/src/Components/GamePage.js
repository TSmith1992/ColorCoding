import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createWinObject, newGameObject } from "../gamefunctions";
import GameInput from "./GameInput";
import GameLog from "./GameLog";
import GameWindow from "./GameWindow";
import IntroRulesBox from "./IntroRulesBox";
import WinBox from "./WinBox";

function GamePage({ player, postWin, fetchAPI }) {
  const [colorChoices, setColorChoices] = useState([
    { id: 1, color: "white" },
    { id: 2, color: "white" },
    { id: 3, color: "white" },
  ]);
  const [gameLog, setGameLog] = useState([]);
  const [gameObject, setGameObject] = useState({});
  const [timer, setTimer] = useState(0);
  const [mostRecentWin, setMostRecentWin] = useState({}); 
  const [showSafe, setShowSafe] = useState(false);
  const [showRules, setShowRules] = useState(false)
  const [showWinBox, setShowWinBox] = useState(false)
  const [commentSubmit, setCommentSubmit] = useState("")
  
  const history = useHistory();

  const checkWin = () =>
    gameLog[0] && gameLog[gameLog.length - 1].win ? true : false;
  // console.log(gameLog);

  console.log("Player", player);

  useEffect(() => {
    let intervalTime = timer;
    let gameLogInner = [...gameLog];
    let countdown = setInterval(() => {
      let win = checkWin();
      // console.log("Win Status",win);
      // console.log(gameLogInner);
      // debugger;
      if (intervalTime > 0 && !win) {
        setTimer((timer) => timer - 1000);
        intervalTime = intervalTime - 1000;
        console.log("Interval Timer:", intervalTime);
      } else {
        clearInterval(countdown);
        //if there is a gameObject loaded and no game log or no win on the final gameLog entry, then trigger a loss function
        if (gameObject.timeToWin && !checkWin()) {
          // loseGame
        }
        //if there is a gameObject loaded and there is a game log, and the last element in the game log is a win, trigger winGame
        if (gameObject.timeToWin && checkWin()) {
          winGame();
        }
        console.log("Timer Done");
      }
    }, 1000);
    return function cleanup() {
      clearInterval(countdown);
    };
  }, [gameObject, gameLog]);

  function startGame() {
    let newGame = newGameObject();
    console.log("New Game:", newGame);
    setTimer(newGame.timeToWin);
    setGameObject(newGame);
    setShowRules(!showRules)
  }

  function winGame(
    game = gameObject,
    user = player,
    time = timer,
    log = gameLog,
  ) {
    setShowWinBox(!showWinBox)
    let winObject = createWinObject(game, time, log);
    setMostRecentWin(winObject);
    setShowWinBox(!showWinBox)
  }

  //add comment from win
  function handleCommentSubmit(e){
      e.preventDefault();
      postWin({...mostRecentWin, "comment": commentSubmit });

      history.push("/leaderboard")
      
  }

  function onAddUserComment(e) {
    let value = e.target.value;
    setCommentSubmit(value);
  }

  console.log("Most Recent Win", mostRecentWin);

  return (
    <div id="game-area" className="site-page">
      <div id="game-text-wrapper">
        <h1>Crack the Code!</h1>
        {!showSafe && !showWinBox ? <IntroRulesBox player={player} /> : ""}
        {!showSafe && !showWinBox? (
          <button id="rulesButton" onClick={() => setShowSafe(!showSafe)}>
            Go to safe
          </button>
        ) : (
          ""
        )}
        {showSafe && !showWinBox ? <GameWindow timer={timer} showRules={showRules} player={player}/> : ""}
        {showSafe && !showWinBox ? (
          <GameInput
            colorChoices={colorChoices}
            setColorChoices={setColorChoices}
            gameLog={gameLog}
            setGameLog={setGameLog}
            gameObject={gameObject}
            startGame={startGame}
          />
        ) : (
          ""
        )}
        {showWinBox? <WinBox mostRecentWin={mostRecentWin} player={player} handleCommentSubmit={handleCommentSubmit} onAddUserComment={onAddUserComment}/> : null}
      </div>

      {gameLog.length>0 ? <GameLog logEntries={gameLog} /> : null}

    </div>
  );
}

export default GamePage;
