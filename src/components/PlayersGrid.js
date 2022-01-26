import React from "react";
import Players from "./Players";

const PlayersGrid = ({ players }) => {
  return (
    <div>
      {players.map((player) => (
        <Players key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayersGrid;
