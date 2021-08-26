import React from "react";

//CREATE COMMENT SECTION FOR USER. THEN CREATE FETCH REQUEST TO UPDATE PLAYER'S COMMENT

function WinBox({ player, mostRecentWin, handleCommentSubmit }) {
  return (
    <div>
      <img
        src="https://media3.giphy.com/media/gQdejV5BBChHi/giphy.gif"
        alt="Duck diving in a vault of gold"
      />
      You won! The correct code was indeed {mostRecentWin.winCombo}! Good job {player.userName}! Head to the
      leaderboard to see how you compare to other players! Before you do though, tell us how you feel! 
      <form className="add-comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="How does it feel to be a winner?!"
            //value="TESTING COMMENT"
            onChange={onAddUserComment}
          />
      </form>
    </div>
  );
}
export default WinBox;
