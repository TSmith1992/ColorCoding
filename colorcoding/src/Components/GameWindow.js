const timePrint = (time) =>
  `${Math.floor(time / 60000).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${((time / 1000) % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;

function GameWindow({ timer, showRules, player }) {
  const { userName, profilePic } = player;
  // console.log("Game Window Timer:",timer);
  return (
    <div id="short-rules">
      {showRules ? (
        <div>
          {/* <strong>
            <em>=RULES=</em>
          </strong>
          * You will have unlimited chances to try and choose the correct
          combination of colors. * Choose amongst the nine (9) colors under each
          white square ⬜ . <em> psst...white is ALSO a color! </em>* You will
          be timed ⏱️, so make sure to
          <strong>
            <em>***CRACK THE CODE***</em>
          </strong>
          soon! * The Safe gives you some clues to let you know how you're
          doing. Each symbol after your entry means something: */}
          {/* <div>
            ❌ : No colors were correct. 😬 : Only one (1) of the colors was
            correct. 🔥 : Two (2) of the colors are correct. 🌟 : SUCCESS!
          </div> */}
          {/* Good luck, {userName}!
          <img src={profilePic} alt="Player" /> */}
          <p>❌ : No colors were correct.</p>
          <p>😬 : Only one (1) of the colors was</p>
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
