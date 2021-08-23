function LogEntry({entry}) {
    return (
        <div className="log-entry">
            Entry {entry.id}:{" "}
            {entry.combo.map((color,index)=><span key={color}>{color}{index===entry.combo.length ? "" : ", "}</span>)}
        </div>
    )
}

export default LogEntry;