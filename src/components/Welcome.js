import React from "react";
import Table from "react-bootstrap/Table";
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

      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Nationality</th>
            <th>Age</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr>
              <td>{player.name}</td>
              <td>{player.surname}</td>
              <td>{player.nationality}</td>
              <td>{player.age}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* {players.map((player) => (
        <div>
        {player.name} {player.surname} {player.nationality} {player.age}
           {player.points}
       </div>
       ))} */}
    </section>
  );
}

export default Welcome;
