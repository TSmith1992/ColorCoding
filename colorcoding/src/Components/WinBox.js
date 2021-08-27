import React from "react";

//CREATE COMMENT SECTION FOR USER. THEN CREATE FETCH REQUEST TO UPDATE PLAYER'S COMMENT

function WinBox({ player, handleCommentSubmit, onAddUserComment, gameObject }) {

  return (
    <div id="win-box">
      <img
        src="https://media3.giphy.com/media/gQdejV5BBChHi/giphy.gif"
        alt="Duck diving in a vault of gold"
      />
      <p>You won! The correct code was indeed {gameObject.winningCombo[0]}, {gameObject.winningCombo[1]}, and {gameObject.winningCombo[2]}! Good job {player.userName}! Head to the
      leaderboard to see how you compare to other players! Before you do though, tell us how you feel!</p>
      <form className="add-comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="How does it feel to be a winner?!"
            onChange={onAddUserComment}
          />
      </form>
    </div>
  );
}

export default WinBox;
