import { makeLogEntryObject } from "../gamefunctions";
import ColorGrid from "./ColorGrid";
import ComboEntry from "./ComboEntry";

function GameInput({colorChoices,setColorChoices,gameLog,setGameLog,gameObject,startGame}) {

    function changeColorChoice(id,color) {
        let newColorChoices = JSON.parse(JSON.stringify(colorChoices));
        newColorChoices[id-1] = {id: id,color: color};
        setColorChoices(newColorChoices);
    }

    function logCombination() {
        let newGameLog = makeLogEntryObject(colorChoices,gameLog,gameObject);
        setGameLog(newGameLog);
    }

    return (
        <div id="game-input-area">

            {!gameObject.timeToWin ? 
            <button onClick={()=>startGame()} id="start-button">Start Game</button> :
            <>
                <div id="combo-display-area" className="input-section">
                    {colorChoices.map(colorChoice=><ComboEntry 
                        key={colorChoice.id} 
                        colorChoice={colorChoice}
                        />)}
                </div>
                <div id="color-selection-area" className="input-section">
                    {colorChoices.map(colorChoice=><ColorGrid 
                        key={colorChoice.id} 
                        colorChoice={colorChoice} 
                        changeColorChoice={changeColorChoice}
                        />)}
                </div>
                <button 
                    id="enter-button"
                    onClick={()=>{logCombination()}}
                >
                    Enter
                </button>
            </>
            }
        </div>
    )
}

export default GameInput;

/*

X create three blocks to represent the chosen colors
X create an element that will show a grid of each color to choose from
create an enter button

*/