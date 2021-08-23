import { comboColors } from "../gamefunctions";

function ColorGrid() {
    console.log(comboColors);

    return (
        <div className="color-grid-area">
            {comboColors.map(color=>{
            return (
                <div 
                key={color}
                className="color-grid-unit"
                style={{background: color}}
                ></div>
            )})}
        </div>
    )
}

export default ColorGrid;