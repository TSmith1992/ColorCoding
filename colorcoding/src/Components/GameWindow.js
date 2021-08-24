const timePrint=(time)=>`${Math.floor(time/60000).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })}:${((time/1000)%60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })}`

function GameWindow({timer}) {
    // console.log("Game Window Timer:",timer);
    return (
        <div>
            <img 
            width="200px" 
            src="https://static3.depositphotos.com/1003288/169/i/950/depositphotos_1696563-stock-photo-closed-safe.jpg"
            alt="Closed Safe"
            />
            <h2>{timePrint(timer)}</h2>
        </div>
    )
}

export default GameWindow;