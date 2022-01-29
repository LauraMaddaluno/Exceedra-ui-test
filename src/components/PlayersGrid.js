import React from "react";
import { FaSort } from "react-icons/fa";

const PlayersGrid = ({ players, sorting }) => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => sorting("id")}>
              Ranking <FaSort />
            </th>
            <th onClick={() => sorting("name")}>
              First Name <FaSort />
            </th>
            <th onClick={() => sorting("surname")}>
              Surname <FaSort />
            </th>
            <th onClick={() => sorting("nationality")}>
              Nationality <FaSort />
            </th>
            <th onClick={() => sorting("age")}>
              Age <FaSort />
            </th>
            <th onClick={() => sorting("points")}>
              Points <FaSort />
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
