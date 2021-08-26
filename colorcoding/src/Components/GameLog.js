import LogEntry from "./LogEntry";

function GameLog({logEntries}) {

    return (
        <div id="game-log">
            {logEntries.map(entry=><LogEntry key={entry.id} entry={entry}/>)}
        </div>
    )
}

export default GameLog;