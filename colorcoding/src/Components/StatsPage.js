import React from "react";

function StatsPage({ leaderList }) {
  const leaderBoard = leaderList.sort(
    (a, b) => b["winArray"].length - a["winArray"].length
  );

  const leaderBoardWin = leaderBoard.filter(
    (player) => player.winArray.length > 0
  );

  return (
    <div className="site-page">
    <table>
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>Username</th>
          <th>1st Win Color</th>
          <th>2nd Win Color</th>
          <th>3rd Win Color</th>
          <th>Last Win Time</th>
          <th>Last Comment</th>
          <th>Win Count</th>
        </tr>
      </thead>
      <tbody>
        {leaderBoardWin.map((user) => (
          <tr key={user.id}>
            <td>
              <img
                src={user.profilePic}
                style={{ height: "300px", width: "300px" }}
                alt="Profile Pic"
              />
            </td>
            <td>
              <strong>{user.userName}</strong>
            </td>
            <td style={{ background: `${user.winArray[0].winCombo[0]}` }}>
              {user.winArray[0].winCombo[0]}
            </td>
            <td style={{ background: `${user.winArray[0].winCombo[1]}` }}>
              {user.winArray[0].winCombo[1]}
            </td>
            <td style={{ background: `${user.winArray[0].winCombo[2]}` }}>
              {user.winArray[0].winCombo[2]}
            </td>
            <td>{user.winArray[0].winTime/1000} seconds</td>
            <td>
              <em>{user.winArray[0].comment}</em>
            </td>
            <td>{user.winArray.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default StatsPage;
