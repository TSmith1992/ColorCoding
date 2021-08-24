const gameIndicators = ["❌","😬","🔥","🌟"];

function LogEntry({entry}) {
    let colorEntryKey = 0;

    return (
        <div className="log-entry">
            Entry {entry.id}:{" "}
            {entry.combo.map((color,index)=>{
                colorEntryKey++;
                return <span key={colorEntryKey}>{color}{index===entry.combo.length-1 ? "" : ", "}</span>
            })} {gameIndicators[entry.result]}
        </div>
    )
}

export default LogEntry;