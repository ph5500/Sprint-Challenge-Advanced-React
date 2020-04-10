import React from "react";
import Players from "./players";

const PlayerList = props => {
  return (
    <div className="player-list">
      {props.players.map(player => (
        <Players player={player} />
      ))}
    </div>
  );
};

export default PlayerList;
