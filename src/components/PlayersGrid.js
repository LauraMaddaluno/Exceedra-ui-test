import React from "react";
import { FaSort } from "react-icons/fa";

const PlayersGrid = ({ players, sorting }) => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              Ranking <FaSort onClick={() => sorting("id")} />
            </th>
            <th>
              First Name <FaSort onClick={() => sorting("name")} />
            </th>
            <th>
              Surname <FaSort onClick={() => sorting("surname")} />
            </th>
            <th>
              Nationality <FaSort onClick={() => sorting("nationality")} />
            </th>
            <th>
              Age <FaSort onClick={() => sorting("age")} />
            </th>
            <th>
              Points <FaSort onClick={() => sorting("points")} />
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.surname}</td>
              <td>{player.nationality}</td>
              <td>{player.age}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersGrid;
