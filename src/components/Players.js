import React from "react";

const Players = ({ player }) => {
  return (
    <section>
      {player.name} {player.surname} {player.nationality} {player.age}{" "}
      {player.points}
    </section>
  );
};

export default Players;
