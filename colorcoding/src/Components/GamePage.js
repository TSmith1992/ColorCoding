import { useState } from "react";
import GameInput from "./GameInput";
import GameLog from "./GameLog";
import GameWindow from "./GameWindow";

function GamePage() {
    const [colorChoices,setColorChoices] = useState([{id: 1,color: "white"},{id: 2,color: "white"},{id: 3,color: "white"}]);
    const [gameLog,setGameLog] = useState([]);

    return (
    <div id="game-area">
        <h1>Crack the Code!</h1>
        <GameWindow />
        <GameInput 
            colorChoices={colorChoices} 
            setColorChoices={setColorChoices}
            gameLog={gameLog}
            setGameLog={setGameLog}
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