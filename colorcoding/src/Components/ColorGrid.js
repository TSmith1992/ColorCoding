import { comboColors } from "../gamefunctions";

function ColorGrid({colorChoice,changeColorChoice}) {

    return (
        <div className="color-grid-area">
            {comboColors.map(color=>{
            return (
                <div 
                key={color}
                className="color-grid-unit"
                style={{background: color}}
                onClick={()=>{changeColorChoice(colorChoice.id,color)}}
                >
                </div>
            )})}
        </div>
    )
}

export default ColorGrid;