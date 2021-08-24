import { useEffect, useState } from "react";
import { newGameObject } from "../gamefunctions";
import GameInput from "./GameInput";
import GameLog from "./GameLog";
import GameWindow from "./GameWindow";

function GamePage() {
    const [colorChoices,setColorChoices] = useState([{id: 1,color: "white"},{id: 2,color: "white"},{id: 3,color: "white"}]);
    const [gameLog,setGameLog] = useState([]);
    const [gameObject,setGameObject] = useState({});
    const [timer,setTimer] = useState(0);

    const checkWin = () => gameLog[0]&&gameLog[gameLog.length-1].win ? true : false;
    // console.log("Win?",checkWin());
    // console.log(gameLog);

    useEffect(()=>{
        let intervalTime = timer;
        let gameLogInner = [...gameLog];
        let countdown = setInterval(()=>{
            let win = checkWin();
            console.log("Win Status",win);
            console.log(gameLogInner);
            // debugger;
            if (intervalTime>0&&!win) {
                // let newTime = timer - 1000;
                // console.log(newTime);
                setTimer(timer=>timer-1000);
                intervalTime=intervalTime-1000;
                console.log("Interval Timer:",intervalTime);
            } else {
                clearInterval(countdown);
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

/*

create a template for the page
--create a window area for instructions and alerts
--create an input area for selecting and inputting the color codes
--create a log area for logging the inputs

*/