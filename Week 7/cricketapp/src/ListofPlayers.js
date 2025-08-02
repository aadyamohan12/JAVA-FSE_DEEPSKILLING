
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 65 },
    { name: 'Gill', score: 70 },
    { name: 'Rahul', score: 55 },
    { name: 'Pant', score: 90 },
    { name: 'Hardik', score: 60 },
    { name: 'Jadeja', score: 80 },
    { name: 'Shami', score: 75 },
    { name: 'Bumrah', score: 95 },
    { name: 'Kuldeep', score: 68 },
    { name: 'Ashwin', score: 77 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
