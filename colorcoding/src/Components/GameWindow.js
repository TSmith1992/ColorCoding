const timePrint = (time) =>
  `${Math.floor(time / 60000).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${((time / 1000) % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;

function GameWindow({ timer, showRules, player }) {
  return (
    <div id="short-rules">
      {showRules ? (
        <div>
          <p>❌ : No colors were correct.</p>
          <p>😬 : Only one (1) of the colors was correct</p>
          <p>🔥 : Two (2) of the colors are correct.</p>
          <p>🌟 : SUCCESS!</p>
        </div>
      ) : (
        <img
          width="500px"
          src="https://thumbs.gfycat.com/AssuredIncompleteItalianbrownbear-size_restricted.gif"
          alt="Opening Vault"
        />
      )}
      <h2>{timePrint(timer)}</h2>
    </div>
  );
}

export default GameWindow;
