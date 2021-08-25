import { useEffect, useState } from "react";
import { createWinObject, newGameObject } from "../gamefunctions";
import GameInput from "./GameInput";
import GameLog from "./GameLog";
import GameWindow from "./GameWindow";

function GamePage({player, postWin}) {
    const [colorChoices,setColorChoices] = useState([{id: 1,color: "white"},{id: 2,color: "white"},{id: 3,color: "white"}]);
    const [gameLog,setGameLog] = useState([]);
    const [gameObject,setGameObject] = useState({});
    const [timer,setTimer] = useState(0);
    const [mostRecentWin,setMostRecentWin] = useState({});

    const checkWin = () => gameLog[0]&&gameLog[gameLog.length-1].win ? true : false;
    // console.log("Win?",checkWin());
    // console.log(gameLog);

    console.log("Player",player);

    useEffect(()=>{
        let intervalTime = timer;
        let gameLogInner = [...gameLog];
        let countdown = setInterval(()=>{
            let win = checkWin();
            // console.log("Win Status",win);
            // console.log(gameLogInner);
            // debugger;
            if (intervalTime>0&&!win) {
                setTimer(timer=>timer-1000);
                intervalTime=intervalTime-1000;
                console.log("Interval Timer:",intervalTime);
            } else {
                clearInterval(countdown);
                //if there is a gameObject loaded and no game log or no win on the final gameLog entry, then trigger a loss function
                if(gameObject.timeToWin&&!checkWin()) {
                    // loseGame
                }
                //if there is a gameObject loaded and there is a game log, and the last element in the game log is a win, trigger winGame
                if(gameObject.timeToWin&&checkWin()) {
                    winGame();
                }
                console.log("Timer Done");
            }
        }, 1000);
        return function cleanup() {
            clearInterval(countdown);
        }
    },[gameObject,gameLog])

    function startGame() {
        let newGame = newGameObject();
        console.log("New Game:",newGame);
        setTimer(newGame.timeToWin);
        setGameObject(newGame);
    }

    function winGame(game=gameObject,user=player,time=timer,log=gameLog) {
        let winObject = createWinObject(game,time,log);
        setMostRecentWin(winObject);
        postWin(winObject);
    }

    console.log("Most Recent Win",mostRecentWin);

    return (
    <div id="game-area">
        <h1>Crack the Code!</h1>
        <GameWindow timer={timer}/>
        <GameInput 
            colorChoices={colorChoices} 
            setColorChoices={setColorChoices}
            gameLog={gameLog}
            setGameLog={setGameLog}
            gameObject={gameObject}
            startGame={startGame}
            />
        <GameLog logEntries={gameLog}/>
    </div>
    )
}

export default GamePage;