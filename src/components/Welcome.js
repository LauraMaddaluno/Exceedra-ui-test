import React from "react";
import PlayersGrid from "./PlayersGrid";
import { useState, useEffect } from "react";

function Welcome() {
  const [players, setPlayers] = useState([]);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...players].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setPlayers(sorted);
      setOrder("DES");
    } else {
      const sorted = [...players].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setPlayers(sorted);
      setOrder("ASC");
    }
  };

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

      <PlayersGrid players={players} sorting={sorting} />
    </div>
  );
}

export default Welcome;
