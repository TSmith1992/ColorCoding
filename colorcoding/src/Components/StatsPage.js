import React from "react";

//<>{leaderBoard.map(user => < div key={user.id}>{user["winArray"].length}</div>)}</>;
function StatsPage({ userList }) {
  const leaderBoard = userList.sort(
    (a, b) => b["winArray"].length - a["winArray"].length
  );

  return (
    <table>
      <tr>
        <th>Profile Picture</th>
        <th>Username</th>
        <th>Last Win Combo</th>
        <th>Last Win Time</th>
        <th>Last Comment</th>
        <th>Win Count</th>
      </tr>
      {leaderBoard.map((user) => (
        <tr key={user.id}>
          <td>
            <img 
              src={user.profilePic} 
              style={{height: '300px', width: '300px'}} 
              alt='Profile Pic'/>
          </td>
          <td>
            <strong>{user.userName}</strong>
          </td>
          <td>{user.winArray[0].WinCombo[0]} {user.winArray[0].WinCombo[1]} {user.winArray[0].WinCombo[0]}</td>
          <td>{user.winArray[0].winTime} seconds</td>
          <td>
            <em>{user.winArray[0].comment}</em>
          </td>
          <td>{user["winArray"].length}</td>
        </tr>
      ))}
    </table>
  );
}

export default StatsPage;
