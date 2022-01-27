import React from "react";
import Table from "react-bootstrap/Table";

const Players = ({ player }) => {
  return (
    <div>
      <Table striped bordered hover>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Nationality</th>
            <th>Age</th>
            <th>Points</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>{player.name}</td>
            <td>{player.surname}</td>
            <td>{player.nationality}</td>
            <td>{player.age}</td>
            <td>{player.points}</td>
          </tr>
        </tbody>

        {/* {player.name} {player.surname} {player.nationality} {player.age}{" "}
        {player.points} */}
      </Table>
    </div>
  );
};

export default Players;
