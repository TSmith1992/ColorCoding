import React from "react";

function StatsPage({ userList }) {
  const leaderBoard = userList.sort((a,b) => a["winArray"].length > b["winArray"].length)

  return <>{leaderBoard.map(user => <>hik</>)}</>;
}

export default StatsPage;
