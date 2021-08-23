import LogEntry from "./LogEntry";

function GameLog({logEntries}) {
    console.log(logEntries);
    
    return (
        <div id="game-log">
            {logEntries.length>0 ? logEntries.map(entry=><LogEntry key={entry.id} entry={entry}/>) : "Enter a combination to log the attempt."}
        </div>
    )
}

export default GameLog;