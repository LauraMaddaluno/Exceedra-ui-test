import React from "react";
import { useState, useEffect } from "react";

function Welcome() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch("http://localhost:5000/players");
      const data = await response.json();
      console.log(data);
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  return (
    <section>
      <h1>Welcome</h1>
      <hr></hr>
      {players.map((player) => (
        <div>
          {player.name} {player.surname} {player.nationality} {player.age}
          {player.points}
        </div>
      ))}
    </section>
  );
}

export default Welcome;
