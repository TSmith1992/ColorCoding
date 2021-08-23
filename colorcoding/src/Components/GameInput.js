import ColorGrid from "./ColorGrid";
import ComboEntry from "./ComboEntry";

function GameInput() {
    return (
        <div id="game-input-area">
            <div id="combo-display-area" className="input-section">
                <ComboEntry key="1"/>
                <ComboEntry key="2"/>
                <ComboEntry key="3"/>
                {/* <div className="combo-entry-display" id="combo-entry-one"></div>
                <div className="combo-entry-display" id="combo-entry-two"></div>
                <div className="combo-entry-display" id="combo-entry-three"></div> */}
            </div>
            <div id="color-selection-area" className="input-section">
                <ColorGrid key="1"/>
                <ColorGrid key="2"/>
                <ColorGrid key="3"/>
            </div>
            <button id="enter-button">Enter</button>
        </div>
    )
}

export default GameInput;

/*

X create three blocks to represent the chosen colors
X create an element that will show a grid of each color to choose from
create an enter button

*/