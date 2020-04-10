import React from "react";

const Players = props => {
  return (
    // console.log(player.props)
    //need to add data-testid for testing later below
    <div className="player">
      <h2>{props.player.name}</h2>
      <p>{props.player.country}</p>
      <p>Searches: {props.player.searches}</p>
    </div>
  );
};

export default Players;
