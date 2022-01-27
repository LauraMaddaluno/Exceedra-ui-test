import React from "react";
import Table from "react-bootstrap/Table";

const PlayersGrid = ({ players }) => {
  return (
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
  );
};

export default PlayersGrid;
