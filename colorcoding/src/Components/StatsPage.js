import React from "react";

function StatsPage({ userList }) {
  const leaderBoard = userList.map(user =><>hi</>)
  return <>{leaderBoard}</>;
}

export default StatsPage;
