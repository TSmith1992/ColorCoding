import { useState } from "react";
import GameInput from "./GameInput";
import GameLog from "./GameLog";
import GameWindow from "./GameWindow";

function GamePage() {
    const [colorChoices,setColorChoices] = useState([{id: 1,color: "red"},{id: 1,color: "blue"},{id: 1,color: "green"}])

    return (
    <div id="game-area">
        <h1>Crack the Code!</h1>
        <GameWindow />
        <GameInput colorChoices={colorChoices} setColorChoices={setColorChoices}/>
        <GameLog />
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