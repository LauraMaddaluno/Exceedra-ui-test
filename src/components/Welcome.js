import React from "react";
import PlayersGrid from "./PlayersGrid";
import { useState, useEffect } from "react";

function Welcome() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch("http://localhost:5000/players");
      const data = await response.json();
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <hr></hr>
      <PlayersGrid players={players} />
    </div>
  );
}

export default Welcome;
