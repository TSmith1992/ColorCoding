import React from "react";

//<>{leaderBoard.map(user => < div key={user.id}>{user["winArray"].length}</div>)}</>;
function StatsPage({ userList }) {
  const leaderBoard = userList.sort(
    (a, b) => b["winArray"].length - a["winArray"].length
  );

  let colorBox1;
  let colorBox2;
  let colorBox3;


  return (
    <table>
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
          <td style={{background: `${user.winArray[0].WinCombo[0]}`}}>
            {user.winArray[0].WinCombo[0]}
          </td>
          <td style={{background: `${user.winArray[0].WinCombo[1]}`}}>
            {user.winArray[0].WinCombo[1]}
          </td>
          <td style={{background: `${user.winArray[0].WinCombo[2]}`}}>
            {user.winArray[0].WinCombo[2]}
          </td>
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
