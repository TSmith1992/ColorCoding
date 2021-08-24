import { comboColors } from "../gamefunctions";

function ColorGrid({colorChoice,changeColorChoice}) {

    return (
        <div className="color-grid-area">
            {comboColors.map(color=>{
                let opacity = color===colorChoice.color ? "100%" : "30%";
            return (
                <div 
                key={color}
                className="color-grid-unit"
                style={{background: color,opacity: opacity}}
                onClick={()=>{changeColorChoice(colorChoice.id,color)}}
                >
                </div>
            )})}
        </div>
    )
}

export default ColorGrid;